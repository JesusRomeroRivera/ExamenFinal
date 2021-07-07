import http from './http.common';

class BenefitsService {
    getAll() {
        return http.get('/benefits');
    }
    get(id) {
        return http.get(`/benefits/${id}`);
    }

    findByTitle(title) {
        return http.get(`/benefits?title=${title}`);
    }
}

export default new BenefitsService();