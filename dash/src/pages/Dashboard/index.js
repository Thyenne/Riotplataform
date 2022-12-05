import { Grid } from '@material-ui/core';
import { Box } from '@mui/system';
import { React, useContext, useEffect, useState } from 'react';
import { Banner } from '../../components';
import { BannerHistoric } from '../../components/Bannerhistoric';
import { BannerTopChamp } from '../../components/BannerTopChamp';
import { AuthContext, DashboardContext } from '../../contexts';
import { getTopChamp } from '../../services/Topchampions';
import { StyledDashboard } from './styles';

export function Dashboard() {
  const [ columns, setColumns ] = useState([])
  const [rows, setRows] = useState([])
  const { loginData } = useContext(AuthContext)
  const { championsList, loadList, getChampionsList } = useContext(DashboardContext)
  const data = JSON.parse(window.localStorage.getItem('loginData'))

  
 

  
  useEffect((region, summonerName) => {
    rows.length < 1 && 
    getTopChamp({
        region,
        summonerName
      }).then(res => {
        const dataResults = res.data.championsData.length > 0 ? res.data.championsData : []
        setColumns(Object.keys(dataResults[0]))
        setRows(dataResults)
      })
      // console.log(loginData, region, summonerName)
      loadList && getChampionsList({
        server: loginData.server,
        name: loginData.summonerName
      })
  }, [rows, championsList, loginData, loadList])

  console.log('lista aqui =>', championsList)

  return (
    <StyledDashboard>
      <Banner
        avatar={data.profileIcon}
        summonerName={data.summonerName}
        summonerLevel={data.summonerLevel}
        id={data.ranked_summoner}
        selfHistoric={data.selfHistoric}
      />

      <Grid item xs={1}></Grid>
      <Grid item xs={10} container-spacing={2} justifyContent='center'>
        <Box backgroundColor='#0AC8B9' item xs={5} display='flex' justifyContent='center'>
          <BannerHistoric></BannerHistoric>
          <BannerHistoric></BannerHistoric>
        </Box>     
      </Grid>
      <Grid item xs={1}></Grid>

      <Grid item xs={1}></Grid>

      <Box backgroundColor='#0AC8B9' item xs={5} display='flex' justifyContent='center'>
          <BannerTopChamp></BannerTopChamp>
          </Box> 

      

  
    </StyledDashboard>
  );
}