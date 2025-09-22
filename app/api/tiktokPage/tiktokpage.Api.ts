import { getFromLocalStorage } from "@/lib/local-storage";
import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const TIKTOK_PAGE_BASE_URL = `${API_BASE_URL}/tiktok-page`;

// Get all TikTok page sections
export const getAllTikTokPageSections = async () => {
  try {
    const response = await axios.get(`${TIKTOK_PAGE_BASE_URL}`);
    return response.data;
  } catch (error) {
    console.error("Error getting all TikTok page sections:", error);
    return null;
  }
};

// Create/Update Access to New Audience section
export const createOrUpdateAccessToNewAudience = async (data: { title: string; description: string }) => {
  try {
    const token = getFromLocalStorage("adsToken");
    const response = await axios.post(
      `${TIKTOK_PAGE_BASE_URL}/access-to-new-audience`,
      data,
      {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating/updating Access to New Audience section:", error);
    return null;
  }
};

// Create/Update TikTok Audience Actively section
export const createOrUpdateTikTokAudienceActively = async (data: { title: string; description: string; cards: any[] }) => {
  try {
    const token = getFromLocalStorage("adsToken");
    const response = await axios.post(
      `${TIKTOK_PAGE_BASE_URL}/tiktok-audience-actively`,
      data,
      {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating/updating TikTok Audience Actively section:", error);
    return null;
  }
};

// Create/Update TikTok Video Advertising section
export const createOrUpdateTikTokVideoAdvertising = async (data: { title: string; description: string; cards: any[] }) => {
  try {
    const token = getFromLocalStorage("adsToken");
    const response = await axios.post(
      `${TIKTOK_PAGE_BASE_URL}/tiktok-video-advertising`,
      data,
      {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating/updating TikTok Video Advertising section:", error);
    return null;
  }
};

// Create/Update Convenient Payment section
export const createOrUpdateConvenientPayment = async (data: { title: string; description: string; cards: any[] }) => {
  try {
    const token = getFromLocalStorage("adsToken");
    const response = await axios.post(
      `${TIKTOK_PAGE_BASE_URL}/convenient-payment`,
      data,
      {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating/updating Convenient Payment section:", error);
    return null;
  }
};

// Create/Update TikTok Partner section
export const createOrUpdateTikTokPartner = async (data: { title: string; description: string; cards: any[] }) => {
  try {
    const token = getFromLocalStorage("adsToken");
    const response = await axios.post(
      `${TIKTOK_PAGE_BASE_URL}/tiktok-partner`,
      data,
      {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating/updating TikTok Partner section:", error);
    return null;
  }
};

// Create/Update Client About Us section
export const createOrUpdateClientAboutUs = async (data: { title: string; description: string; cards: any[] }) => {
  try {
    const token = getFromLocalStorage("adsToken");
    const response = await axios.post(
      `${TIKTOK_PAGE_BASE_URL}/client-about-us`,
      data,
      {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating/updating Client About Us section:", error);
    return null;
  }
};

// Create/Update Join the Mailing List section
export const createOrUpdateJoinTheMailingList = async (data: { title: string; description: string }) => {
  try {
    const token = getFromLocalStorage("adsToken");
    const response = await axios.post(
      `${TIKTOK_PAGE_BASE_URL}/join-the-mailing-list`,
      data,
      {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating/updating Join the Mailing List section:", error);
    return null;
  }
};
