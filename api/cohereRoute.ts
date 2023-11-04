import axios, { AxiosRequestConfig } from 'axios';
import dotenv from "dotenv";
dotenv.config();


const key = process.env.KEY;
const options: AxiosRequestConfig = {
  method: 'POST',
  url: 'https://api.cohere.ai/v1/generate',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
    authorization: `Bearer ${key}`,
  },
  data: {
    truncate: 'END',
    return_likelihoods: 'NONE',
    prompt: 'Please explain to me how LLMs work',
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
