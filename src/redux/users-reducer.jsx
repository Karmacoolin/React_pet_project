import { userApi, followApi } from "../api/api";

let initialState = {

    users: [],
    pageSize: 10,
    totalUsersCount: 20,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [2, 3],
    portionSize: 10



};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }


        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case 'SET-USERS': {
            return { ...state, users: [...action.users] };
        }
        case 'SET-CURRENT-PAGE': {
            return { ...state, currentPage: action.currentPage }
        }
        case 'SET-TOTAL-USERS-COUNT': {
            return { ...state, totalUsersCount: action.totalUsersCount }
        }
        case 'TOGGLE-IS-FETCHING': {
            return { ...state, isFetching: action.isFetching }
        }

        case 'TOGGLE-IS-FOLLOWING-PROGRESS': {
            return {
                ...state,
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId]
                    : [...state.followingInProgress.filter(id => id != action.userId)]
            }
        }


        default: return state;

    }
}

export let followSuccess = (userId) => ({ type: 'FOLLOW', userId })
export let unfollowSuccess = (userId) => ({ type: 'UNFOLLOW', userId })
export let setUsers = (users) => ({ type: 'SET-USERS', users })
export let setCurrentPage = (currentPage) => ({ type: 'SET-CURRENT-PAGE', currentPage })
export let setTotalUsersCount = (totalUsersCount) => ({ type: 'SET-TOTAL-USERS-COUNT', totalUsersCount })
export let toggleIsFetching = (isFetching) => ({ type: 'TOGGLE-IS-FETCHING', isFetching })
export let toggleFollowingProgress = (isFetching, userId) => ({ type: 'TOGGLE-IS-FOLLOWING-PROGRESS', isFetching, userId })

export const getUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(currentPage));

    let data = await userApi.getUsers(currentPage, pageSize)
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
}


export const follow = (userId) => async (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));

    let responce = await followApi.getFollow(userId)
    if (responce.data.resultCode === 0) {
        dispatch(followSuccess(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
}


export const unfollow = (userId) => async (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    let responce = await followApi.getUnfollow(userId)

    dispatch(toggleFollowingProgress(false, userId));
    if (responce.data.resultCode === 0) {
        dispatch(unfollowSuccess(userId));
    }
}


export default usersReducer;