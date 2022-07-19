import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0`,
    headers: {
        "API-KEY": "d7462da6-a7b1-40a1-bbd7-45ee9b95d8b1"
    }

});

export const userApi = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(responce => responce.data);
    }
}

export const authApi = {
    getAuth() {
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe = false, captcha) {
        return instance.post(`auth/login/`, {email, password, rememberMe, captcha})


    },
    logout() {
        return instance.delete(`auth/login/`)


    }
}

export const profileApi = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus (userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus (status) {
        return instance.put(`profile/status/`, {status: status} 
            )
    },
    savePhoto (photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile)
        return instance.put(`profile/photo/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        } )
    },
    saveProfile( profile) {
        return instance.put(`profile/`, profile
        )
    }
}

export const followApi = {
    getFollow(id) {
        return instance.post(`follow/${id}`)
    },
    getUnfollow(id) {
        return instance.delete(`follow/${id}`)
    }
}

export const securityApi = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url/`)
    }
}

