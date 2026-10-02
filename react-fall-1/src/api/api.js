import axios from 'axios'

const baseURL = 'https://social-network.samuraijs.com/api/1.0/'

// CORS samuraijs разрешает localhost:3000 и localhost:4200.
export const instance = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    'API-KEY': 'e9cb2d44-884a-4217-b74a-9f9389cc8f8c',
  },
})

// Сервер отвечает 500 на users/profile, если прислать cookie нашего аккаунта,
// а без cookies отдаёт 200. Поэтому публичные данные берём без cookies.
export const publicInstance = axios.create({
  baseURL,
})

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return publicInstance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data)
  },
  isFollowed(userId) {
    return instance.get(`follow/${userId}`).then((response) => response.data)
  },
  follow(userId) {
    return instance.post(`follow/${userId}`).then((response) => response.data)
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`).then((response) => response.data)
  },
}

export const profileAPI = {
  getProfile(userId) {
    return publicInstance
      .get(`profile/${userId}`)
      .then((response) => response.data)
  },
}

export const authAPI = {
  me() {
    return instance.get('auth/me').then((response) => response.data)
  },
}
