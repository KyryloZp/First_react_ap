import {userAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    postList: [
        {id: '1', message: 'Hi, bro!'},
        {id: '2', message: 'Hi, are you doing ?'},
        {id: '3', message: "Five ocklock"}
    ],
    newPostText: '',
    profile: null
};

const profilePageReducer = (state = initialState, action) => {

    let stateCopy = {...state, postList: state.postList};

    switch (action.type) {
        case ADD_POST: {
            return {
                postList: [...state.postList, {id: '1', message: state.newPostText}],
                newPostText: ''
            };
        }
        case UPDATE_POST_TEXT: {
            return {
                ...state, newPostText: action.post
            }
        }
        case SET_USER_PROFILE: {
                return {
                    ...state, profile: action.profile
                };
            }
        default:
            return state;
        }
    };


    export const addPostActionCreactor = () => ({type: ADD_POST});
    export const updatePostActionCreator = (text) => ({type: UPDATE_POST_TEXT, post: text});
    export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const getProfileInfo = (userId) => {
    return (dispatch) => {
        userAPI.getUserProfile(userId).then(data => {
            dispatch(setUserProfile(data));
        })
    }
}


    export default profilePageReducer;