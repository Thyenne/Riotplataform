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
import { Paper } from '@mui/material';


export function Dashboard() {
  const [ columns, setColumns ] = useState([])
  const [rows, setRows] = useState([])
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
       summonerName: riotSummonerName
     })
      getMatchList({
       region: riotServer,
       summonerName: riotSummonerName
      })
  }, [rows, championsList, loginData, loadList])

{console.log(getMatchList)}
  return (
    <StyledDashboard>
      <Banner
        avatar={data.profileIcon}
        summonerName={data.summonerName}
        summonerLevel={data.summonerLevel}
        id={data.ranked_summoner}
      />

{/*BOX DE TOP CAMPEÕES */}
<Grid item xs={12}>
  

  <Paper sx={{bgcolor:'#010A13', margin:'25px', borderRadius:'15px 15px 0 0'}} margin={6}  width='90%' marginLeft={10} elevate={5}>
  <Box widht='100%' backgroundColor='#0A323C' borderRadius='15px 15px 0 0' textAlign='center' ><Typography  variant='h4' component='h4'>Campeões</Typography></Box>
    <Box display='flex'>
      <Grid container-spacing={2}>
        <Box margin={2} display='flex' marginLeft={8} width="150%">
          {/* TABLE DE CAMPEÃO AQUI  */}
          <DataTable
        columns={[
          {value: 'championIcon', label: 'Campeão'},
          {value: 'championName'},
          {value: 'championLevelMaestry', label: 'Nível de Maestria'},
          {value: 'championPoints', label:'Quantidade de Pontos'},
          {value: 'nextLevel', label:'Pontos para Próximo Nível'}  
        ]}
        
        rows={championsList}
        onClickRow={() => console.log('clicou na linha')}
        />
                </Box>  
      </Grid>
    </Box>
  </Paper>

</Grid>



{/*BOX DE HISTÓRICO */}
<Grid item xs={12}>
<Box backgroundColor="#010A13" margin={6} borderRadius="15px" width="95%"  >
  <Paper sx={{bgcolor:'#010A13', borderRadius:'15px 15px 0 0' }} margin={6} borderRadius="20px" width='100%' marginLeft={10} elevate={5}>
  <Box widht='100%' backgroundColor='#0A323C' borderRadius='15px 15px 0 0'textAlign='center'><Typography variant='h4' component='h4' >Histórico</Typography></Box>
    <Box display='flex'>
       <Box margin={2} display='flex'>
          {/* TABLE DE HISTÓRICO AQUI  */}
          <Box width='750px' display='flex' margin={2}  >
              <DataTable
              
              columns={
                [
                {value:'championIcon',label: 'Campeão'},
                {value:'championName'},
                {value:'win', label: 'Vitória',  },
                {value:'gameDuration', label: 'Duração' },
                {value:'kills', label: 'Abates'},
                {value:'assists', label: 'Assistências'},
                {value:'deaths', label: 'Mortes'},
                {value:'kda', label: 'K/D/A'}
                
                ]}
                rows={selfHistoricList}
                onClickRow={() => console.log('clicou na linha')}
              />
          </Box>

        </Box>  
      
        <Box width='750px' display='flex' margin={2}>
            <DataTable
                columns={[
                  {value:'win', label: 'Vitória' },
                  {value:'championIcon'},
                  {value:'nome', label:'Nome do Jogador'},
                  {value:'championName', label: 'Nome do Campeão'},
                  {value:'kills', label: 'Abates'},
                  {value:'deaths', label: 'Mortes'},
                  {value:'assists', label: 'Assistências'},
                  {value:'deaths', label: 'Mortes'},
                  {value:'item0name', label: 'Item 1'},{value:'item0'},
                  {value:'item1name', label: 'Item 2'},{value:'item1'}, 
                  {value:'item2name', label: 'Item 3'},{value:'item2'},
                  {value:'item3name', label: 'Item 4'},{value:'item3'},
                  {value:'item4name', label: 'Item 5'},{value:'item4'},
                  {value:'item5name', label: 'Item 6'},{value:'item5'},
                  {value:'item6name', label: 'Item 7'},{value:'item6'},
                  {value:'spell1name', label: 'Feitiço 1'},{value:'spell1'},
                  {value:'spell2name', label: 'Feitiço 2'},{value:'spell2'}
                  
                  ]}
                  rows={matchList}
                  onClickRow={() => console.log('clicou na linha')}
            />
          </Box>
        

      
    </Box>
  </Paper>
  </Box>
</Grid>
           
    </StyledDashboard>
  );
}