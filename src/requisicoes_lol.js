/* File that contain the defs source code of the project */

const data = require('../json/config.json')
const axios = require("axios")
const types = require('..\\json\\tiposJogos.json')
const campeoes = require('..\\json\\campeoes.json')
const runas = require('..\\json\\runas.json')
const spells = require('..\\json\\spells.json')
const item = require('..\\json\\item.json')

const { riotKey, puuid_URL, profile_Icon, default_region, default_continent, match_URL, league_URL, summoner_URL, champion_Icon} = data
/*
Função que retorna o ícone de perfil do jogador
Input: 
Output: URL do ícone de perfil do jogador
*/
// async function get_profile_icon(summoner_name, region)
// {
// 	const server = region ?? default_region
// 	const url = `https://${server}${puuid_URL}${summoner_name}`

// 	const list_summoner = await axios.get(url, { headers : {"X-Riot-Token": riotKey} })
// 		.then(res => {
// 			const profileIcon = `${profile_Icon}${res.data.profileIconId}.png`
// 			console.log(res.data)
// 			return profileIcon
// 		})

// 	return list_summoner
// }

async function getSummonerData(summoner_name, region) {
	const server = region ?? default_region
	const url = `https://${server}${puuid_URL}${summoner_name}`

	const list_summoner = await axios.get(url, { headers : {"X-Riot-Token": riotKey} })
		.then(res => ({
			...res.data,
			profileIcon: `${profile_Icon}${res.data.profileIconId}.png`,
		}))
    
	return list_summoner
}

/*
Função que retorna os dados da ranqueada do jogador
Input: id do jogador
Output: lista de ranqueada do jogador (solo/duo e flex)
*/
async function get_ranked_summoner(id_jogador, region)
{
    const server = region ?? default_region

    url = "https://" + server + league_URL + id_jogador

    const list_ranked = await axios.get(url, { headers: {"X-Riot-Token": riotKey} })

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

/*
Função que retorna o id do jogador (summonerId)
Input: 
Output: id do jogador
*/
// async function get_id_summoner(summoner_name,region)
// {
//     key = data.riotKey
//     id_URL = data.puuid_URL

//     if (region == "")
//     {
//         region = data.default_region
//     }

//     url = "https://" + region + id_URL + summoner_name

//     const list_summoner = await axios.get(url, { headers : {"X-Riot-Token": key} })

//     const id_summoner = list_summoner.data.id
    
//     return id_summoner
// }

/*
/*
Função que pega a puuid do Jogador
Input:
Output: Id do Jogador
*/
/*async function get_puuid(summoner_name, region)
{
    
    riotURL = data.puuid_URL
    key = data.riotKey
    
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
async function get_list_match(puuid,continent)
{
    const server = continent ?? default_continent
    const url = "https://" + server + match_URL + "by-puuid/" + 
    puuid + "/ids?start=" + "0" + "&count=" + "20"

    const matchIdResponde = await axios.get(url , { headers : { "X-Riot-Token": riotKey} })
    const result = matchIdResponde.data
    
    var listMatch = []

    function get_type_game(match)
{
    let i;
    const idtypegame = match.queueId
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


    for (var i of result){
        const api_match_url = "https://" + server + match_URL + i
        const matchData = await axios.get(api_match_url, { headers : { "X-Riot-Token": riotKey} })
            .then(res => {
                const datalol = res.data
                const gameDuration = datalol.info.gameDuration
                const playersMatch = datalol.info.participants.map((player) => ({
                    kills: player.kills,
                    assists: player.assists,
                    deaths: player.deaths,
                    win: player.win,
                    lane: player.lane,
                    championName: player.championName,
                    championLevel: player.champLevel,
                    gold: player.goldEarned,
                    minions: player.totalMinionsKilled + player.neutralMinionsKilled,
                    nome: player.summonerName,
                    damage: player.totalDamageDealtToChampions,
                    typegame: get_type_game(player),
        
                    //runas
                    rune: data.runas_Icon + runasicon(player.perks.styles[0].style),
                    rune_name: runasname(player.perks.styles[0].style),

                    //itens
                    item0: data.item_Icon + player.item0 + ".png",
                    item0name: itemname(player.item0),
                    item1: data.item_Icon + player.item1 + ".png",
                    item1name: itemname(player.item1),
                    item2: data.item_Icon + player.item2 + ".png",
                    item2name: itemname(player.item2),
                    item3: data.item_Icon + player.item3 + ".png",
                    item3name: itemname(player.item3),
                    item4: data.item_Icon + player.item4 + ".png",
                    item4name: itemname(player.item4),
                    item5: data.item_Icon + player.item5 + ".png",
                    item5name: itemname(player.item5),
                    item6: data.item_Icon + player.item6 + ".png",
                    item6name: itemname(player.item6),

                    //feitiços de invocador
                    spell1: data.spells_Icon + icon_spells(player.summoner1Id) + ".png",
                    spell1name: name_spells(player.summoner1Id), 
                    spell2: data.spells_Icon + icon_spells(player.summoner2Id) + ".png",
                    spell2name: name_spells(player.summoner2Id),

                    //ícone do campeão
                    championIcon: data.champion_Icon + player.championName + ".png"
                }))
                return [gameDuration, playersMatch]
                
            })
        listMatch.push(matchData)
    }
    return listMatch
    
    
}


/*
Função que pega dados de uma só partida
Input: Lista de partidas
Output: Dados de uma partida 
*/
/*async function get_match_data_participants(continent, partida)
{
    const server = continent ?? default_continent

    const api_match_url = "https://" + server + 
    match_URL + partida

    const matchData = await axios.get(api_match_url, { headers : { "X-Riot-Token": riotKey} })
    return matchData.data
    //return api_match_url
}*/


/*
Função que retorna o tipo da partida (Aram, Flex, Normal game...) de uma lista de partidas
Input: match_id
Output: tipo de partida
*/


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
async function get_historic(puuid, continent)
{
    
    //const listajogo = await get_list_match(puuid,continent)
    //const match_data = await get_match_data_participants(continent, listajogo[listajogo.findIndex(j => j === i)])
    
    //const match_data_participants = match_data.info.participants

    

    const match_data_participants = await get_list_match(puuid,continent)
    

    const listaParticipantes = match_data_participants.map((participante) => ({
        gameDuration:timest(participante[0]),
        partida:participante[1],    
    }));
    
    return listaParticipantes
    //return match_data
}


/*
Função que retorna dados filtrados de uma partida do jogador 
Input: Nome do jogador e número da partida na lista de partidas
Output: Mini histórico do jogador da partida solicitada
*//*
async function get_summoner_historic(puuid, continent, summonerName)
{  
    var listap = []
    
    const listajogo = await get_list_match(puuid, continent)
    
    for (var k = 0; k < listajogo.length; k++)
    {
        for (var jk = 0; jk < 10; jk++){
            if (listajogo[k][1][jk].nome == summonerName){
                const matchWay = listajogo[k][1][jk]
                const listaPlayer = matchWay.map((player)=>({
                typegame: player.typegame,
                kills: player.kills,
                assists: player.assists,
                deaths: player.deaths,
                win: player.win,
                kda: player.challenges.kda,
                lane: player.lane,
                championName: player.championName,             
                gameDuration: listajogo[k][0],
                championIcon: champion_Icon + player.championName + ".png"
                }))
                listap.push(listaPlayer)
    }}}
    //const sum_historic = listajogo.map((player) => ({
        
    //const championName = listaChampions.filter(player => player.summonerName == match_data_participants[jk].summonerName)[0].name
/*
    for (var k = 0; k < listajogo.length; k++)
    {
        //const match_data = await get_match_data_participants(continent, listajogo[k])
        //const match_data_participants = match_data.info.participants
        
        for (var jk = 0; jk < listajogo.length; jk++)
        {
            if (summonerName == match_data_participants[jk].summonerName){
                let meu_participante = {
                "typegame": get_type_game(match_data),
                "kills": match_data_participants[jk].kills,
                "assists": match_data_participants[jk].assists,
                "deaths": match_data_participants[jk].deaths,
                "win": match_data_participants[jk].win,
                "kda": match_data_participants[jk].challenges.kda,
                "lane": match_data_participants[jk].lane,
                "championName": match_data_participants[jk].championName,             
                "gameDuration": timest(match_data.info.gameDuration),
                "championIcon": champion_Icon + match_data_participants[jk].championName + ".png"
                
            }
                listap.push(meu_participante)
            }  
        }
    }
    return listap
}))
}
    return listap
}
*/





/*
Função que retorna uma lista de maestria de cada campeão por jogador
Input: id do jogador
Output: lista de campeões e maestrias
*/
async function getNameListChampion() {
	const listChampion = await axios.get('http://ddragon.leagueoflegends.com/cdn/12.22.1/data/en_US/champion.json')
      .then(res => {
				const { data } = res.data
                const listaNomes = Object.keys(data)
				const listaDados = Object.values(data).map(dado => dado.key)
				const listaMerge = listaNomes.map((champion, index) => ({
					name: champion,
					key: parseInt(listaDados[index])
				}))
        return listaMerge
      })
	return listChampion
}

async function get_name_champion(sumres)
{
		let j
		const list_champion = Object.keys(campeoes.data)
		const l = await axios.get('http://ddragon.leagueoflegends.com/cdn/12.22.1/data/en_US/champion.json')
      .then(res => {
				const { data } = res.data
        const lista = Object.keys(data)
        return lista
      })
		
		// const championList = list_champion.filter(champion => Object.keys(champ))
		for(j=0; j < list_champion.length; j++){
			if (campeoes.data[Object.keys(campeoes.data)[j]].key == sumres) {
				//console.log(Object.keys(campeoes.data)[j])
				//console.log(campeoes.data.Quinn.key)
				return list_champion[j] 
			}
		}  
}

async function get_top_champions(id_jogador, region)
{
    
    const serverchampions = region ?? default_region
    const listaChampions = await getNameListChampion()
    const url = "https://" + serverchampions + summoner_URL + id_jogador
    
    const summonerChampions = await axios.get(url , { headers : { "X-Riot-Token": riotKey} })
    
	const listaSummoner = summonerChampions.data.map((champions) => {
	const championName = listaChampions.filter(champion => champion.key == champions.championId)[0].name
    const objData = {
				championName,
				championsId: champions.championId,
				championLevelMaestry: champions.championLevel,
				championPoints: champions.championPoints,
				nextLevel: champions.championPointsUntilNextLevel,
				bau: champions.chestGranted,
				championIcon: data.champion_Icon + championName + ".png"
			}

	return objData
    })
    
    return listaSummoner
}





module.exports = {
    get_list_match,
    //get_match_data_participants,
    get_historic,
    // get_id_summoner,
    //get_puuid,
    get_ranked_summoner,
    get_top_champions,
    //get_summoner_historic,
    // get_profile_icon,
    get_name_champion,
	getSummonerData,
	getNameListChampion
    };
