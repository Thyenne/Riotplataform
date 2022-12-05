import { createContext, useState } from "react";
import { getByName } from "../services/Summoners";
import { serverList } from './serverList'

export const AuthContext = createContext({})

const AuthContextProvider = ({ children }) => {
  const [loginData, setLoginData] = useState({})

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
        window.location.href = '/dashboard'
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

