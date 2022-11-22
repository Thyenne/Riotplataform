/* File that contain the defs source code of the project */

const data = require('../json/config.json')
const axios = require("axios")
const types = require('..\\json\\tiposJogos.json')
const campeoes = require('..\\json\\campeoes.json')
const runas = require('..\\json\\runas.json')
const spells = require('..\\json\\spells.json')
const item = require('..\\json\\item.json')

/*
Função que retorna o ícone de perfil do jogador
Input: 
Output: URL do ícone de perfil do jogador
*/
async function get_profile_icon(summoner_name, region)
{
    //region = data.region
    key = data.riotKey
    //summoner_name = data.summoner_name
    id_URL = data.puuid_URL
    icon = data.profile_Icon

    if (region == "")
    {
        region = data.default_region
    }

    url = "https://" + region + id_URL + summoner_name

    const list_summoner = await axios.get(url, { headers : {"X-Riot-Token": key} })

    const profile_icon = icon + list_summoner.data.profileIconId + ".png"
    
    return profile_icon
}


/*
Função que retorna o id do jogador (summonerId)
Input: 
Output: id do jogador
*/
async function get_id_summoner(summoner_name,region)
{
    key = data.riotKey
    id_URL = data.puuid_URL

    if (region == "")
    {
        region = data.default_region
    }

    url = "https://" + region + id_URL + summoner_name

    const list_summoner = await axios.get(url, { headers : {"X-Riot-Token": key} })

    const id_summoner = list_summoner.data.id
    
    return id_summoner
}


/*
Função que pega a puuid do Jogador
Input:
Output: Id do Jogador
*/
async function get_puuid(summoner_name, region)
{
    //region = data.region
    riotURL = data.puuid_URL
    key = data.riotKey
    //summoner_name = data.summoner_name

    if(region == "")
        region = data.default_region
    
    url = "https://" + region + riotURL + summoner_name

    const summonerIdResponde = await axios.get(url , { headers : { "X-Riot-Token": key} })

    return summonerIdResponde.data.puuid
}


/*
Função que pega da API Summoners uma lista de partidas de um jogador
Input:
Output: Lista de partidas de um jogador
*/
async function get_list_match(summonerName, region)
{
    const puuid =await get_puuid(summonerName, region)
    const key = data.riotKey
    const url = "https://" + data.default_continent + ".api.riotgames.com/lol/match/v5/matches/by-puuid/" + 
    puuid + "/ids?start=" + "0" + "&count=" + "20"
    const matchIdResponde = await axios.get(url , { headers : { "X-Riot-Token": key} })
    
    
    const result = matchIdResponde.data
    
    return result
    
}


/*
Função que pega dados de uma só partida
Input: Lista de partidas
Output: Dados de uma partida 
*/
async function get_match_data_participants(partida)
{
    key = data.riotKey
    const api_match_url = "https://" + data.default_continent + data.match_URL + partida + "?api_key=" + key

    const matchData = await axios.get(api_match_url, { headers : { "X-Riot-Token": key} })
    return matchData.data
}


/*
Função que retorna o tipo da partida (Aram, Flex, Normal game...) de uma lista de partidas
Input: match_id
Output: tipo de partida
*/
function get_type_game(match)
{
    let i;
    const idtypegame = match.info.queueId
    let typeGame

    for(i = 0; i < types.length; i++)
    {
        if(idtypegame == types[i].queueId)
        {
            typeGame = types[i].description
        }
    }
    return typeGame
}

//Função para transformar segundos da partida no formato hh:mm:ss
function timest(segundos){
    const h = segundos/ 3600
    const m = (segundos % 3600) / 60
    const s = (segundos % 3600) % 60
    const t = parseInt(h) + ":" + parseInt(m) + ":" + parseInt(s)
    return t
}

/*
Função que retorna dados filtrados de todos os jogadores de uma partida
Input: Número da partida da lista de partidas
Output: Histórico de uma partida
*/
async function get_historic(summoner_name,region,i)
{
    const listajogo = await get_list_match(summoner_name,region)
    const match_data = await get_match_data_participants(listajogo[listajogo.findIndex(j => j === i)])
    
    const match_data_participants = match_data.info.participants

    function runasicon(x)
    {
        for (var l = 0; l < runas.length; l++)
        {
            if (x == runas[l].id)
            {
                return runas[l].icon
            }
                
        }
             
    }

    function runasname(x)
    {
        for (var l = 0; l < runas.length; l++)
        {
            if (x == runas[l].id)
            {
                return runas[l].key
            }
                
        }
             
    }

    function icon_spells(x)
    {
        for (var l of Object.keys(spells.data))
        {
            if (x == spells.data[l].key)
            {
                return spells.data[l].id
            }
                    
        }     
    }

    function name_spells(x)
    {
        for (var l of Object.keys(spells.data))
        {
            if (x == spells.data[l].key)
            {
                return spells.data[l].name
            }
                    
        }     
    }

    function itemname(x)
    {
        for (var l of Object.keys(item.data))
        {
            if (x == l)
            {
                return item.data[l].name
            }      
        }     
    }

    const gameDuration = "gameDuration: " + timest(match_data.info.gameDuration)

    const listaParticipantes = match_data_participants.map((participante) => ({
        kills: participante.kills,
        assists: participante.assists,
        deaths: participante.deaths,
        win: participante.win,
        lane: participante.lane,
        championName: participante.championName,
        championLevel: participante.champLevel,
        gold: participante.goldEarned,
        minions: participante.totalMinionsKilled + participante.neutralMinionsKilled,
        nome: participante.summonerName,
        damage: participante.totalDamageDealtToChampions,
        typegame: get_type_game(match_data),
        
        //runas
        rune: data.runas_Icon + runasicon(participante.perks.styles[0].style),
        rune_name: runasname(participante.perks.styles[0].style),

        //itens
        item0: data.item_Icon + participante.item0 + ".png",
        item0name: itemname(participante.item0),
        item1: data.item_Icon + participante.item1 + ".png",
        item1name: itemname(participante.item1),
        item2: data.item_Icon + participante.item2 + ".png",
        item2name: itemname(participante.item2),
        item3: data.item_Icon + participante.item3 + ".png",
        item3name: itemname(participante.item3),
        item4: data.item_Icon + participante.item4 + ".png",
        item4name: itemname(participante.item4),
        item5: data.item_Icon + participante.item5 + ".png",
        item5name: itemname(participante.item5),
        item6: data.item_Icon + participante.item6 + ".png",
        item6name: itemname(participante.item6),

        //feitiços de invocador
        spell1: data.spells_Icon + icon_spells(participante.summoner1Id) + ".png",
        spell1name: name_spells(participante.summoner1Id), 
        spell2: data.spells_Icon + icon_spells(participante.summoner2Id) + ".png",
        spell2name: name_spells(participante.summoner2Id),

        //ícone do campeão
        championIcon: data.champion_Icon + participante.championName + ".png"
        
    }));

    return [gameDuration, listaParticipantes]
    
}


/*
Função que retorna dados filtrados de uma partida do jogador 
Input: Nome do jogador e número da partida na lista de partidas
Output: Mini histórico do jogador da partida solicitada
*/
async function get_name_historic(summ_name, region)
{  
    

    const listajogo = await get_list_match(summ_name,region)
    var listap = []
    

    for (var k = 0; k < listajogo.length; k++)
    {
        const match_data = await get_match_data_participants(listajogo[k])
        const match_data_participants = match_data.info.participants
        
        for (var jk = 0; jk < match_data_participants.length; jk++)
        {
            if (summ_name == match_data_participants[jk].summonerName){
                let meu_participante = {
                "typegame": get_type_game(match_data),
                "kills": match_data_participants[jk].kills,
                "assists": match_data_participants[jk].assists,
                "deaths": match_data_participants[jk].deaths,
                "win": match_data_participants[jk].win,
                "lane": match_data_participants[jk].lane,
                "championName": match_data_participants[jk].championName,             
                "gameDuration": timest(match_data.info.gameDuration),
                "championIcon": data.champion_Icon + match_data_participants[jk].championName + ".png"
                }
                listap.push(meu_participante)
            }  
        }
    }
    return listap
}


/*
Função que retorna uma lista de maestria de cada campeão por jogador
Input: id do jogador
Output: lista de campeões e maestrias
*/
async function get_top_champions(id_jogador, region)
{
    //region = data.region
    key = data.riotKey
    summonerURL = data.summoner_URL
    summonerID = id_jogador
    
    if (region == "")
    {
        region = data.default_region
    }

    url = "https://" + region + summonerURL + summonerID

    const summonerResponde = await axios.get(url , { headers : { "X-Riot-Token": key} })
    
    /*
    Função que retorna o nome do campeão baseado em um json separado
    Input: lista de top campeões
    Output: o nome do campeão baseado na ID
    */
    function get_name_champion(sumres)
    {
        let j
        const list_champion = Object.keys(campeoes.data)
        
        for(j=0; j < list_champion.length; j++){
            if (campeoes.data[Object.keys(campeoes.data)[j]].key == sumres)
            {
                    return list_champion[j] 
            }
        }  
    }
    
    
    const listaSummoner = summonerResponde.data.map((champions) => ({
    
        championName: get_name_champion(champions.championId),
        championsId: champions.championId,
        championLevelMaestry: champions.championLevel,
        championPoints: champions.championPoints,
        nextLevel: champions.championPointsUntilNextLevel,
        bau: champions.chestGranted,
        championIcon: data.champion_Icon + get_name_champion(champions.championId) + ".png"
    }))
    
    return listaSummoner
}


/*
Função que retorna os dados da ranqueada do jogador
Input: id do jogador
Output: lista de ranqueada do jogador (solo/duo e flex)
*/
async function get_ranked_summoner(id_jogador, region)
{
    key = data.riotKey
    summonerId = id_jogador
    //region = data.region
    ranked_URL = data.league_URL

    if (region == "")
    {
        region = data.default_region
    }

    url = "https://" + region + ranked_URL + summonerId

    const list_ranked = await axios.get(url, { headers: {"X-Riot-Token": key} })

    if(list_ranked == ''){
        x = "Dados não disponíveis"
        return x
    }
    else{
        const ranked_summoner = list_ranked.data.map((ranked) => ({
            typeGame: ranked.queueType,
            tier: ranked.tier,
            summonerName: ranked.summonerName,
            points: ranked.leaguePoints,
            wins: ranked.wins,
            losses: ranked.losses,
            winRate: ((ranked.wins / (ranked.wins + ranked.losses)) * 100).toFixed(1)
        }))
    
    return ranked_summoner
    }
}


module.exports = {
    get_list_match,
    get_match_data_participants,
    get_historic,
    get_id_summoner,
    get_puuid,
    get_ranked_summoner,
    get_top_champions,
    get_name_historic,
    get_profile_icon
    };