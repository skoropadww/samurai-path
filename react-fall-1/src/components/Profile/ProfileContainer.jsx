import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import { withRouter } from '../../hoc/withRouter'
import { getUserProfileThunks } from '../../redux/profile-reducer'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

class ProfileContainerClass extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 2
    }

    this.props.getUserProfileThunks(userId)
     
  }

  render() {
    

    return <Profile {...this.props} />
  }
}

compose()(ProfileContainerClass)

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  }
}

export default compose(
  connect(mapStateToProps, { getUserProfileThunks }),
  withRouter,
  withAuthRedirect,
)(ProfileContainerClass)
