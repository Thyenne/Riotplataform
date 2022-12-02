import { selfApi } from "../selfApi"

const getHistory = async ({ region, summonerName }) => 
  await selfApi.get(`/${region}/${summonerName}/champions`)

export { getHistory }
