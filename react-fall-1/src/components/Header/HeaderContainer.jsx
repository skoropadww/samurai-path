import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { getAuthUserDataThunks, toggleIsFetching, logoutThunks } from '../../redux/auth-reducer'

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);

    this.props.getAuthUserDataThunks();
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
  getAuthUserDataThunks,
  toggleIsFetching,
  logoutThunks,
})(HeaderContainer)
