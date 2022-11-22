import { selfApi } from "../selfApi"

const getByName = async ({ server, name }) => {
  return await selfApi.get(`/${server}/summoner/${name}`)
}

export { getByName }
