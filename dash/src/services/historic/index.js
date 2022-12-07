import { selfApi } from "../selfApi"

const getChampions = async ({ server, name }) => await selfApi.get(`/${server}/${name}/champions`)

const getSelfHistory = async ({ continent, region, summonerName }) => 
  await selfApi.get(`/${continent}/${region}/${summonerName}/selfHistoric`)

const getMatch = async ({ continent, region, name, matchId }) => {
  await selfApi.get(`/${continent}/${region}/${name}/match/${matchId}`)
}
export {
  getChampions,
  getSelfHistory,
  getMatch
}


//:continent/:region/:summonerName/match/:matchId
