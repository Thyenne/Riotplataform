const config = require('./config.json');

const getUserInfo = (user, server) => {
  return {
    summoner_name: user,
    region: server
  }
}

axios.config({
  headers: {
    
  }
})