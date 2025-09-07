import { getFromLocalStorage } from "@/lib/local-storage";
import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// Create Testimonial
export const createTestimonial = async (data: any) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/testimonials`, data, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${getFromLocalStorage("adsToken")}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error creating testimonial:", error);
        return null;
    }
};

// Get All Testimonials (with optional query params)
export const getAllTestimonials = async (params?: any) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/testimonials`);
        return response.data;
    } catch (error) {
        console.error("Error fetching testimonials:", error);
        return [];
    }
};

// Get Testimonial by ID
export const getTestimonialById = async (id: string) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/testimonials/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching testimonial by id:", error);
        return null;
    }
};

// Update Testimonial
export const updateTestimonial = async (id: string, data: any) => {
    try {
        const response = await axios.patch(`${API_BASE_URL}/testimonials/${id}`, data, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${getFromLocalStorage("adsToken")}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error updating testimonial:", error);
        return null;
    }
};

// Delete Testimonial
export const deleteTestimonial = async (id: string) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/testimonials/${id}`, {
            headers: {
                "Authorization": `Bearer ${getFromLocalStorage("adsToken")}`,
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error deleting testimonial:", error);
        return null;
    }
};
