import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import { setUserProfile } from '../../redux/profile-reducer'
import { withRouter } from '../../hoc/withRouter'
import { profileAPI } from '../../api/api'

class ProfileContainerClass extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 2
    }

    profileAPI
      .getProfile(userId)
      .then((data) => {
        this.props.setUserProfile(data)
      })
      .catch((error) => {
        console.error('Не удалось загрузить профиль', error)
      })
  }

  render() {
    return <Profile {...this.props} />
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainerClass)

export default connect(mapStateToProps, { setUserProfile })(
  WithUrlDataContainerComponent,
)
