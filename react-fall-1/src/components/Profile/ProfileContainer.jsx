import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import { setUserProfile } from '../../redux/profile-reducer'
import { withRouter } from '../../hoc/withRouter'
import { publicInstance } from '../../api/api'

class ProfileContainerClass extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 2
    }

    publicInstance
      .get(`profile/${userId}`)
      .then((response) => {
        this.props.setUserProfile(response.data)
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
