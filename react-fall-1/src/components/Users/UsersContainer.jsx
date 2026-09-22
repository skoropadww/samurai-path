import React from 'react'
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC } from '../../redux/users-reducer'
import { connect } from 'react-redux'
import axios from 'axios'
import Users from './Users'

class UsersContainerClass extends React.Component {
    componentDidMount() {
      axios.get(`/samurai-api/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
        withCredentials: true,
      }).then((response) => {
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
      })
    }
  
    onPageChanged = (pageNumber) => {
      this.props.setCurrentPage(pageNumber)
      axios.get(
        `/samurai-api/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
        { withCredentials: true }
      ).then((response) => {
        this.props.setUsers(response.data.items)
      })
    }
  
    render() {
      return (
        <Users 
          totalUsersCount={this.props.totalUsersCount} 
          pageSize={this.props.pageSize} 
          currentPage={this.props.currentPage} 
          users={this.props.users} 
          onPageChanged={this.onPageChanged} 
          follow={this.props.follow} 
          unfollow={this.props.unfollow} 
        />
      )
    }
  }

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        },
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainerClass)

export default UsersContainer