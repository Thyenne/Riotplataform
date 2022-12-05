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
      <Grid item xs={1}></Grid>
      <Grid item xs={10} >
        <Box backgroundColor="#0A323C" margin={10}>
          <Grid container-spacing={2} >
            <Grid item xs={6}>
              <Box margin={5} padding={10} display='flex'>
                <Avatar
                  display="flex"
                  alt={'Avatar de  ${summonerName}'}
                  src={avatar}
                  className={classes.avatar} />
                <Box >
                    <Typography variant="h1" component="h2" gutterBottom>{summonerName}</Typography>
                    <Typography variant="h4" component="subtitle" gutterBottom >Level: {summonerLevel}</Typography>
                    <Typography variant="subtitle" component="subtitle" gutterBottom display='flex'>winrate: {id[0]['winRate']}%</Typography>
                    <Typography variant="h5" component='h2'>{id[0]['wins','losses']}</Typography>
              
                </Box>   
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={1}></Grid>
    </StyledBanner>
  );
};

export {Banner};

