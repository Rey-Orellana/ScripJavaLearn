import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.tuempresa.com/v1',
  headers: { 'Content-Type': 'application/json' }
});

// Interceptor para inyección dinámica de Tokens (Auth)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const AxiosCRUD = {
  async create(endpoint, payload) {
    const { data } = await api.post(endpoint, payload);
    return data;
  },

  async read(endpoint, id = "") {
    const { data } = await api.get(`${endpoint}/${id}`);
    return data;
  },

  async update(endpoint, id, payload) {
    const { data } = await api.patch(`${endpoint}/${id}`, payload);
    return data;
  },

  async delete(endpoint, id) {
    const { data } = await api.delete(`${endpoint}/${id}`);
    return data;
  }
};