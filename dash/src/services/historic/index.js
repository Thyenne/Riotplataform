import { selfApi } from "../selfApi"

const getChampions = async ({ server, name }) => await selfApi.get(`/${server}/${name}/champions`)

const getSelfHistory = async ({ continent, region, summonerName }) => 
  await selfApi.get(`/${continent}/${region}/${summonerName}/selfHistoric`)

export {
  getChampions,
  getSelfHistory
}


//:continent/:region/:summonerName/match/:matchId
