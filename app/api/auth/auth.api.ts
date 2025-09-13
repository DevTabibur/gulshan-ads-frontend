import { getFromLocalStorage } from "@/lib/local-storage";
import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const register = async (data: {
  fullName: string;
  whatsApp: string;
  companyName: string;
  email: string;
  password: string;
  confirmPassword: string;
}) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/register`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const login = async (data: { email: string; password: string }) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, data);
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
    const adsToken = getFromLocalStorage("adsToken");

    if (!adsToken) {
      console.log("No adsToken found in localStorage");
    }
    const response = await axios.post(`${API_BASE_URL}/auth/logout`, {
      headers: {
        Authorization: `Bearer ${adsToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log("logout error", error);
    // throw error;
  }
};

export const getMe = async () => {
  try {
    const adsToken = getFromLocalStorage("adsToken");
    console.log("adsToken", adsToken);

    if (!adsToken) {
      console.log("No adsToken found in localStorage");
    }
    const response = await axios.get(`${API_BASE_URL}/auth/get-me`, {
      headers: {
        Authorization: `Bearer ${adsToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log("Error getting me", error);
    // throw error;
  }
};
