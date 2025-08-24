import axios from 'axios';

const API_BASE_URL = `http://localhost:5000/api/v1`;

export const createBlogCategory = async (data: any) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/blog-category`, data);
        return response.data;
    } catch (error) {
        console.error('Error creating blog category:', error);
        return null;
    }
};

export const getAllBlogCategories = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/blog-category`);
        return response.data;
    } catch (error) {
        console.error('Error fetching blog categories:', error);
        return [];
    }
};

export const getBlogCategoryById = async (id: string) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/blog-category/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching blog category by id:', error);
        return null;
    }
};

export const updateBlogCategory = async (
    id: string,
    data: any
) => {
    try {
        const response = await axios.patch(`${API_BASE_URL}/blog-category/${id}`, data);
        return response.data;
    } catch (error) {
        console.error('Error updating blog category:', error);
        return null;
    }
};

export const deleteBlogCategory = async (id: string) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/blog-category/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting blog category:', error);
        return null;
    }
};
