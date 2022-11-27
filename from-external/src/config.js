const config = {
  riotKey: 'RGAPI-4e573a70-8adb-4ea9-9ecc-9aa20f6f184b',
  description: "Developer Riot Key to acess APIs",
  notes: null,
  region : "",
  lol_url: ".api.riotgames.com/lol",
  ddragon_url: "http://ddragon.leagueoflegends.com/cdn/12.22.1/img",
  endpoints: {
    lol: {
      match: "/match/v5/matches",
      puuid: "/summoner/v4/summoners/by-name",
      league: "/league/v4/entries/by-summoner/",
      summoner: "/champion-mastery/v4/champion-masteries/by-summoner/",
    },
    ddragon: {
      profile_Icon: "/profileicon",
      champion_Icon: "/champion",
      runas_Icon: "/",
      item_Icon: "/item",
      spells_Icon: "/spell"

    }
  },
  default_region : "br1",
  default_continent: "americas",
}

module.exports=config