import { selfApi } from "../selfApi"

const getMatch = async ({ server, name }) => {
  return await selfApi.get(`/${continent}/${region}/summoner/${name}/match/${mathId}`)
}

export { geth }



