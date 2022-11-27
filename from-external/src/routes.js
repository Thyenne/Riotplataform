const router = require('express').Router()
const config = require('./config')
const request = require('request');

const {lol_url, default_region, riotKey} = config
router.get('/:region/:summonerName', (req, res) => {
  const { region, summonerName } = req.params


  return request(`https://${default_region}${lol_url}${config.endpoints.lol.puuid}/${summonerName}` + '?api_key=' + riotKey, (error, response, body) => {
  if (!error && response.statusCode === 200) {
      console.log(response)
        // var summ = JSON.parse(body);
        // console.log()
        // request('https://br1.api.riotgames.com/lol/league/v3/positions/by-summoner/' + summ.id + '?api_key=' + apikey, function(error, response, body) {
        //     if (!error && response.statusCode === 200) {
        //         var league = JSON.parse(body);
                
        //         res.render('summoner', {summ: summ, league: league});
        //     } else {
        //       console.log(error)
        //         res.send("summoner not found");
        //     }
        // });
        return res.status(200).json(JSON.parse(body))
    } else {
      console.log(error)
        return res.status(404).json({ message: "summoner not found"});
    }
});
  
})

module.exports=router
