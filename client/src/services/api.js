import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE || 'http://localhost:5000/api',
})

// Attach token if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

// Auth
export const loginUser = (payload) => api.post('/auth/login', payload)
export const signupUser = (payload) => api.post('/auth/signup', payload)
export const updatePassword = (payload) => api.put('/auth/password', payload)

// Admin
export const getStats = () => api.get('/admin/stats')
export const getUsers = (params) => api.get('/admin/users', { params })
export const createUser = (payload) => api.post('/admin/users', payload)
export const getStoresAdmin = () => api.get('/admin/stores')
export const createStore = (payload) => api.post('/admin/stores', payload)
export const updateUserRole = (id, role) => api.put(`/admin/users/${id}/role`, { role })

// Stores/Public
export const getStores = (params) => api.get('/stores', { params })
export const getStore = (id) => api.get(`/stores/${id}`)
export const submitRating = (storeId, payload) => api.post(`/stores/${storeId}/ratings`, payload)
export const updateRating = (storeId, ratingId, payload) =>
  api.put(`/stores/${storeId}/ratings/${ratingId}`, payload)

// Owner
export const getOwnerStoreRatings = () => api.get('/owner/ratings')
export const getOwnerStore = () => api.get('/owner/store')

export default api
