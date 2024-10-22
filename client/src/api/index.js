import axios from 'axios';

// creates a new axios instance with config object
export const axiosInstance = axios.create({
    headers: {
        'Content-Type':'application/json',
        // bearer token are typically used in oAuth2.0 protocols for accessing resources on behalf of user
        "authorization": `Bearer ${localStorage.getItem("token")}`
    }
})