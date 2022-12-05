import { selfApi } from "../selfApi"

const getTopChamp = async ({ region, summonerName }) => 
  await selfApi.get(`/${region}/${summonerName}/champions`)

export { getTopChamp }
