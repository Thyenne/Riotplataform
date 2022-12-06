import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Header}  from "../Header"

const selfHistoric = () => {
    /*
    const columns = [
        {field: "typegame",headerName: "Tipo de jogo"},
        {field: "championName",headerName: "Nome do campeão"},
        {field: "championIcon",headerName: "Ícone"},
        {field: "kills",headerName: "Abates"},
        {field: "assists",headerName: "Assistências"},
        {field: "deaths",headerName: "Mortes"},
        {field: "win",headerName: "Vitória"},
        {field: "kda",headerName: "KDA"},
        {field: "lane",headerName: "Posição"},
        {field: "gameDuration",headerName: "Duração do jogo"}
    ]

    return (
        <Box m="20px">
            <Header title="selfhistoric"/>
            <Box>
                <DataGrid rows = {selfHistoric}
                columns = {columns}
                />
            </Box>
        </Box>
    )*/
    const rows: GridRowsProp = [
        { id: 1, col1: 'Hello', col2: 'World' },
        { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
        { id: 3, col1: 'MUI', col2: 'is Amazing' },
      ];

      const columns: GridColDef[] = [
        { field: 'col1', headerName: 'Column 1', width: 150 },
        { field: 'col2', headerName: 'Column 2', width: 150 },
      ];

    return (
        <Typography variant='h3'>css</Typography>)
}

export {selfHistoric}