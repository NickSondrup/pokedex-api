import { ProxyState } from "../AppState.js";


function _drawCurrentPokemon(){
  console.log('did drawCurrent work?', ProxyState.currentPokemon);
  document.getElementById('current-pokemon').innerHTML = ProxyState.currentPokemon.Template
}

export class CurrentController{
  constructor(){
    ProxyState.on('currentPokemon', _drawCurrentPokemon)
  }
  
}