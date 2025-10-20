// Utility functions for authentication

// Generate a test JWT token for demonstration purposes
export const generateTestToken = (userData: {
  id: string
  email: string
  name: string
  role: string
}) => {
  const header = {
    alg: 'HS256',
    typ: 'JWT'
  }
  
  const payload = {
    id: userData.id,
    email: userData.email,
    name: userData.name,
    role: userData.role,
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60), // 24 hours from now
  }
  
  // Encode header and payload
  const encodedHeader = btoa(JSON.stringify(header))
  const encodedPayload = btoa(JSON.stringify(payload))
  
  // Create a simple signature (in real implementation, this would be properly signed)
  const signature = btoa('test-signature')
  
  return `${encodedHeader}.${encodedPayload}.${signature}`
}

// Decode JWT token (for client-side validation)
export const decodeToken = (token: string) => {
  try {
    const payload = token.split('.')[1]
    return JSON.parse(atob(payload))
  } catch (error) {
    console.error('Error decoding token:', error)
    return null
  }
}

// Check if token is expired
export const isTokenExpired = (token: string) => {
  try {
    const payload = decodeToken(token)
    if (!payload || !payload.exp) return true
    
    const currentTime = Math.floor(Date.now() / 1000)
    return payload.exp < currentTime
  } catch (error) {
    return true
  }
}
