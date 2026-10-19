import axios from 'axios'

const baseURL = 'https://social-network.samuraijs.com/api/1.0/'

export const instance = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    'API-KEY': 'c1b71fa9-7b01-45c1-8e0e-5625682cd872',
  },
})

// Иногда сервер отвечает 500 на запросы с cookie аккаунта, а без cookies отдаёт 200.
export const publicInstance = axios.create({
  baseURL,
})

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    const url = `users?page=${currentPage}&count=${pageSize}`
    // с cookies сервер присылает настоящий followed для залогиненного пользователя
    return instance
      .get(url)
      .catch(() => publicInstance.get(url))
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
  getStatus(userId) {
    return publicInstance.get(`profile/status/${userId}`).then((response) => response.data)
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status }).then((response) => response.data)
  },
}

export const authAPI = {
  me() {
    return instance.get('auth/me').then((response) => response.data)
  },
}
