import { createContext, useState } from "react";
import { getChampions, getSelfHistory } from '../services/historic';
export const DashboardContext = createContext({})

const DashboardContextProvider = ({ children }) => {
  const [championsList, setChampionsList] = useState([])
  const [selfHistoricList, setSelfHistoricList] = useState([])
  const [loadList, setLoadList] = useState(true)
  
  const getChampionsList = ({ server, name }) => getChampions({ server, name })
    .then(res => {
      setChampionsList(res.data.championsData)
      setLoadList(false)
    })
    .catch(err => console.error(err))
  
  const getSelfHistoricList = ({ server, name }) => getSelfHistory({ server, name })
    .then(res => {
      setSelfHistoricList(res.data.summoner_historic)
      setLoadList(false)
    })
    .catch(err => console.error(err))

  const value = {
    championsList,
    selfHistoricList,
    loadList,
    getChampionsList,
    getSelfHistoricList
  }

  return (
    <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>
  )
}

export { DashboardContextProvider };

