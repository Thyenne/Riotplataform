import { Box } from '@mui/material';
import { Grid } from '@mui/material';





const BannerHistoric = ({ children }) =>  {
    return(

        <Grid item xs={12}>
                <Box backgroundColor="#0A323C" margin={10} borderRadius="4px">
                    <Box  padding={10} display='flex'>
                        <Grid container-spacing={2}>
                           {children}   
                        </Grid>
                    </Box>
                </Box>
            </Grid>

    )
}
export { BannerHistoric };
