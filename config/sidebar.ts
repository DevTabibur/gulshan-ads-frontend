import { SidebarItem } from "../types/dashboard";

export const sidebarConfig: SidebarItem[] = [
    {
        id: "dashboard",
        title: "Dashboard",
        icon: "LayoutDashboard",
        href: "/dashboard",
    },
    // {
    //     id: "analytics",
    //     title: "Analytics",
    //     icon: "BarChart3",
    //     href: "/dashboard/analytics",
    //     badge: "New",
    // },
    // {
    //     id: "campaigns",
    //     title: "Campaigns",
    //     icon: "Target",
    //     children: [
    //         {
    //             id: "all-campaigns",
    //             title: "All Campaigns",
    //             icon: "List",
    //             href: "/dashboard/campaigns",
    //         },
    //         {
    //             id: "create-campaign",
    //             title: "Create Campaign",
    //             icon: "Plus",
    //             href: "/dashboard/campaigns/create",
    //         },
    //         {
    //             id: "campaign-templates",
    //             title: "Templates",
    //             icon: "FileTemplate",
    //             href: "/dashboard/campaigns/templates",
    //         },
    //     ],
    // },
    {
        id: "blog",
        title: "Blog Management",
        icon: "BookOpen",
        children: [
            {
                id: "blog-posts",
                title: "Manage",
                icon: "FileText",
                href: "/dashboard/blog",
            },
            {
                id: "blog-create",
                title: "Create",
                icon: "PenTool",
                href: "/dashboard/blog/create",
            },
            {
                id: "blog-categories",
                title: "Categories",
                icon: "Tag",
                href: "/dashboard/blog/categories",
            },
        ],
    },
    {
        id: "testimonials",
        title: "Testimonials",
        icon: "MessageSquare", 
        children: [
            {
                id: "testimonial-posts",
                title: "Manage",
                icon: "FileText",
                href: "/dashboard/testimonials",
            },
            {
                id: "testimonial-create",
                title: "Create",
                icon: "PenTool",
                href: "/dashboard/testimonials/create",
            },
        ],
    },
    // {
    //     id: "clients",
    //     title: "Clients",
    //     icon: "Users",
    //     href: "/dashboard/clients",
    // },
    // {
    //     id: "reports",
    //     title: "Reports",
    //     icon: "FileBarChart",
    //     children: [
    //         {
    //             id: "performance",
    //             title: "Performance",
    //             icon: "TrendingUp",
    //             href: "/dashboard/reports/performance",
    //         },
    //         {
    //             id: "roi",
    //             title: "ROI Analysis",
    //             icon: "DollarSign",
    //             href: "/dashboard/reports/roi",
    //         },
    //     ],
    // },
    // {
    //     id: "settings",
    //     title: "Settings",
    //     icon: "Settings",
    //     children: [
    //         {
    //             id: "profile",
    //             title: "Profile",
    //             icon: "User",
    //             href: "/dashboard/settings/profile",
    //         },
    //         {
    //             id: "billing",
    //             title: "Billing",
    //             icon: "CreditCard",
    //             href: "/dashboard/settings/billing",
    //         },
    //         {
    //             id: "integrations",
    //             title: "Integrations",
    //             icon: "Plug",
    //             href: "/dashboard/settings/integrations",
    //         },
    //     ],
    // },

    {
        id: "homepage",
        title: "Home",
        icon: "Home",
        href: "/dashboard/homepage",
        children: [
            {
                id: "hero-section",
                title: "Hero Section",
                icon: "FileText",
                href: "/dashboard/homepage/hero-section",
            },
        ],
    },
   


]
