import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import { setUserProfile } from '../../redux/profile-reducer'
import axios from 'axios'
import { withRouter } from '../../hoc/withRouter'

class ProfileContainerClass extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 2
    }

    axios
      .get(`/samurai-api/api/1.0/profile/${userId}`, {
        withCredentials: true,
      })
      .then((response) => {
        this.props.setUserProfile(response.data)
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
