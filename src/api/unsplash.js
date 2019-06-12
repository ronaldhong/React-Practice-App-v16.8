import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 70e75a1a0c695fb961715bc0920440faf2b07b1356d1429146b54ed1b63f1fb0'
      }
});