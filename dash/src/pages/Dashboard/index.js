import { Grid, Typography } from '@material-ui/core';
import { Box } from '@mui/system';
import { React, useContext, useEffect, useState } from 'react';
import { Banner } from '../../components';
import { BannerHistoric } from '../../components/Bannerhistoric';
import { BannerTopChamp } from '../../components/BannerTopChamp';
import { DataTable } from '../../components/DataTable';
import { AuthContext, DashboardContext } from '../../contexts';
import { getTopChamp } from '../../services/Topchampions';
import { StyledDashboard } from './styles';
import TokenIcon from '@mui/icons-material/Token';
import DangerousIcon from '@mui/icons-material/Dangerous';


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

      loadList && getChampionsList({
        server: riotServer,
        name: riotSummonerName
      })
      getSelfHistoricList({
       region: riotServer,
       summonerName: riotSummonerName
     })
  }, [rows, championsList, loginData, loadList])


  return (
    <StyledDashboard>
      <Banner
        avatar={data.profileIcon}
        summonerName={data.summonerName}
        summonerLevel={data.summonerLevel}
        id={data.ranked_summoner}
        
      />


<Grid item xs={12}>
  <Box backgroundColor="#010A13" margin={6} borderRadius="4px">
    <Box display='flex'>
      <Grid container-spacing={2}>
        <Box margin={2} display='flex'>
          {/* TABLE DE HISTÓRICO AQUI  */}
          <DataTable
        columns={[
          {value: 'championIcon', label: 'Campeão'},
          {value: 'championName'},
          {value: 'championLevelMaestry', label: 'Nível de Maestria'},
          {value: 'championPoints', label:'Quantidade de Pontos'},
          {value: 'nextLevel', label:'Pontos para Próximo Nível'},
          {value: 'bau', label:'Baú',
            renderCell: ({row: {bau}}) =>{
              return(
                <Box
                width="60%"
                m="0 auto"
                p="5px"
                display="flex"
                justifyContent="center"
                BackgroundColor="linear-gradient(#091428, #0A1428)"
                borderRaduis="4px">
                {bau === "true" && <TokenIcon/>},
                {bau === "false" && <DangerousIcon/>}
                </Box>
            )}
        }]}

        rows={championsList}
        onClickRow={() => console.log('clicou na linha')}
        />
                </Box>  
                        </Grid>
                    </Box>
                </Box>
            </Grid>









<Grid item xs={12}>
  <Box backgroundColor="#010A13" margin={6} borderRadius="4px">
    <Box display='flex'>
      <Grid container-spacing={2}>
        <Box margin={2} display='flex'>
          {/* TABLE DE HISTÓRICO AQUI  */}
          <DataTable
            columns={[
              {value:'win', label: 'Vitória'},
              {value:'gameDuration', label: 'Duração do Jogo'},
              {value:'championIcon'},
              {value:'championName', label: 'Nome do Campeão'},
              {value:'kills', label: 'Abates'},
              {value:'deaths', label: 'Mortes'},
              {value:'assists', label: 'Assistências'},
              {value:'deaths', label: 'Mortes'},
              {value:'kda', label: 'K/D/A'}
              
              ]}
              rows={selfHistoricList}
              onClickRow={() => console.log('clicou na linha')}
            />
                </Box>  
                        </Grid>
                    </Box>
                </Box>
</Grid>





           
    </StyledDashboard>
  );
}