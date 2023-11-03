import axios from 'axios';

//const BASE_URL = 'http://epawo-test.egolepay.com/api'; // Replace with your API base URL

const BASE_URL = 'http://backoffice-test.egolepay.com/api'; // Replace with your API base URL
const client = axios.create({baseURL:"http://backoffice-test.egolepay.com/"})
export const loginCall = async (phone, password) => {
  try {
    const payload = {
      "phone": phone,
      "password": password,
      "deviceType": "string",
      "deviceName": "string",
      "userAgent": "string",
      "brandName": "string",
      "brand": "string"
    }
    const response = await client.post('api/Account/Login', payload);
    //console.log(response)
    return response.data;
    
  } catch (error) {
    throw new Error('Login failed. Please try again.'); // Handle error as needed
  }
};

export const signup = async (email, firstName, middleName, lastName, mobile, gender, bvn, dob) => {
  try {
    const response = await axios.post('http://backoffice-test.egolepay.com/api/Account/Signup', { email, firstName, middleName, lastName, mobile, gender, bvn, dob  });
    return response.data;
  } catch (error) {
    throw new Error('Signup failed. Please try again.'); // Handle error as needed
  }
};
