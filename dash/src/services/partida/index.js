import { selfApi } from "../selfApi"

const getMatch = async ({ server, name }) => {
  return await selfApi.get(`/${continent}/${region}/${name}/match/${mathId}`)
}

export { getMatch }



