export interface SidebarItem {
    id: string
    title: string
    icon: string
    href?: string
    badge?: string
    children?: SidebarItem[]
  }
  
  export interface User {
    id: string
    name: string
    email: string
    avatar?: string
    role: string
  }
  
  export interface BreadcrumbItem {
    title: string
    href?: string
  }
  
  export interface BlogPost {
    private _id(_id: any): void
    id: string
    title: string
    content: string
    excerpt: string
    status: "draft" | "published" | "archived"
    author: string
    createdAt: string
    updatedAt: string
    tags: string[]
    category: string
    featuredImage?: string
    views: number
  }
  