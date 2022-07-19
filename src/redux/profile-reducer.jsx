import { profileApi } from "../api/api";

let initialState = {

    postData: [
        { id: 0, message: 'Whats app buddy?', likesCount: 13 },
        { id: 1, message: 'Hey braza!', likesCount: 12 },
        { id: 2, message: 'Holy 123', likesCount: 56 }
    ],
    profile:  null, 
    status: "",



};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = action.newPost;
            return {
                ...state,
                postData: [...state.postData, { id: 3, message: newPost, likesCount: 0 }]
            }

        case 'SET-USER-PROFILE':
            {
                return { ...state, profile: action.profile }
            }
        case 'SET-STATUS':
            {

                return { ...state, status: action.status }
            }
            case 'SET-PHOTO': {
                return { ...state, profile: {...state.profile, photos: action.photos}}
            }


        default: return state;

    }
}

export let addPostActionCreator = (newPost) => ({ type: 'ADD-POST', newPost })
export const setUserProfile = (profile) => ({ type: 'SET-USER-PROFILE', profile })
export const setStatus = (status) => ({ type: 'SET-STATUS', status })
export const setPhotoSuccess = (photos) => ({ type: 'SET-PHOTO', photos})

export const userProfileThunk = (userId) => async (dispatch) => {
    
    let responce = await profileApi.getProfile(userId)
    debugger
    dispatch(setUserProfile(responce.data));
}

export const getStatus = (userId) => async (dispatch) => {
    let responce = await profileApi.getStatus(userId)
    dispatch(setStatus(responce.data));
}


export const updateStatus = (status) => async (dispatch) => {
    let responce = await profileApi.updateStatus(status)
    if (responce.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const savePhoto = (file) => async (dispatch) => {
    let responce = await profileApi.savePhoto(file)
    if (responce.data.resultCode === 0) {
        dispatch(setPhotoSuccess(responce.data.data.photos));
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.userId
    let responce = await profileApi.saveProfile(profile)
    if (responce.data.resultCode === 0) {
        dispatch(userProfileThunk(userId));
    }
}


export default profileReducer;