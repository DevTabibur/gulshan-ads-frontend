import { getFromLocalStorage } from "@/lib/local-storage";
import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
const HOME_PAGE_BASE_URL = `${API_BASE_URL}/home-page`;

// Get all home page sections
export const getAllHomePageSections = async () => {
    try {
        const response = await axios.get(`${HOME_PAGE_BASE_URL}`,
           
        );
        return response.data;
    } catch (error) {
        console.error("Error getting all home page sections:", error);
        return null;
    }
};



// Create/Update Promote Your Business section
export const createOrUpdatePromoteYourBusiness = async (data: { title: string; description: string }) => {
    try {
       
        const response = await axios.post(
            `${HOME_PAGE_BASE_URL}/promote-your-business`,
            data,
            {
                headers: {
                    "Authorization": `Bearer ${getFromLocalStorage("adsToken")}`
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error creating/updating Promote Your Business section:", error);
        return null;
    }
};

// Create/Update Trusted by Leading section
export const createOrUpdateTrustedByLeading = async (data: { title: string; description: string; adminQuote: string }) => {
    try {
        const token = getFromLocalStorage("adsToken");
        const response = await axios.post(
            `${HOME_PAGE_BASE_URL}/trusted-by-leading`,
            data,
            {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error creating/updating Trusted by Leading section:", error);
        return null;
    }
};

// Create/Update Multi Platform section
export const createOrUpdateMultiPlatform = async (data: { title: string; description: string; cards: any[] }) => {
    try {
        const token = getFromLocalStorage("adsToken");
        const response = await axios.post(
            `${HOME_PAGE_BASE_URL}/multi-platform`,
            data,
            {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error creating/updating Multi Platform section:", error);
        return null;
    }
};

// Create/Update Meta Your Gateway section
export const createOrUpdateMetaYourGateway = async (data: { title: string; description: string; cards: any[] }) => {
    try {
        const token = getFromLocalStorage("adsToken");
        const response = await axios.post(
            `${HOME_PAGE_BASE_URL}/meta-your-gateway`,
            data,
            {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error creating/updating Meta Your Gateway section:", error);
        return null;
    }
};

// Create/Update About Biggapon BD section
export const createOrUpdateAboutBiggaponBd = async (data: { title: string; description: string }) => {
    try {
        const token = getFromLocalStorage("adsToken");
        const response = await axios.post(
            `${HOME_PAGE_BASE_URL}/about-biggapon-bd`,
            data,
            {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error creating/updating About Biggapon BD section:", error);
        return null;
    }
};

// Create/Update We Work With section
export const createOrUpdateWeWorkWith = async (data: { title: string; description: string; cards: any[] }) => {
    try {
        const token = getFromLocalStorage("adsToken");
        const response = await axios.post(
            `${HOME_PAGE_BASE_URL}/we-work-with`,
            data,
            {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error creating/updating We Work With section:", error);
        return null;
    }
};

// Create/Update Our Mission section
export const createOrUpdateOurMission = async (data: { title: string; description: string; cards: any[] }) => {
    try {
        const token = getFromLocalStorage("adsToken");
        const response = await axios.post(
            `${HOME_PAGE_BASE_URL}/our-mission`,
            data,
            {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error creating/updating Our Mission section:", error);
        return null;
    }
};

// Create/Update How to Get Started section
export const createOrUpdateHowToGetStarted = async (data: { title: string; description: string; cards: any[] }) => {
    try {
        const token = getFromLocalStorage("adsToken");
        const response = await axios.post(
            `${HOME_PAGE_BASE_URL}/how-to-get-started`,
            data,
            {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error creating/updating How to Get Started section:", error);
        return null;
    }
};
