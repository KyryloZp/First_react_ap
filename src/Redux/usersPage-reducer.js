import {userAPI} from "../api/api";
import {updateObjectsInArray} from "../utils/reducerUtils";

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET-USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'users/SET_TOTAL_USER_COUNT';
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROCESS = 'users/TOGGLE_IS_FOLLOWING_PROCESS';

let initialState = {
    users: [],
    pageSize: 10,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    followingProcess: []


};

const usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return (
                {
                    ...state, users: updateObjectsInArray(state.users, action.id,'id',  {followed: false})
                }
            );
        case UNFOLLOW:
            return (
                {
                    ...state, users: updateObjectsInArray(state.users, action.id,'id', {followed: true})
                }
            );
        case SET_USERS:
            return {...state, users: action.users};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.page};
        case SET_TOTAL_USER_COUNT:
            return {...state, totalUserCount: action.userCount};
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        case TOGGLE_IS_FOLLOWING_PROCESS:
            return {
                ...state, followingProcess: action.followingProcess
                    ? [...state.followingProcess, action.id]
                    : state.followingProcess.filter(id => id != action.id)
            };
        default:
            return state;

    }
};


export const followSucces = (userId) => ({type: FOLLOW, id: userId});
export const unfollowSucces = (userId) => ({type: UNFOLLOW, id: userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});
export const setTotalUserCount = (userCount) => ({type: SET_TOTAL_USER_COUNT, userCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProcess = (followingProcess, id) => ({
    type: TOGGLE_IS_FOLLOWING_PROCESS,
    followingProcess,
    id
});


const followUnfollowFlow = async (dispatch, id, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProcess(true, id));

    let data = await apiMethod(id);
    if (data.resultCode === 0) {
        dispatch(actionCreator(id));
        dispatch(toggleFollowingProcess(false, id));
    }
}

export const getUsers = (pageSize, currentPage) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let data = await userAPI.getUserPage(pageSize, currentPage);
    if (data.error === null) {
        dispatch(setUsers(data.items));
        dispatch(setCurrentPage(currentPage));
        dispatch(setTotalUserCount(data.totalCount));
        dispatch(toggleIsFetching(false));
    }
}


export const unfollow = (id) => (dispatch) => {
    followUnfollowFlow(dispatch, id, userAPI.unFollowUser.bind(userAPI), followSucces);
}

export const follow = (id) => (dispatch) => {
    followUnfollowFlow(dispatch, id, userAPI.followUser.bind(userAPI), unfollowSucces);
}

export default usersPageReducer;