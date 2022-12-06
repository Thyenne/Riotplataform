import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { StyledBanner } from './styles';
import { Box } from '@mui/material';
import { theme } from '../../utils/theme';
import { PieChart } from '../PieChart';






const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin:'20px'
  },
  avatar: {
    width: theme.spacing(40),
    height: theme.spacing(40),
  },
}));

const Banner = ({ avatar, summonerName, summonerLevel , id }) => {
  const classes = useStyles();
 
    return (
    <StyledBanner>
      <Box backgroundColor="#0A1428"  borderRadius="4px" display='flex' margin={10} sx={{p:2, border:'2px solid #C89B3C'}} width='95%'>
            <Box display='flex'>
              <Avatar
                sizes='(max-width:480px)'
                display="flex"
                alt={`Avatar de  ${summonerName}`}
                src={avatar}
                className={classes.avatar} />
            </Box>
              <Box margin={10}>
                <Box><Typography variant='h1' component='h2'>{summonerName}</Typography></Box>
                <Box margin={2}><Typography variant='h3' component='h2'>Nível:{summonerLevel}</Typography></Box>
                <Box sx={{p:2, border:'2px solid black '}} backgroundColor='#010A13' borderRadius='4px'>
                    <Box sx={{p:2, border:'2px solid black '}}>
                      <Box ><Typography> Ranqueada solo</Typography></Box>
                     <Box>Winrate: {id[0]['winRate']}</Box>
                     <Box>Vitórias: {id[0]['wins']}</Box>
                     <Box>Derrotas: {id[0]['losses']}</Box>  
                   </Box>
                    <Box sx={{p:2, border:'2px solid black '}}>
                      <Box><Typography variant='h4' component='h3'> Ranqueada Flex</Typography></Box>
                      <Box>Winrate: {id[1]['winRate']}</Box>
                      <Box>Vitórias: {id[1]['wins']}</Box>
                      <Box>Derrotas: {id[1]['losses']}</Box>  
                    </Box>
                  </Box>
            </Box>

      </Box>
    
    </StyledBanner>
  );
};

export {Banner};

