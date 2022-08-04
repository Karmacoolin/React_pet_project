import { stopSubmit } from "redux-form";
import { authApi, securityApi } from "../api/api";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    capthcaUrl: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.payload,
            }
        case 'GET-CAPTCHA':
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

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let responce = await authApi.login(email, password, rememberMe, captcha);
    if (responce.data.resultCode === 0) {
        dispatch(authUser())
    } else {
        if (responce.data.resultCode === 10) {
            dispatch(getCapthcaUrl());
        }
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

export const getCapthca = (capthcaUrl) => ({
    type: 'GET-CAPTCHA',
    payload: { capthcaUrl }
});

export const getCapthcaUrl = () => async (dispatch) => {
    let responce = await securityApi.getCaptchaUrl();
    debugger
    const capthcaUrl = responce.data.url;
    dispatch(getCapthca(capthcaUrl))
}


export default authReducer;