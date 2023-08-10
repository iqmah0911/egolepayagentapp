import axios from 'axios';

const BASE_URL = 'http://epawo-test.egolepay.com/api'; // Replace with your API base URL

export const login = async (phone, password) => {
  try {
    const response = await axios.post('http://epawo-test.egolepay.com/api/Account/Login', { phone, password });
    return response.data;
  } catch (error) {
    throw new Error('Login failed. Please try again.'); // Handle error as needed
  }
};

export const signup = async (email, firstName, middleName, lastName, mobile, gender, bvn, dob) => {
  try {
    const response = await axios.post('http://epawo-test.egolepay.com/api/SignUp', { email, firstName, middleName, lastName, mobile, gender, bvn, dob  });
    return response.data;
  } catch (error) {
    throw new Error('Signup failed. Please try again.'); // Handle error as needed
  }
};
