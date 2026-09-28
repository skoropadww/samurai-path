import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { setAuthUserData, toggleIsFetching } from '../../redux/auth-reducer'
import { instance, publicInstance } from '../../api/api'

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true)

    instance
      .get('auth/me')
      .then((response) => {
        this.props.toggleIsFetching(false)
        if (response.data.resultCode === 0) {
          let { id, login, email } = response.data.data
          this.props.setAuthUserData(id, login, email, null)

          publicInstance
            .get(`profile/${id}`)
            .then((profileResponse) => {
              let photoUrl =
                profileResponse.data.photos.small ||
                profileResponse.data.photos.large ||
                null
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
