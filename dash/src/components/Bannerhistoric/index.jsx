import { Box } from '@mui/material';





const BannerHistoric = ({ children }) =>  {
    return(
        <Box backgroundColor="#0A323C"  borderRadius="4px" container-spacing={2} display='flex' alignContent='center' >
        <Box margin={10} display='flex'>
            { children }
        </Box>
     </Box>   


    )
}
export { BannerHistoric };
