// services/api.js

import axios from 'axios';

const URL = "http://localhost:8000"; // Replace with your actual API URL

export const userSignup = async (data) => {
  try {
    const response = await axios.post(`${URL}/signup`, data);
    return response.data;
  } catch (error) {
    console.error('Error while calling signup API:', error);
    throw error;
  }
};

export const userLogin = async (data) => {
  try {
    const response = await axios.post(`${URL}/login`, data);
    console.log(response.data);
    return response.data;
    
  } catch (error) {
    console.error('Error while calling login API:', error);
    throw error;
  }
};
