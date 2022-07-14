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
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login/`, {email, password, rememberMe})


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

