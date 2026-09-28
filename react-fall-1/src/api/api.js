import axios from 'axios'

const baseURL = 'https://social-network.samuraijs.com/api/1.0/'

// CORS samuraijs разрешает localhost:3000 и localhost:4200.
export const instance = axios.create({
  baseURL,
  withCredentials: true,
})

// Для публичных данных (профили, список пользователей): сервер отвечает 500,
// если прислать ему испорченную cookie сессии, а без cookies отдаёт 200.
export const publicInstance = axios.create({
  baseURL,
})
