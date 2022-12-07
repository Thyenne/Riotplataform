import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { StyledBanner } from './styles';
import { Box, Paper } from '@mui/material';
import { theme } from '../../utils/theme';
import { PieChart } from '../PieChart';
import {validarElo} from '../RankedIcons';
import {ThemeProvider } from '@mui/material/styles';




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin:'20px'
  },
  avatar: {
    width: theme.spacing(40),
    height: theme.spacing(40),
  },
  text:{
   
  }
}));

const Banner = ({ avatar, summonerName, summonerLevel , id }) => {
  const classes = useStyles();
  
    return (
    <StyledBanner>
      <Box width='20%'></Box>
      <Paper   borderRadius="10px" display='flex' margin={10} sx={{p:2, border:'2px solid #C89B3C', bgcolor:'#010A13'}} width='60%'>
          <Box display='flex' >
            <Box display='flex' marginTop={20} marginLeft={10}>
              <Avatar
              width='70%'
                sizes='(max-width:480px)'
                display="flex"
                alt={`Avatar de  ${summonerName}`}
                src={avatar}
                className={classes.avatar} />
            </Box>
              <Box margin={10} width="50%">
                <Box width='90%' marginLeft={10} ><Typography variant='h2' component='h2' color='#F0E6D2'>{summonerName}</Typography></Box>
                <Box width='90%' marginLeft={10}><Typography variant='h4' component='h4' color='#F0E6D2' >Nível:{summonerLevel}</Typography></Box>
      <Box width='100%' backgroundColor='#22222'>

      </Box>



                
<Box backgroundColor="#010A13" display='flex' margin={6} borderRadius="4px" width='90%' marginLeft={10}>                
<Paper sx={{p:2, border:'2px solid #C89B3C', bgcolor: '#091428 '}} elevation={3}  > 
  <Box  borderRadius='4px'>
    <Box><Typography variant='h4' component='h3'> Ranqueada Solo/Duo </Typography></Box>
      <Box><Typography variant='h6' component='h6'>Winrate: {id[0]['winRate']}%</Typography></Box>
      <Box><Typography variant='h6' component='h6'>Vitórias: {id[0]['wins']}</Typography></Box>
      <Box><Typography variant='h6' component='h6'>Derrotas: {id[0]['losses']}</Typography></Box>
        <Box  display='flex' borderRadius='10opx'>
          <Box margin={5}><Typography variant='h3' component='h3'> {(id[0]['tier'])}</Typography></Box>
          <Box>{validarElo(id[0]['tier'])}</Box> 
        </Box>
  </Box>
</Paper>     
<Paper sx={{p:2, border:'2px solid #C89B3C', bgcolor: '#091428'}} elevation={3}>  
  <Box>
    <Box><Typography variant='h4' component='h3' > Ranqueada Flex </Typography></Box>
    <Box><Typography variant='h6' component='h6'>Winrate: {id[1]['winRate']}%</Typography></Box>
    <Box><Typography variant='h6' component='h6'>Vitórias: {id[1]['wins']}</Typography></Box>
    <Box><Typography variant='h6' component='h6'>Derrotas: {id[1]['losses']}</Typography></Box> 
      <Box display='flex' bordserRadius='10px'>
        <Box margin={5}><Typography variant='h3' component='h3' >{(id[1]['tier'])}</Typography></Box>   
        <Box>{validarElo(id[1]['tier'])}</Box>
      </Box>                 
  </Box>
</Paper> 
</Box>




            </Box>
          </Box>
      </Paper>
      <Box width='20%'></Box>
    </StyledBanner>
  );
};

export {Banner};

