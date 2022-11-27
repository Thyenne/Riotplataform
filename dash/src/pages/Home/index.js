import { SearchInput } from './../../components/SearchInput'
import { StyledHome } from './styles';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts';
//import {} from '../src/index.js'

export function Home() {
  const { login, serverList } = useContext(AuthContext)
  // const [profileImg, setProfileImg] = useState(null)

  return (
    <StyledHome>
      <SearchInput servers={serverList} label="Digite o seu Riot ID" searchAction={login} />
    </StyledHome>
  );
}