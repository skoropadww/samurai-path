import React from 'react'
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching } from '../../redux/users-reducer'
import { connect } from 'react-redux'
import axios from 'axios'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'

class UsersContainerClass extends React.Component {
    componentDidMount() {
      this.props.toggleIsFetching(true)
      axios.get(`/samurai-api/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
        withCredentials: true,
      }).then((response) => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
      })
    }
  
    onPageChanged = (pageNumber) => {
      this.props.setCurrentPage(pageNumber)
      this.props.toggleIsFetching(true)
      axios.get(
        `/samurai-api/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
        { withCredentials: true }
      ).then((response) => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items)
      })
    }
  
    render() {
      return (
        <>
        {this.props.isFetching ? <Preloader /> : null}
            <Users 
            totalUsersCount={this.props.totalUsersCount} 
            pageSize={this.props.pageSize} 
            currentPage={this.props.currentPage} 
            users={this.props.users} 
            onPageChanged={this.onPageChanged} 
            follow={this.props.follow} 
            unfollow={this.props.unfollow} 
            />
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
    }
}

const UsersContainer = connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching })(UsersContainerClass)

export default UsersContainer