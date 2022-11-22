import axios, { HttpStatusCode } from 'axios';

export const RIOTapi = (server) => {
  const defaultServer = server ?? 'br1'
  return axios.create({
   baseURL: `https://${defaultServer}${process.env.REACT_APP_RIOT_URL_BASE}`,
   // baseURL: "http://localhost:3000",
   headers: {
      'Content-Type': 'aplication/json',
      'Access-Control-Allow-Origin': '*',
      'X-Riot-Token': process.env.REACT_APP_RIOT_KEY
    }
  })
}