import { getFromLocalStorage } from '@/lib/local-storage';
import axios from 'axios';


const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;


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












//=================================BLOG POST API================================

// BLOG POST API FUNCTIONS

// Create Blog (with form-data for image upload)
export const createBlog = async (data: any) => {
    try {

        const response = await axios.post(
            `${API_BASE_URL}/blog`,
            data,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${getFromLocalStorage("adsToken")}`
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error creating blog:', error);
        return null;
    }
};

// Get All Blogs
export const getAllBlogs = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/blog`);
        return response.data;
    } catch (error) {
        console.error('Error fetching all blogs:', error);
        return [];
    }
};

// Get Published Blogs
export const getPublishedBlogs = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/blog/published`);
        return response.data;
    } catch (error) {
        console.error('Error fetching published blogs:', error);
        return [];
    }
};

// Get Blogs by Category
export const getBlogsByCategory = async (categoryId: string) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/blog/category/${categoryId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching blogs by category:', error);
        return [];
    }
};

// Get Blog by Slug
export const getBlogBySlug = async (slug: string) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/blog/slug/${slug}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching blog by slug:', error);
        return null;
    }
};

// Get Blog by ID
export const getBlogById = async (id: string) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/blog/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching blog by id:', error);
        return null;
    }
};

// Update Blog
export const updateBlog = async (id: string, data: any) => {
    try {
        const response = await axios.patch(`${API_BASE_URL}/blog/${id}`, data, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${getFromLocalStorage("adsToken")}`
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error updating blog:', error);
        return null;
    }
};

// Delete Blog
export const deleteBlog = async (id: string) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/blog/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting blog:', error);
        return null;
    }
};

