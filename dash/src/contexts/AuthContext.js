import { createContext, useState, useEffect } from "react";
import { getByName } from "../services/Summoners";

export const AuthContext = createContext({})

const AuthContextProvider = ({ children }) => {
  const [loginData, setLoginData] = useState({})

  const serverList = [
    { label: 'BR1', value: 'br1' },
    { label: 'EUN1', value: 'eun1' },
    { label: 'EUW1', value: 'euw1' },
    { label: 'JP1', value: 'jp1' },
    { label: 'KR', value: 'kr' },
    { label: 'LA1', value: 'la1' },
    { label: 'LA2', value: 'la2' },
    { label: 'NA1', value: 'NA2' },
    { label: 'OC1', value: 'oc1' },
    { label: 'TR1', value: 'tr1' },
    { label: 'RU', value: 'ru' },
  ]


  const login = ({ server, name }) => {
    getByName({ server, name })
      .then(res => {
        const objData = {
          ...res.data,
          server,
          name
        }
        window.localStorage.setItem('loginData', JSON.stringify(objData))
        setLoginData(objData)
      })
      .catch(res => {
        const messageError = res.response.data.status === 404 ?
          `Usuário ${name} não encontrado em server ${server}` :
          res.response.data.message
        alert(`Erro ${res.response.data.status}: \n${messageError}`)
      })
  }

  const value = {
    serverList,
    login,
    loginData
  }

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  )
}

export { AuthContextProvider };
