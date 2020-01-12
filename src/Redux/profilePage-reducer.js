import {profileAPI, userAPI} from "../api/api";

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_USER_STATUS = 'profile/SET_USER_STATUS';

let initialState = {
    postList: [
        {id: '1', message: 'Hi, bro!'},
        {id: '2', message: 'Hi, are you doing ?'},
        {id: '3', message: "Five ocklock"}
    ],
    profile: null,
    userStatus: null
};

const profilePageReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            return {
                postList: [...state.postList, {id: '1', message: action.post}]
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            };
        }
        case SET_USER_STATUS: {
            return {
                ...state, userStatus: action.status
            };
        }
        default:
            return state;
    }
};


export const addNewPost = (post) => ({type: ADD_POST, post});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});

export const getProfileInfo = (userId) => async (dispatch) => {
    let data = await userAPI.getUserProfile(userId);
    if (data.status === 200) {
        dispatch(setUserProfile(data.data));
    }
}

export const getStatus = (userId) => async (dispatch) => {
    let data = await profileAPI.getUserStatus(userId);
    if (data.status === 200) {
        dispatch(setUserStatus(data.data));
    }
}

export const postStatus = (status) => async (dispatch) => {
    let data = await profileAPI.putUserStatus(status);
    if (data.resultCode === 0) {
        dispatch(setUserStatus(status));
    }
}
export default profilePageReducer;