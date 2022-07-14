import { stopSubmit } from "redux-form";
import { authApi } from "../api/api";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.payload,
            }
        default: return state;
    }
}

export const authUser = () => async (dispatch) => {
    let responce = await authApi.getAuth()
    if (responce.data.resultCode === 0) {
        let { id, email, login } = responce.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    let responce = await authApi.login(email, password, rememberMe);
    if (responce.data.resultCode === 0) {
        dispatch(authUser())
    } else {
        let message = responce.data.messages.length > 0 ? responce.data.messages[0] : 'Something wrong';
        dispatch(stopSubmit("login", { _error: message }));
    }
}

export const logout = () => async (dispatch) => {
    let responce = await authApi.logout()
    if (responce.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: 'SET-USER-DATA',
    payload: { userId, email, login, isAuth }
});
export default authReducer;