import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    background: {
      default: "#222222",
      allVariants: "#222222",
      main: "#222222"
    },
    text: {
      primary: "#C89B3C",
      default: "#6cf"
    }
  },
  background: {
    color: "#222"
  },
  typography: {
    allVariants: {
      color: '#6cb',
    },
    h1: {
      color: '#6c3'
    },
    h2: {
      color: '#6c3'
    },
    h3: {
      color: '#6c3'
    },
    h4: {
      color: '#6c3'
    },
    h5: {
      color: '#6c3'
    },
    h6: {
      color: '#6c3'
    }
  }
});
// createTheme({
//   palette: {
//     primary: {
//       main: '#C89B3C',
//       // contrastText: '#666',
//       default: '#f6c',
//       light: '#f00',
//       dark: "#f00",
//       riot: {
//         h1: ''
//       }
//     },
    
//     secondary: {
//       main: '#005A82',
//     },
//     background: {
//       main: '#0c0'
//     },
//   },
// });