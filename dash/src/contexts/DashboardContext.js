import { createContext, useState } from "react";
import { getChampions } from '../services/historic';

export const DashboardContext = createContext({})

const DashboardContextProvider = ({ children }) => {
  const [championsList, setChampionsList] = useState([])
  const [loadList, setLoadList] = useState(true)
  const getChampionsList = ({ server, name }) => getChampions({ server, name })
    .then(res => {
      setChampionsList(res.data.championsData)
      setLoadList(false)
    })
    .catch(err => console.error(err))
  

  const value = {
    championsList,
    loadList,
    getChampionsList,
  }

  return (
    <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>
  )
}

export { DashboardContextProvider };

