import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import { withRouter } from '../../hoc/withRouter'
import { getUserProfileThunks } from '../../redux/profile-reducer'

class ProfileContainerClass extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 2
    }

    this.props.getUserProfileThunks(userId)
     
  }

  render() {
    if (!this.props.isAuth) {
      return <Navigate to="/login" replace />
    }

    return <Profile {...this.props} />
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
  }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainerClass)

export default connect(mapStateToProps, { getUserProfileThunks })(
  WithUrlDataContainerComponent,
)
