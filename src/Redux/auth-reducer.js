import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = 'auth/SET_AUTH_USER_DATA';


let initialState = {
    id: null,
    Login: null,
    email: null,
    isAuth: false


};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return (
                {...state, ...action.payload}
            );
        default:
            return state;

    }
};


export const setAuthUserData = (id, email, login, isAuth) => ({
    type: SET_AUTH_USER_DATA,
    payload: {id, email, login, isAuth}
});


export const getAuth = () => async (dispatch) => {
    let data = await authAPI.authMe();
    if (data.resultCode === 0) {
        let {id, email, login} = data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const getAuthLogIn = (Login, password, rememberMe) => async (dispatch) => {
    let data = await authAPI.authLogIn(Login, password, rememberMe)
    data.resultCode === 0
        ? dispatch(getAuth())
        : dispatch(stopSubmit('Login', {_error: data.messages[0]}))

}
export const authLogOut = () => async (dispatch) => {
    let data = await authAPI.authLogOut()
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}


export default authReducer;