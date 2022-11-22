import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const SearchInput = ({ label, searchAction, servers }) => {
  const [name, setName] = useState(null);
  const [server, setServer] = useState('');

  const handleChange = (event) => {
    setServer(event.target.value);
  };
  const handleSearch = (name) => {
    searchAction({
      name,
      server
    });
    setName('');
    setServer('');
    
  };


  return (

    

    <Box sx={{ display: 'flex', alignItems: 'flex-end', maxWidth: '600px', width: '100%' }} >

      <FormControl style={{ width: 120, marginRight: 15 }}>
        <InputLabel id="demo-simple-select-label">Server</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={server}
          label="Server"
          onChange={handleChange}
        >
          {
            servers.map((server) => (
              <MenuItem key={server.value} value={server.value}>{server.label}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
      <TextField id="input-with-sx" label={label} value={name} variant="outlined" onChange={e => setName(e.target.value)} fullWidth />
      <Button variant="contained" onClick={() => handleSearch(name)} ><SearchIcon /></Button>
      
      
    </Box>
    
  );
}

export { SearchInput };

