import { useContext } from 'react'
import { SearchInput } from './../../components/SearchInput'
import { StyledHome } from './styles';
import { AuthContext } from '../../contexts';

export function Home() {
  const { serverList, login } = useContext(AuthContext)

  return (
    <StyledHome>
      <SearchInput servers={serverList} label="Digite o seu Riot ID" searchAction={login} />
    </StyledHome>
  );
}