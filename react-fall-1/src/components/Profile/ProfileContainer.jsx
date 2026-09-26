import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import { setUserProfile } from '../../redux/profile-reducer'
import axios from 'axios'

class ProfileContainerClass extends React.Component {
  componentDidMount() {
    axios
      .get('/samurai-api/api/1.0/profile/2', {
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

export default connect(mapStateToProps, { setUserProfile })(ProfileContainerClass)
