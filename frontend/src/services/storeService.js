import api from '../api/api';

const storeService = {
  getStores: (params = {}) => api.get('/stores', { params }).then(r => r.data),
  getStoreRatings: (id) => api.get(`/stores/${id}/ratings`).then(r => r.data)
};

export default storeService;
