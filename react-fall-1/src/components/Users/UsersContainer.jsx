import React from 'react'
import {
  follow,
  unfollow,
  setCurrentPage,
  getUsersThunkCreator,
} from '../../redux/users-reducer'
import { connect } from 'react-redux'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../redux/users-selectors'

class UsersContainerClass extends React.Component {
  componentDidMount() {
    this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users {...this.props} onPageChanged={this.onPageChanged}/>
      </>
    )
  }
}

// let mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followingInProgress: state.usersPage.followingInProgress,
//   }
// }

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  }
}

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    getUsersThunkCreator,
  }),
)(UsersContainerClass)
