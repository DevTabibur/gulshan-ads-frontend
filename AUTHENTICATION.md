# Authentication System Documentation

## Overview

The dashboard is now secured with a comprehensive authentication system that prevents unauthorized access and provides role-based access control.

## Features

### 🔐 Authentication Protection
- **Dashboard Protection**: All dashboard routes are protected and require authentication
- **Role-Based Access**: Specific pages can require specific user roles
- **Token Validation**: JWT tokens are validated for expiration and integrity
- **Automatic Redirects**: Unauthorized users are redirected to login page

### 🎯 User Roles
- **Admin**: Full access to all dashboard features
- **Manager**: Access to most features (can be customized per page)
- **User**: Basic access (can be customized per page)

## How It Works

### 1. Authentication Flow
1. User visits `/auth/login` or any protected route
2. If not authenticated, redirected to login page
3. User enters credentials and submits form
4. API returns JWT token with user information
5. Token is stored in localStorage as `accessToken`
6. User is redirected to dashboard

### 2. Token Structure
The JWT token contains:
```json
{
  "id": "user_id",
  "email": "user@example.com", 
  "name": "User Name",
  "role": "Admin|Manager|User",
  "iat": 1234567890,
  "exp": 1234654290
}
```

### 3. Protection Levels

#### Dashboard Layout Protection
```tsx
// app/dashboard/layout.tsx
<ProtectedRoute>
  <DashboardLayout>
    {children}
  </DashboardLayout>
</ProtectedRoute>
```

#### Role-Based Page Protection
```tsx
// Example: Only Admin can access testimonials creation
<ProtectedRoute requiredRole="Admin">
  <CreateTestimonialContent />
</ProtectedRoute>
```

## Components

### useAuth Hook (`hooks/useAuth.ts`)
Manages authentication state and provides:
- `isAuthenticated`: Boolean indicating if user is logged in
- `user`: User object with id, email, name, role
- `login(token)`: Function to log in with JWT token
- `logout()`: Function to log out and clear token
- `checkAuth()`: Function to validate current token

### ProtectedRoute Component (`components/auth/ProtectedRoute.tsx`)
Wraps components that require authentication:
- Checks if user is authenticated
- Validates token expiration
- Redirects to login if unauthorized
- Supports role-based access control

## Testing the System

### Demo Page
Visit `/demo-auth` to test the authentication system:
- Click "Login as Admin" to test admin access
- Click "Login as Manager" to test manager access  
- Click "Login as User" to test basic user access
- Use logout to clear authentication

### Manual Testing
1. Try accessing `/dashboard` without logging in → redirected to login
2. Login with any demo account → access granted to dashboard
3. Try accessing `/dashboard/testimonials/create` as User → access denied
4. Login as Admin → access granted to all pages

## API Integration

### Login API (`app/api/auth/auth.api.ts`)
The login function expects:
```typescript
const response = await loginAPI({
  email: "user@example.com",
  password: "password123"
})

// Response should contain:
{
  accessToken: "jwt_token_here",
  // ... other user data
}
```

### Token Storage
- **Location**: `localStorage.getItem("accessToken")`
- **Format**: JWT token string
- **Validation**: Automatic expiration checking

## Security Features

### Token Validation
- **Expiration Check**: Tokens are validated for expiration
- **Format Validation**: Invalid tokens are automatically cleared
- **Automatic Logout**: Expired tokens trigger automatic logout

### Route Protection
- **Client-Side**: Immediate protection with loading states
- **Server-Side**: Can be extended with middleware
- **Fallback**: Graceful handling of authentication errors

## Customization

### Adding Role-Based Protection
```tsx
// Protect a page for specific roles
<ProtectedRoute requiredRole="Manager">
  <YourComponent />
</ProtectedRoute>

// Multiple roles (customize ProtectedRoute component)
<ProtectedRoute requiredRoles={["Admin", "Manager"]}>
  <YourComponent />
</ProtectedRoute>
```

### Custom Authentication Logic
```tsx
// In your component
const { user, isAuthenticated, logout } = useAuth()

// Check user role
if (user?.role === "Admin") {
  // Show admin features
}

// Custom logout handling
const handleCustomLogout = () => {
  // Custom cleanup
  logout()
}
```

## File Structure
```
├── hooks/
│   └── useAuth.ts                 # Authentication hook
├── components/
│   └── auth/
│       └── ProtectedRoute.tsx     # Route protection component
├── app/
│   ├── dashboard/
│   │   └── layout.tsx            # Protected dashboard layout
│   └── auth/
│       └── login.tsx             # Login page with API integration
├── lib/
│   └── auth-utils.ts             # Authentication utilities
└── app/
    └── demo-auth/
        └── page.tsx              # Demo/testing page
```

## Next Steps

1. **Server-Side Validation**: Add middleware for server-side token validation
2. **Refresh Tokens**: Implement refresh token mechanism
3. **Remember Me**: Add persistent login functionality
4. **Password Reset**: Implement password reset flow
5. **Two-Factor Auth**: Add 2FA support
6. **Session Management**: Add session timeout and management

## Troubleshooting

### Common Issues
1. **Token not stored**: Check browser localStorage support
2. **Redirect loops**: Ensure login page is not protected
3. **Role access denied**: Verify user role in token payload
4. **Token expired**: Implement refresh token mechanism

### Debug Mode
Enable console logging in `useAuth.ts` to debug authentication issues:
```typescript
console.log("Auth state:", authState)
console.log("Token payload:", tokenPayload)
```
