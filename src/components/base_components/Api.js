import axios from 'axios';

//const BASE_URL = 'http://epawo-test.egolepay.com/api'; // Replace with your API base URL

const BASE_URL = 'http://backoffice-test.egolepay.com/api'; // Replace with your API base URL
const client = axios.create({baseURL:"http://backoffice-test.egolepay.com/"})
export const loginCall = async (phone, password) => {
  try {
    const payload = {
      "phone": "07034428605",
      "password": "Charles@123",
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

export const signupCall = async (email, firstName, middleName, lastName, mobile, gender, bvn, dob) => {
  try {
    const payload = {
      "email": "timi@gmail.com",
      "firstName": "string",
      "middleName": "string",
      "lastName": "string",
      "mobile": "09084748481",
      "gender": "male",
      "bvn": "0000000000",
      "dob": "1960-10-01",
      "stateID": 2
    }
    const response = await client.post('api/Account/Signup', payload);
    //console.log(response)
    return response.data;
    
  } catch (error) {
    throw new Error('Signup failed. Please try again.'); // Handle error as needed
  }
};

// export const signup = async (email, firstName, middleName, lastName, mobile, gender, bvn, dob) => {
//   try {
//     const response = await axios.post('http://backoffice-test.egolepay.com/api/Account/Signup', { email, firstName, middleName, lastName, mobile, gender, bvn, dob  });
//     return response.data;
//   } catch (error) {
//     throw new Error('Signup failed. Please try again.'); // Handle error as needed
//   }
// };
