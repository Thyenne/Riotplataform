import { useContext, useState, useEffect, React } from 'react';
import { Banner } from '../../components';
import { AuthContext, DashboardContext } from '../../contexts';
import { StyledDashboard } from './styles';
import { getTopChamp } from '../../services/Topchampions';
import { Grid } from '@material-ui/core';
import { Box, Container } from '@mui/system';
import { Historic } from '../../components/Historic';
import { PieChart} from '../../components/PieChart';
import { BannerHistoric } from '../../components/Bannerhistoric';
import { BannerTopChamp } from '../../components/BannerTopChamp';
import { selfHistoric } from '../../services/minihistoric'

export function Dashboard() {
  const [ columns, setColumns ] = useState([])
  const [rows, setRows] = useState([])
  const { loginData } = useContext(AuthContext)
  const { championsList, getChampionsList } = useContext(DashboardContext)
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

      getChampionsList({
        server: region,
        name: summonerName
      })
  }, [rows, championsList])

  console.log(championsList)
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