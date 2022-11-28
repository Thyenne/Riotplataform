import { StyledBanner } from './styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));

const Banner = ({ avatar, summonerName }) => {
  const classes = useStyles();
  return (
    <StyledBanner>
      <Grid container spacing={4}>
        <Grid item xs>
          <Paper className={classes.paper}>
            <Avatar
              alt={`Avatar de ${summonerName}`}
              src={avatar}
              className={classes.avatar}
            />
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <Typography variant="h1" component="h2" gutterBottom>
              {summonerName}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </StyledBanner>
  );
};

export { Banner };
