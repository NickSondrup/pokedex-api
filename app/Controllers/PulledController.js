import { ProxyState } from "../AppState.js";
import { pulledService } from "../Services/PulledService.js";
function _drawPulledPokemon(){
  let template = ''
  ProxyState.pulledPokemon.forEach(p => template += p.Template)
  document.getElementById('pulled-pokemon').innerHTML = template
}

export class PulledController{
  constructor(){
    ProxyState.on('pulledPokemon', _drawPulledPokemon)
    pulledService.pullPokemon()
  }


  async getPokeDetails(url){
    try{
      await pulledService.getPokeDetails(url)   
    }
     catch (error){
      console.log('☢ getPokeDetails', error)
    }
  }
}