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
import { getMatch, getSelfHistory, getClickMatch } from '../../services/historic';

export function Dashboard() {
  const [ columns, setColumns ] = useState([])
  const [rows, setRows] = useState([])
  const [matchId, setMatchId] = useState([])
  const { loginData, riotServer, riotSummonerName } = useContext(AuthContext)
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
       summonerName: riotSummonerName,
       
     })
      getMatchList({
       region: riotServer,
       summonerName: riotSummonerName,
       //matchId: matchId
       
      })
  }, [rows, championsList, loginData, loadList])

  //console.log(matchId, 'dddddd')
  return (
    <StyledDashboard>
      <Banner
        avatar={data.profileIcon}
        summonerName={data.summonerName}
        summonerLevel={data.summonerLevel}
        id={data.ranked_summoner}
      />

{/*BOX DE HIST??RICO */}
<Grid item xs={12}>
<Box backgroundColor="#010A13" marginTop={5} borderRadius="15px" width="100%"  >
  <Paper sx={{bgcolor:'#010A13', borderRadius:'15px 15px 0 0' }} margin={6} borderRadius="20px" width='100%' marginLeft={10} elevate={5}>
  <Box widht='100%' backgroundColor='#0A323C' borderRadius='15px 15px 0 0'textAlign='center'><Typography variant='h3' component='h3'>Hist??rico</Typography></Box>
    <Box display='flex'>
       <Box margin={2} display='blocked' marginLeft={5}>
          {/* TABLE DE HIST??RICO AQUI  */}
          <Box  display='flex' >
              <DataTable
              
              
              columns={
                [
                {value:'win', label: 'Vit??ria',  },
                {value:'championIcon'},
                {value:'championName'},
                {value:'gameDuration', label: 'Dura????o' },
                {value:'kills', label: 'Abates'},
                {value:'assists', label: 'Assist??ncias'},
                {value:'deaths', label: 'Mortes'},
                {value:'kda', label: 'K/D/A'},
                {value:'gameId'}
                ]}
                rows={selfHistoricList}
                //onClickRow={addMatch('gameId')}
                //onClickRow={() => getMatchList({'br1','Haus of Dereon',"BR1_2639475681"}}

              
              />
          </Box>

        </Box>  
      
        <Box width='50%' display='flex' margin={2}>
          
            <DataPartida
               
                columns={[
                {value:'win', label: 'Vit??ria',  },
                {value:'nome', label: 'Invocador'},
                {value:'championIcon', label:'Campe??o'}, 
                {value:'championName'},
                {value:'gameDuration', label: 'Dura????o' },
                {value:'kills', label: 'Abates'},
                {value:'assists', label: 'Assist??ncias'},
                {value:'deaths', label: 'Mortes'},
                {value:'kda', label: 'K/D/A'},
                {value:'item0name', label: 'I1'},{value:'item0'},
                {value:'item1name', label: 'I2'},{value:'item1'}, 
                {value:'item2name', label: 'I3'},{value:'item2'},
                {value:'item3name', label: 'I4'},{value:'item3'},
                {value:'item4name', label: 'I5'},{value:'item4'},
                {value:'item5name', label: 'I6'},{value:'item5'},
                {value:'item6name', label: 'I7'},{value:'item6'},
                {value:'spell1name', label: 'F1'},{value:'spell1'},
                {value:'spell2name', label: 'F2'},{value:'spell2'},
                {value:'rune', label: 'R1'},{value:'rune_name'},
                
                /*
                  {value:'win', label: 'Vit??ria' },
                  {value:'championIcon'},
                  {value:'nome', label:'Jogador'},
                  {value:'championName', label: 'Campe??o'},
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
                  {value:'assists', label: 'Assist??ncias'},
                  {value:'deaths', label: 'Mortes'}*/

                  
                  ]}
                  rows={matchList}
                  onClickRow={() => console.log('clicou na linha')}
                  
            />
          </Box>
        

      
    </Box>
  </Paper>
  </Box>
</Grid>


{/*BOX DE TOP CAMPE??ES */}
<Grid item xs={12}>
  

  <Paper sx={{bgcolor:'#010A13', marginTop:'50px', borderRadius:'15px 15px 0 0'}}  width='100%' marginLeft={10} elevate={5}>
  <Box widht='100%' backgroundColor='#0A323C' borderRadius='15px 15px 0 0' textAlign='center' ><Typography  variant='h3' component='h3'>Campe??es</Typography></Box>
    <Box display='flex'>
      <Grid >
        <Box margin={4} marginLeft={'60%'}display='flex'  width="100%">
          {/* TABLE DE CAMPE??O AQUI  */}
          <DataChamp 
        columns={[
          {value: 'championIcon', label: 'Campe??o'},
          {value: 'championName'},
          {value: 'championLevelMaestry', label: 'N??vel de Maestria'},
          {value: 'championPoints', label:'Quantidade de Pontos'},
          {value: 'nextLevel', label:'Pontos para Pr??ximo N??vel'},
          {value: 'bau', label: 'Ba??'},
           
        ]}
        
        rows={championsList}
        onClickRow={() => console.log('clicou na linha')}
        />
      </Box>  
      </Grid>
    </Box>
  </Paper>

</Grid>

<Box textAlign={'center'} color='#F0E6D2'marginTop={2} ><Typography variant='h6' component='h6'>Orgulhosamente criado por Ethyenene Lins e Lucas Aguiar   |  Unicarioca 2022   |   Orienta????o Professor Mestre Andr?? Cotelli do Esp??rito Santo</Typography></Box>



    </StyledDashboard>
  );
}