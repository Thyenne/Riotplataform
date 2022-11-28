import { useContext } from 'react';
import { Banner } from '../../components';
import { AuthContext } from '../../contexts';
import { StyledDashboard } from './styles';

export function Dashboard() {
  const { loginData } = useContext(AuthContext)
  const data = JSON.parse(window.localStorage.getItem('loginData'))
  console.log(data)
  return (
    <StyledDashboard>
      <Banner
        avatar={data.profileIcon}
        summonerName={data.summonerName}
      >sdlkjf</Banner>
    </StyledDashboard>
  );
}