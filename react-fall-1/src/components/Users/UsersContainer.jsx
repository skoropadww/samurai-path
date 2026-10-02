import React from 'react'
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleIsFollowingInProgress,
} from '../../redux/users-reducer'
import { connect } from 'react-redux'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'
import { usersAPI } from '../../api/api'

class UsersContainerClass extends React.Component {
  getUsers = (pageNumber = this.props.currentPage) => {
    this.props.toggleIsFetching(true)

    usersAPI
      .getUsers(pageNumber, this.props.pageSize)
      .then((data) => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(data.items)
        this.props.setTotalUsersCount(data.totalCount)
      })
      .catch((error) => {
        this.props.toggleIsFetching(false)
        console.error('Не удалось загрузить пользователей', error)
      })
  }

  componentDidMount() {
    this.getUsers()
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    this.getUsers(pageNumber)
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

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  }
}

const UsersContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleIsFollowingInProgress,
})(UsersContainerClass)

export default UsersContainer
