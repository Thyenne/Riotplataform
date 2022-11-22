import axios from 'axios';

export const selfApi = axios.create({
  //  baseURL: `https://${defaultServer}${process.env.REACT_APP_RIOT_URL_BASE}`,
  baseURL: "http://localhost:3500",
  headers: {
    'Content-Type': 'aplication/json',
    'Access-Control-Allow-Origin': '*',
  }
})