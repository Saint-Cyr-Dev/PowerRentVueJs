// src/services/ArticleService.js

import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api';

class ArticleService {
    getArticles() {
        return axios.get(`${API_URL}/articles`);
    }
}

export default new ArticleService();
