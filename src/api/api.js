import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': 'bad252bd-cdeb-4caf-8512-c5b0f8432e9e'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const userAPI = {
    getUserPage(pageSize, currentPage) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
            .then(responce => {
                return responce.data
            });
    },
    unFollowUser(id) {
        return instance.delete(`follow/${id}`)
            .then(responce => {
                return responce.data;
            })
    },
    followUser(id) {
        return instance.post(`follow/${id}`)
            .then(responce => {
                return responce.data;
            })
    },
    getUserProfile(id) {
        return profileAPI.getUserProfile(id)
    }
}

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`).then(responce => {
            return responce.data
        })
    },
    authLogIn(Login, password, rememberMe=false) {
        return instance.post(`/auth/login`,
            {
                email: Login,
                password: password,
                rememberMe: rememberMe
            }
        ).then(responce => {
            return responce.data
        })
    },
    authLogOut() {
        return instance.delete(`/auth/login`
        ).then(responce => {
            return responce.data
        })
    }
}

export const profileAPI = {
    getUserProfile(id) {
        return instance.get(`profile/${id}`).then(responce => {
            return responce;
        })
    },
    getUserStatus(userId) {
        return instance.get(`/profile/status/${userId}`).then(responce => {
            return responce
        })
    },
    putUserStatus(status) {
        return instance.put(`/profile/status`, {status: status}).then(responce => {
            return responce.data
        })
    }
}