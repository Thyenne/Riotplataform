import { createContext, useState } from "react";
import { getByName } from "../services/Summoners";
import { serverList } from './serverList';

export const AuthContext = createContext({})

const AuthContextProvider = ({ children }) => {
  const [loginData, setLoginData] = useState({})

  const login = ({ server, name }) => {
    getByName({ server, name })
      .then(res => {
        const objData = {
          ...res.data,
        }
        window.localStorage.setItem('riotServer', server)
        window.localStorage.setItem('riotSummonerName', name)
        window.localStorage.setItem('loginData', JSON.stringify(objData))
        setLoginData(objData)
        window.location.href = '/dashboard'
      })
      .catch(res => {
        const messageError = res.response.data.status === 404 ?
          `Usuário ${name} não encontrado em server ${server}` :
          res.response.data.message
        alert(`Erro ${res.response.data.status}: \n${messageError}`)
      })
  }

  const checkAuthentication = () => {
    const localData = window.localStorage.getItem('loginData')
    if (typeof localData !== 'undefined') {
      setLoginData(JSON.parse(localData))
    }
    else {
      window.location.href = '/'
    }
  }

  const value = {
    serverList,
    login,
    loginData,
    checkAuthentication,
    riotServer: window.localStorage.getItem('riotServer'),
    riotSummonerName: window.localStorage.getItem('riotSummonerName'), 
  }

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  )
}

export { AuthContextProvider };

