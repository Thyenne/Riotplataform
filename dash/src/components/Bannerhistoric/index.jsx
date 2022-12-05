import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Box } from '@mui/material';
import { theme } from '../../utils/theme';
import { DataTable } from '../DataTable';





const BannerHistoric = () =>  {


    return(
     <Grid Grid container-spacing={1} display='flex'>
        <Box backgroundColor="#0A323C" margin={10} display='flex' alignContent='center'>
            
            <Typography variant='h3'>Olá</Typography>
        </Box>
     </Grid>   


    )
}
export {BannerHistoric};