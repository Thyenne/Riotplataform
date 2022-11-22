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



/*
    Função principal
    Input:
    Output:
    */
 async function main(){
    //Função de chamada para o front

//thyenne includes
 //   const getByName = async ()


    //Função try catch para endpoint da página Summoner
    try{

        app.get('/:region/summoner/:summonerName', async (req,res) => { 
            const {summonerName} = req.params
            const {region} = req.params
            
            const profileIcon = await appLol.get_profile_icon(summonerName,region)

            const list_match = await appLol.get_list_match(summonerName, region)    
            
            const data_match_summoner = await appLol.get_name_historic(summonerName,region)

            //const historic = await appLol.get_historic(summonerName,region,0)

            const id_player = await appLol.get_id_summoner(summonerName, region)
            
            //const champions = await appLol.get_top_champions(id_player, region)
            
            const ranked_summoner = await appLol.get_ranked_summoner(id_player, region)
            
            
            return res.json({profileIcon,list_match,ranked_summoner,data_match_summoner})
            
        })
    }
    catch(err) //Função catch para erro no console
    {
            console.log("Error Log: " + err) 
    }  
    
    //Função try catch para endpoint da página Match
    try{
        //Função de try catch para todas as variaveis que importam funções do modulo de requisições

        app.get('/:region/:summonerName/match/:matchId', async (req,res) => { 
            const {summonerName} = req.params
            const {region} = req.params    
            const {matchId} = req.params
            
            const historic = await appLol.get_historic(summonerName,region,matchId)

            return res.json(historic)
        })
    }
    catch(err) //Função catch para erro no console
    {
            console.log("Error Log: " + err) 
    } 

    //Função try catch para endpoint da página Champions
    try{
        //Função de try catch para todas as variaveis que importam funções do modulo de requisições

        app.get('/:region/:summonerName/champions', async (req,res) => { 
            const {summonerName} = req.params
            const {region} = req.params    
            
            const id_player = await appLol.get_id_summoner(summonerName, region)
            const champions = await appLol.get_top_champions(id_player, region)

            return res.json(champions)
        })
    }
    catch(err) //Função catch para erro no console
    {
            console.log("Error Log: " + err) 
    }

}

main() //Chamada da função main
