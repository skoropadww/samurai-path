import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import { withRouter } from '../../hoc/withRouter'
import { getUserProfileThunks, getStatusThunks, updateStatusThunks } from '../../redux/profile-reducer'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

class ProfileContainerClass extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId ) {
      userId = this.props.loginedUserId
    }

    this.props.getUserProfileThunks(userId)
    this.props.getStatusThunks(userId)
     
  }

  render() {
    

    return <Profile {...this.props} status={this.props.status} updateStatus={this.props.updateStatusThunks} />
  }
}

compose()(ProfileContainerClass)

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    loginedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
  }
}

export default compose(
  connect(mapStateToProps, { getUserProfileThunks , getStatusThunks, updateStatusThunks}),
  withRouter,
  withAuthRedirect,
)(ProfileContainerClass)
