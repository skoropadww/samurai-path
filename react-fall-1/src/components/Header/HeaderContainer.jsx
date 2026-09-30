import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { setAuthUserData, toggleIsFetching } from '../../redux/auth-reducer'
import { authAPI, profileAPI } from '../../api/api'

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true)

    authAPI
      .me()
      .then((data) => {
        this.props.toggleIsFetching(false)
        if (data.resultCode === 0) {
          let { id, login, email } = data.data
          this.props.setAuthUserData(id, login, email, null)

          profileAPI
            .getProfile(id)
            .then((profile) => {
              let photoUrl = profile.photos.small || profile.photos.large || null
              this.props.setAuthUserData(id, login, email, photoUrl)
            })
            .catch(() => {})
        }
      })
      .catch(() => {
        this.props.toggleIsFetching(false)
      })
  }

  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    userId: state.auth.userId,
    photoUrl: state.auth.photoUrl,
    isFetching: state.auth.isFetching,
  }
}

export default connect(mapStateToProps, {
  setAuthUserData,
  toggleIsFetching,
})(HeaderContainer)
