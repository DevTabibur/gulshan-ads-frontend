import axios from "axios";

const API_BASE_URL = `http://localhost:5000/api/v1`;

export const createHeroSection = async (data: any) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/hero-section`, data);
        return response.data;
    } catch (error) {
        console.error('Error creating hero section:', error);
        return null;
    }
};

export const getHeroSection = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/hero-section`);
        return response.data;
    } catch (error) {
        console.error('Error getting hero section:', error);
        return null;
    }
};

export const updateHeroSection = async (data: any) => {
    try {
        const response = await axios.patch(`${API_BASE_URL}/hero-section`, data);
        return response.data;
    } catch (error) {
        console.error('Error updating hero section:', error);
        return null;
    }
};

export const deleteHeroSection = async () => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/hero-section`);
        return response.data;
    } catch (error) {
        console.error('Error deleting hero section:', error);
        return null;
    }
};

// TRUST SECTION


// Trust Section API functions

export const createTrustSection = async (data: any) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/trust-section`, data);
        return response.data;
    } catch (error) {
        console.error('Error creating trust section:', error);
        return null;
    }
};

export const getTrustSection = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/trust-section`);
        return response.data;
    } catch (error) {
        console.error('Error getting trust section:', error);
        return null;
    }
};

export const updateTrustSection = async (data: any) => {
    try {
        const response = await axios.patch(`${API_BASE_URL}/trust-section`, data);
        return response.data;
    } catch (error) {
        console.error('Error updating trust section:', error);
        return null;
    }
};

export const updateTrustedCompanies = async (trustedCompanies: any[]) => {
    try {
        const response = await axios.patch(`${API_BASE_URL}/trust-section/companies`, { trustedCompanies });
        return response.data;
    } catch (error) {
        console.error('Error updating trusted companies:', error);
        return null;
    }
};

export const updateStatistics = async (statistics: any[]) => {
    try {
        const response = await axios.patch(`${API_BASE_URL}/trust-section/statistics`, { statistics });
        return response.data;
    } catch (error) {
        console.error('Error updating statistics:', error);
        return null;
    }
};

export const updateFeaturedTestimonial = async (featuredTestimonial: any) => {
    try {
        const response = await axios.patch(`${API_BASE_URL}/trust-section/testimonial`, { featuredTestimonial });
        return response.data;
    } catch (error) {
        console.error('Error updating featured testimonial:', error);
        return null;
    }
};

export const deleteTrustSection = async () => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/trust-section`);
        return response.data;
    } catch (error) {
        console.error('Error deleting trust section:', error);
        return null;
    }
};
