import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { ResponsiveBar } from '@nivo/bar'
import { BarChart } from '../BarChart';
import { StyledBanner } from './styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const Banner = ({ avatar, summonerName, summonerLevel, data }) => {
  const classes = useStyles();
  return (
    <StyledBanner>
      <Grid container>
        <Grid item md={3}>
          <Grid container>
            <Grid item md={2}>
              <Avatar
                alt={`Avatar de ${summonerName}`}
                src={avatar}
                className={classes.avatar}
              />   
            </Grid>
            <Grid item md={10}>
              <Typography variant="h3">
                {summonerName}
              </Typography>
              <Typography variant="body1">
                Level: <strong>{summonerLevel}</strong>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={1}>
          asdas
        </Grid>
        <Grid item md={1}>
          <Typography variant="h1" component="h2" gutterBottom>
            {summonerName}
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <BarChart
            keys={[
              'wins',
              'losses',
            ]}
            indexBy="typeGame"
            data={data}
          />
        </Grid>
      </Grid>
    </StyledBanner>
  );
};

export { Banner };

