import { StyledBannerTopChamp } from "./styles";
import { Box } from "@material-ui/core";
import { Grid } from "@mui/material";
import { Typography } from '@material-ui/core';



const BannerTopChamp = ({  }) => {
  
   
      return (
      <StyledBannerTopChamp>
        <Grid item xs={1}></Grid>
        <Grid item xs={10} >
          <Box backgroundColor="#0A323C" margin={10}>
            <Grid container-spacing={2} >
              <Grid item xs={6}>
                <Box margin={5} padding={10} display='flex'>
                <Typography>youtube</Typography>
                 
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={1}></Grid>
      </StyledBannerTopChamp>
    );
  };
  
  export {BannerTopChamp};
  