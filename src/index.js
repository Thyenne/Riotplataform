/* File that contain the main source code of the project */
//import get_json_type_game from type.js 

const express = require("express")
const cors = require('cors')
const app = express()

const { json } = require("express")

const appLol= require("./requisicoes_lol.js")

app.use(cors())
app.listen(3500)
app.use(json())


async function main(){
/*
    Função principal
    Input:
    Output:
    */
    app.get('/:region/summoner/:summonerName', async (req, res) => {
        try {
            const {summonerName, region} = req.params
                
            const summonerData = await appLol.getSummonerData(summonerName,region)
            const profileIcon = summonerData.profileIcon
                    //const listMatch = await appLol.get_list_match(summonerData.puuid)
                    //const championList = await appLol.getNameListChampion()
                    
                    // const dataMatchSummoner = await appLol.get_summoner_historic(summonerName,region, listMatch)

                    //const historic = await appLol.get_historic(summonerName,region,0)

                    //const id_player = summonerData.id_summoner
                    
                    //const champions = await appLol.get_top_champions(id_player, region, championList)
                    
            const ranked_summoner = await appLol.get_ranked_summoner(summonerData.id, region)
                    
                    
            return res.status(200).json({
                profileIcon,
                summonerName: summonerData.name,
                summonerLevel: summonerData.summonerLevel,
                ranked_summoner
            })
        } catch (error) {
                return res.status(418).json(error)
        }
    })

    app.get('/:continent/:region/:summonerName/selfHistoric', async (req,res) => {
        try{
            const {summonerName, region, continent} = req.params
            
            const summonerData = await appLol.getSummonerData(summonerName, region)
            
            const summoner_historic = await appLol.get_summoner_historic(summonerData.puuid, summonerData.name, continent)
            return res.status(200).json({
                summoner_historic
            })
        } catch (error){
            return res.status(418).json(error)
        }


    })

    //Função de chamada para o front

//thyenne includes
 //   const getByName = async ()


    //Função try catch para endpoint da página Summoner
    
    
    //Função try catch para endpoint da página Match
    
        //Função de try catch para todas as variaveis que importam funções do modulo de requisições

    app.get('/:continent/:region/:summonerName/match/:matchId', async (req,res) => { 
        try{  
            const {summonerName, continent, region, matchId} = req.params
           
            const summonerData = await appLol.getSummonerData(summonerName,region)  
            
            const historic = await appLol.get_historic(summonerData.puuid,continent,matchId)

            return res.status(200).json({
                historic
            })
        }
    
        catch(error) //Função catch para erro no console
        {
            return res.status(418).json(error) 
        } 
    })


    //Função try catch para endpoint da página Champions
    
        //Função de try catch para todas as variaveis que importam funções do modulo de requisições

    app.get('/:region/:summonerName/champions', async (req,res) => { 
        try{
            const {summonerName, region} = req.params   
            
            //const id_player = await appLol.get_id_summoner(summonerName, region)
            //const summonerData = await appLol.getSummonerData(summonerName,region)
            //const championsName = await appLol.getNameListChampion()
            const championsData = await appLol.get_top_champions('C556tQkDD__40Y29wYAH0HGQ8TNQ0eLKq3uOJ8Bywzl1jQ', 'br1')

            return res.status(200).json({
                championsData
            })
        }
        //Função catch para erro no console
        catch(error){
             
        return res.status(418).json(error) 
        }

    })
}
main() //Chamada da função main
