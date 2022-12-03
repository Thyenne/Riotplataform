import { useContext, useState, useEffect } from 'react';
import { Banner, PieChart } from '../../components';
import { AuthContext } from '../../contexts';
import { StyledDashboard } from './styles';
import { getHistory } from '../../services/History';
import { DataTable } from '../../components/DataTable';
import { Grid } from '@material-ui/core';


export function Dashboard() {
  const [ columns, setColumns ] = useState([])
  const [rows, setRows] = useState([])
  const { loginData } = useContext(AuthContext)
  const data = JSON.parse(window.localStorage.getItem('loginData'))

  
 

  return (
    <Grid>
    <StyledDashboard>
      <Banner
        avatar={data.profileIcon}
        summonerName={data.summonerName}
        summonerLevel={data.summonerLevel}
        data={data.ranked_summoner}
      /> 
    </StyledDashboard>
    </Grid>
   
  );
}