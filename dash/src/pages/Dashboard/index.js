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
  const {
    championsList,
    loadList,
    getChampionsList,
    getSelfHistoricList,
    selfHistoricList
   } = useContext(DashboardContext)
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
      getSelfHistoricList({
        region: riotServer,
        summonerName: riotSummonerName
      })
  }, [rows, championsList, loginData, loadList])

  console.log(selfHistoricList)
  return (
    <StyledDashboard>
      <Banner
        avatar={data.profileIcon}
        summonerName={data.summonerName}
        summonerLevel={data.summonerLevel}
        id={data.ranked_summoner}
        selfHistoric={data.selfHistoric}
      />
      <Grid container className="targett">
        <Grid item md={6}>
          <BannerHistoric>
            <DataTable
              columns={[
                {value: 'typegame', label: 'Tipo de Jogo'},
                {value: 'championName', label: 'Campeão'},
              ]}
              rows={selfHistoricList}
              onClickRow={() => console.log('clicou na linha')}
            />
          </BannerHistoric>
        </Grid>
        <Grid item md={6}></Grid>
      </Grid>
      <Grid container>
        <Grid item md={3}></Grid>
        <Grid item md={9}></Grid>
      </Grid>
      
     
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
          
        </Box>     
      </Grid>

      <Box backgroundColor='#0AC8B9' item xs={5} display='flex' justifyContent='center'>
        <BannerTopChamp></BannerTopChamp>
      </Box>
    </StyledDashboard>
  );
}