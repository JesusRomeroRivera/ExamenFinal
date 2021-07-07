import http from './http.common';

class PlansApiService {
    getAll() {
        return http.get('/plans');
    }
}

export default new PlansApiService();
