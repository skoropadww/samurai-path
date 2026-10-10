import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import { withRouter } from '../../hoc/withRouter'
import { getUserProfileThunks } from '../../redux/profile-reducer'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'

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

let AuthRedirectComponent = withAuthRedirect(ProfileContainerClass)


let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  }
}

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, { getUserProfileThunks })(
  WithUrlDataContainerComponent,
)
