// src/utils/auth.js

export const isUserLoggedIn = () => {
    return localStorage.getItem('isLoggedIn') === 'true';
  };
  
  export const loginUser = (token) => {
    localStorage.setItem('token', token);
    localStorage.setItem('isLoggedIn', 'true');
  };
  
  export const logoutUser = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('isLoggedIn');
  };