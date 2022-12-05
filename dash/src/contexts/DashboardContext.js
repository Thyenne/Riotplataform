import { createContext, useState } from "react";
import { getByName } from "../services/Summoners";
import { serverList } from './serverList'
import { getChampions, getSelfHistory } from '../services/historic'

export const DashboardContext = createContext({})

const DashboardContextProvider = ({ children }) => {
  const [championsList, setChampionsList] = useState([])

  const getChampionsList = ({ server, name }) => getChampions({ server, name })
    .then(res => setChampionsList(res.data))
    .catch(err => console.error(err))
  

  const value = {
    championsList,
    getChampionsList,
  }

  return (
    <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>
  )
}

export { DashboardContextProvider };

