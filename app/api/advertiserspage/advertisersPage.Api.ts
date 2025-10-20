import { getFromLocalStorage } from "@/lib/local-storage";
import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const ADVERTISERS_PAGE_BASE_URL = `${API_BASE_URL}/advertisers-page`;

// Get all advertisers page sections
export const getAllAdvertisersPageSections = async () => {
  try {
    const response = await axios.get(`${ADVERTISERS_PAGE_BASE_URL}`);
    return response.data;
  } catch (error) {
    console.error("Error getting all advertisers page sections:", error);
    return null;
  }
};

// Create/Update Scale Your Business section
export const createOrUpdateScaleYourBusiness = async (data: { title: string; description: string }) => {
  try {
    const token = getFromLocalStorage("adsToken");
    const response = await axios.post(
      `${ADVERTISERS_PAGE_BASE_URL}/scale-your-business`,
      data,
      {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating/updating Scale Your Business section:", error);
    return null;
  }
};

// Create/Update Why Advertisers section
export const createOrUpdateWhyAdvertisers = async (data: { title: string; description: string; cards: any[] }) => {
  try {
    const token = getFromLocalStorage("adsToken");
    const response = await axios.post(
      `${ADVERTISERS_PAGE_BASE_URL}/why-advertisers`,
      data,
      {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating/updating Why Advertisers section:", error);
    return null;
  }
};

// Create/Update Choose Your Plan section
export const createOrUpdateChooseYourPlan = async (data: { title: string; description: string; cards: any[]}) => {
  try {
    const token = getFromLocalStorage("adsToken");
    const response = await axios.post(
      `${ADVERTISERS_PAGE_BASE_URL}/choose-your-plan`,
      data,
      {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating/updating Choose Your Plan section:", error);
    return null;
  }
};

// Create/Update How We Get You Started section
export const createOrUpdateHowWeGetYouStarted = async (data: { title: string; description: string; cards: any[] }) => {
  try {
    const token = getFromLocalStorage("adsToken");
    const response = await axios.post(
      `${ADVERTISERS_PAGE_BASE_URL}/how-we-get-you-started`,
      data,
      {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating/updating How We Get You Started section:", error);
    return null;
  }
};

// Create/Update Ready to Scale Your Business section
export const createOrUpdateReadyToScaleYourBusiness = async (data: { title: string; description: string }) => {
  try {
    const token = getFromLocalStorage("adsToken");
    const response = await axios.post(
      `${ADVERTISERS_PAGE_BASE_URL}/ready-to-scale-your-business`,
      data,
      {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating/updating Ready to Scale Your Business section:", error);
    return null;
  }
};
