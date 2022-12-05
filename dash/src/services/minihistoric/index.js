import { selfApi } from "../selfApi"

const getminihistoric = async ({ continent, region, summonerName }) => 
  await selfApi.get(`/${continent}/${region}/${summonerName}/selfHistoric`)

export { getminihistoric }

//:continent/:region/:summonerName/selfHistoric