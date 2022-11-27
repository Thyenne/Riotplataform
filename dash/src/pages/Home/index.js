import { SearchInput } from './../../components/SearchInput'
import { StyledHome } from './styles';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts';
//import {} from '../src/index.js'

export function Home() {
  const { serverList, login, loginData } = useContext(AuthContext)
  const [profileImg, setProfileImg] = useState(null)
  useEffect(() => {
    setProfileImg(loginData.profileIcon)
  }, [loginData.profileIcon])
  console.log(profileImg)
  return (
    <StyledHome>
      <img src={profileImg} alt="" />
      <SearchInput servers={serverList} label="Digite o seu Riot ID" searchAction={login} />
    </StyledHome>
  );
}