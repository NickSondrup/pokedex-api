import { ProxyState } from "../AppState.js";
import { pushedService } from "../Services/PushedService.js";


function _drawPulledPokemon(){
let template = ''
ProxyState.pushedPokemon.forEach(p => template += p.Template)
document.getElementById('pushed-pokemon').innerHTML = template
}


export class PushedController {
  constructor(){
    pushedService.getPushedPokemon()
    ProxyState.on('pushedPokemon', _drawPulledPokemon)
  }

  async catchPokemon(){
    try{
      await pushedService.catchPokemon()
    } catch (error){
      console.log('☢ catchPokemon', error);
    }
  }

  async releasePokemon(id){
    try{
      await pushedService.releasePokemon(id)
    } catch(error){
      console.log('☢ releasePokemon', error); 
    }
  }
}