import {getAuth} from "./auth-reducer";

const INITIALIZEDSUCCES = 'app/INITIALIZED_SUCCES';


let initialState = {
    initialized: false


};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZEDSUCCES:
            return (
                {...state, initialized: true}
            );
        default:
            return state;

    }
};


export const initializedSucces = () => ({type: INITIALIZEDSUCCES});


export const getInitialized = () => (dispatch) => {
        let authPromise = dispatch(getAuth());
        authPromise.then(() => {
            dispatch(initializedSucces())
        });
    }




export default appReducer;