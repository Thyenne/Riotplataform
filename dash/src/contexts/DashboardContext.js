import { createContext, useState } from "react";
import { getChampions, getSelfHistory, getMatch } from '../services/historic';
import { serverList } from "./serverList";
export const DashboardContext = createContext({})

const DashboardContextProvider = ({ children }) => {
  const [championsList, setChampionsList] = useState([])
  const [selfHistoricList, setSelfHistoricList] = useState([])
  const [matchList, setMatchList] = useState([])
  const [loadList, setLoadList] = useState(true)
  
  const getChampionsList = ({ server, name }) => getChampions({ server, name })
    .then(res => {
      setChampionsList(res.data.championsData)
      setLoadList(false)
    })
    .catch(err => console.error(err))
  
  const getSelfHistoricList = ({ region, summonerName }) => {
    const continent = serverList.filter(item => item.value === region)[0].continent
    return getSelfHistory({ continent, region, summonerName })
    .then(res => {
      setSelfHistoricList(res.data.summoner_historic)
      setLoadList(false)
    })
    .catch(err => console.error(err))}

    const getMatchList = ({ continent, region, summonerName, matchId }) => {      
      return getMatch({ continent, region, summonerName, matchId })
      .then(res => {
        setMatchList(res.data.historic)
        setLoadList(false)
      })
      .catch(err => console.error(err))}

  const value = {
    championsList,
    selfHistoricList,
    matchList,
    loadList,
    getChampionsList,
    getSelfHistoricList,
    getMatchList
  }

  return (
    <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>
  )
}

export { DashboardContextProvider };

