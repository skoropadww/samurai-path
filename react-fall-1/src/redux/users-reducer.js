import { usersAPI } from '../api/api'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'TOGGLE_IS_FOLLOWING_IN_PROGRESS'
let initialState = {
    users: [],
    pageSize: 4,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                }),
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                }),
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users,
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount,
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFollowingInProgress 
                ? [...state.followingInProgress, action.userId] 
                : state.followingInProgress.filter(id => id !== action.userId),
            }
        default:
            return state
    }
}

export const acceptFollow = (userId) => {
    return {
        type: FOLLOW,
        userId,
    }
}

export const acceptUnfollow = (userId) => {
    return {
        type: UNFOLLOW,
        userId,
    }
}

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users,
    }
}

export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage,
    }
}

export const setTotalUsersCount = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount: totalUsersCount,
    }
}

export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching: isFetching,
    }
}

export const toggleIsFollowingInProgress = (isFollowingInProgress, userId) => {
    return {
        type: TOGGLE_IS_FOLLOWING_IN_PROGRESS,
        isFollowingInProgress: isFollowingInProgress,
        userId: userId,
    }
}

export const getUsersThunkCreator = (pageNumber, pageSize) => {
   return (dispatch) => {
        dispatch(toggleIsFetching(true))

        usersAPI
        .getUsers(pageNumber, pageSize)
        .then((data) => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
        .catch((error) => {
            dispatch(toggleIsFetching(false))
            console.error('Не удалось загрузить пользователей', error)
        })
    }
}

const followUnfollowFlow = (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleIsFollowingInProgress(true, userId))

    apiMethod(userId)
        .then((data) => {
            if (data.resultCode === 0) {
                dispatch(actionCreator(userId))
                return
            }
            console.warn(data.messages)
            // followed в списке мог устареть (например, подписались с другой вкладки)
            return usersAPI.isFollowed(userId).then((isFollowed) => {
                dispatch(isFollowed ? acceptFollow(userId) : acceptUnfollow(userId))
            })
        })
        .catch((error) => {
            console.error('Не удалось изменить подписку', error)
        })
        .finally(() => {
            dispatch(toggleIsFollowingInProgress(false, userId))
        })
}

export const follow = (userId) => {
    return (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.follow, acceptFollow)
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.unfollow, acceptUnfollow)
    }
}