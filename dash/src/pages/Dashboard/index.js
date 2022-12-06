import { Grid } from '@material-ui/core';
import { Box } from '@mui/system';
import { React, useContext, useEffect, useState } from 'react';
import { Banner } from '../../components';
import { BannerHistoric } from '../../components/Bannerhistoric';
import { BannerTopChamp } from '../../components/BannerTopChamp';
import { DataTable } from '../../components/DataTable';
import { AuthContext, DashboardContext } from '../../contexts';
import { getTopChamp } from '../../services/Topchampions';
import { StyledDashboard } from './styles';

export function Dashboard() {
  const [ columns, setColumns ] = useState([])
  const [rows, setRows] = useState([])
  const { loginData, riotServer, riotSummonerName } = useContext(AuthContext)
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
        server: riotServer,
        name: riotSummonerName
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
          
          <BannerHistoric>
            {/* <DataTable
              const columns = {[
                {value: "typegame",label: "Tipo de jogo"},
                {value: "championName",label: "Nome do campeão"},
                {value: "championIcon",label: "Ícone"},
                {value: "kills",label: "Abates"},
                {value: "assists",label: "Assistências"},
                {value: "deaths",label: "Mortes"},
                {value: "win",label: "Vitória"},
                {value: "kda",label: "KDA"},
                {value: "lane",label: "Posição"},
                {value: "gameDuration",label: "Duração do jogo"}
            ]}
              rows={championsList}
            /> */}
          </BannerHistoric>
          <BannerHistoric>
            <DataTable
              columns={[
                {value: 'championIcon', label: 'Avatar'},
                {value: 'championName', label: 'Name'},
              ]}
              rows={championsList}
            />
          </BannerHistoric>
        </Box>     
      </Grid>
      <Grid item xs={1}></Grid>

      <Grid item xs={1}></Grid>

      <Box backgroundColor='#0AC8B9' item xs={5} display='flex' justifyContent='center'>
          <BannerTopChamp></BannerTopChamp>
          </Box> 

      

      {/* <DataTable
        columns={[
          { value: 'id', label: 'Inscrição'},
          { value: 'name', label: 'Nome'}
        ]}
        rows={[
          {
            id: '1',
            name: 'Fabi'
          },
          {
            id: '2',
            name: 'Thyenne'
          },
          {
            id: '3',
            name: 'Haus'
          }
        ]}
      /> */}
  
    </StyledDashboard>
  );
}