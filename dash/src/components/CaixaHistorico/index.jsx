import StyledCaixaHistorico from './styles'
import Table from './components/DataTable/Index.jsx'
import { makeStyles } from '@mui/material'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

const historico = ({}) => {

/* useEffect(() => {
    rows.length < 1 && 
      getHistory({
        region: 'br1',
        summonerName: 'Vulpardi'
      }).then(res => {
        const dataResults = res.data.championsData.length > 0 ? res.data.championsData : []
        setColumns(Object.keys(dataResults[0]))
        setRows(dataResults)
      })
  }, [rows]);

  return(
    {
        rows.length > 0 && 
          <StickyHeadTable
          columns={columns}
          rows={rows}
          />
        }

  )*/


};

export{historico};




