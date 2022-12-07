import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@emotion/react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import  HomeRounded  from '@mui/icons-material/HomeRounded';
import {Typography} from '@mui/material';




const Header = ({  menuList }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#010A13',
      },
      secondary: {
        main: '#11cb5f',
      },
    },
  });

  return (
    <Box display="flex">
    <ThemeProvider theme={theme}>  
      <AppBar position="static" color="primary" >
        <Toolbar>
          {/*ICONE HOME  */}
        {
            menuList.map((item, index) => (
              <Button key={index} color="inherit" onClick={() => window.location.href = "/"}><HomeRounded sx={{fontSize: 35}}/></Button>  
            ))
          }

          

          {/*ICONES DIREITA */}
          <Typography component='h4' variant='h4' >Riot Way</Typography>
          
          
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  </Box>
  );
}

export { Header };