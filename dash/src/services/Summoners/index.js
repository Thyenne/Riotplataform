import { RIOTapi } from "../RIOTapi"
import { selfApi } from "../selfApi"

const getByName = async ({ server, name }) => {
  return await selfApi.get(`/${server}/summoner/${name}`)
  // {
  //   "id": "EDrFpoYLjj2NWxRqs_MAmtRZTKyHJoC5T75ZBeW1_-NAaP4",
  //   "accountId": "r_jghNcbe7UIooLy4AGirNvPiPC_HYZcZUbTXmuQufsWJ8HdlFigtBsZ",
  //   "puuid": "TzNkB7JOvoRJ4HWeGS7JaiYr2XLRDy-eQjQhyXazh0T-aiImM93x86Mg_njxT39hwlvtt-pkyLA7uA",
  //   "name": "Vulpardi",
  //   "profileIconId": 5168,
  //   "revisionDate": 1668962776000,
  //   "summonerLevel": 400
  // }
}

const getFromRiot = async ({ server, name }) => {
  return await RIOTapi(server).get(`/lol/summoner/v4/summoners/by-name/${name}`)
}

export {
  getByName,
  getFromRiot
}
