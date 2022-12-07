import { Grid, Typography } from '@material-ui/core';
import { Box } from '@mui/system';
import { React, useContext, useEffect, useState } from 'react';
import { Banner } from '../../components';
import { DataTable } from '../../components/DataTable';
import { AuthContext, DashboardContext } from '../../contexts';
import { getTopChamp } from '../../services/Topchampions';
import { StyledDashboard } from './styles';
import { Paper } from '@mui/material';
import { DataChamp } from '../../components/DataChamp';
import { DataPartida } from '../../components/DataPartida';


export function Dashboard() {
  const [ columns, setColumns ] = useState([])
  const [rows, setRows] = useState([])
  const { loginData, riotServer, riotSummonerName, gameId } = useContext(AuthContext)
  const {
    championsList,
    loadList,
    getChampionsList,
    getSelfHistoricList,
    selfHistoricList,
    matchList,
    getMatchList
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
      getMatchList({
       region: riotServer,
       summonerName: riotSummonerName,
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

{/*BOX DE HISTÓRICO */}
<Grid item xs={12}>
<Box backgroundColor="#010A13" margin={6} borderRadius="15px" width="95%"  >
  <Paper sx={{bgcolor:'#010A13', borderRadius:'15px 15px 0 0' }} margin={6} borderRadius="20px" width='100%' marginLeft={10} elevate={5}>
  <Box widht='100%' backgroundColor='#0A323C' borderRadius='15px 15px 0 0'textAlign='center'><Typography variant='h3' component='h3'>Histórico</Typography></Box>
    <Box display='flex'>
       <Box margin={2} display='flex' marginLeft={2}>
          {/* TABLE DE HISTÓRICO AQUI  */}
          <Box  display='flex' >
              <DataTable
              
              
              columns={
                [
                {value:'win', label: 'Vitória',  },
                {value:'championIcon'},
                {value:'championName'},
                {value:'gameDuration', label: 'Duração' },
                {value:'kills', label: 'Abates'},
                {value:'assists', label: 'Assistências'},
                {value:'deaths', label: 'Mortes'},
                {value:'kda', label: 'K/D/A'}
                
                ]}
                rows={selfHistoricList}
                onClickRow={() => console.log('clicou na linha')

              }
              />
          </Box>

        </Box>  
      
        <Box width='100%' display='flex' margin={2}>
            <DataPartida
               
                columns={[
                  {value:'win', label: 'Vitória' },
                  {value:'championIcon'},
                  {value:'nome', label:'Jogador'},
                  {value:'championName', label: 'Campeão'},
                  {value:'item0name', label: 'I1'},{value:'item0'},
                  {value:'item1name', label: 'I2'},{value:'item1'}, 
                  {value:'item2name', label: 'I3'},{value:'item2'},
                  {value:'item3name', label: 'I4'},{value:'item3'},
                  {value:'item4name', label: 'I5'},{value:'item4'},
                  {value:'item5name', label: 'I6'},{value:'item5'},
                  {value:'item6name', label: 'I7'},{value:'item6'},
                  {value:'spell1name', label: 'F1'},{value:'spell1'},
                  {value:'spell2name', label: 'F2'},{value:'spell2'},
                  {value:'kills', label: 'Abates'},
                  {value:'deaths', label: 'Mortes'},
                  {value:'assists', label: 'Assistências'},
                  {value:'deaths', label: 'Mortes'}

                  
                  ]}
                  rows={matchList}
                  onClickRow={() => console.log('clicou na linha')}
            />
          </Box>
        

      
    </Box>
  </Paper>
  </Box>
</Grid>


{/*BOX DE TOP CAMPEÕES */}
<Grid item xs={12}>
  

  <Paper sx={{bgcolor:'#010A13', margin:'25px', borderRadius:'15px 15px 0 0'}} margin={6}  width='95%' marginLeft={10} elevate={5}>
  <Box widht='100%' backgroundColor='#0A323C' borderRadius='15px 15px 0 0' textAlign='center' ><Typography  variant='h3' component='h3'>Campeões</Typography></Box>
    <Box display='flex'>
      <Grid >
        <Box margin={4} marginLeft={'60%'}display='flex'  width="180%">
          {/* TABLE DE CAMPEÃO AQUI  */}
          <DataChamp 
        columns={[
          {value: 'championIcon', label: 'Campeão'},
          {value: 'championName'},
          {value: 'championLevelMaestry', label: 'Nível de Maestria'},
          {value: 'championPoints', label:'Quantidade de Pontos'},
          {value: 'nextLevel', label:'Pontos para Próximo Nível'},
          {value: 'bau', label: 'Baú'},
           
        ]}
        
        rows={championsList}
        onClickRow={() => console.log('clicou na linha')}
        />
      </Box>  
      </Grid>
    </Box>
  </Paper>

</Grid>





    </StyledDashboard>
  );
}