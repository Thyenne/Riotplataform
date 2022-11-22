import { RIOTapi } from "../RIOTapi";

const getByName = async (name) => {
  return await RIOTapi().get(`/lol/summoner/v4/summoners/by-name/${name}`)
}

export { getByName }
