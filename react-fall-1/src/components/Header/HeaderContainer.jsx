import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { toggleIsFetching, logoutThunks } from '../../redux/auth-reducer'

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
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
  toggleIsFetching,
  logoutThunks,
})(HeaderContainer)
