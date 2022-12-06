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
      
      <Box backgroundColor="#0A323C"  borderRadius="4px" container-spacing={2} display='flex' alignContent='center' >
              
              <Box display='flex' margin={10}>
              <Avatar
                sizes='(max-width:480px)'
                display="flex"
                alt={'Avatar de  ${summonerName}'}
                src={avatar}
                className={classes.avatar} />
              </Box>
              <Box margin={10} alignContent='center'>
              <Box><Typography variant='h1' component='h2'>{summonerName}</Typography></Box>
              <Box sx={{p:2, border:'1px line '}}><h1>Level:{summonerLevel}</h1></Box>
              <Box><h1>Winrate: {id[0]['winRate']}</h1></Box>
              <Box><h1>wins: {id[0]['wins']}</h1></Box>
              <Box><h1>losses: {id[0]['losses']}</h1></Box>  
              </Box>

      </Box>
    
    </StyledBanner>
  );
};

export {Banner};

