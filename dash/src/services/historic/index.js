import { selfApi } from "../selfApi"

const getChampions = async ({ server, name }) => await selfApi.get(`/${server}/${name}/champions`)

const getSelfHistory = async ({ continent, region, summonerName }) => 
  await selfApi.get(`/${continent}/${region}/${summonerName}/selfHistoric`)

const getMatch = async ({ continent, region, summonerName}) => 
  await selfApi.get(`/${continent}/${region}/${summonerName}/match`)

function getClickMatch(matchId){ 
  return async ({ continent, region, summonerName}) => 
await selfApi.get(`/${continent}/${region}/${summonerName}/match/${matchId}`) }

export {
  getChampions,
  getSelfHistory,
  getMatch,
  getClickMatch
}


//:continent/:region/:summonerName/match/:matchId
