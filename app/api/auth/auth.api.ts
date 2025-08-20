import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const register = async (data: { email: string; password: string; name?: string }) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/v1/auth/register`, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const login = async (data: { email: string; password: string }) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/login`, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const forgetPass = async (data: { email: string }) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/forgetpass`, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const logout = async () => {
    try {
        const response = await axios.post(`${API_BASE_URL}/logout`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
