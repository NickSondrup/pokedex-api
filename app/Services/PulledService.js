import { ProxyState } from "../AppState.js"
import { CurrentPokemon } from "../Models/CurrentPokemon.js"
import { PulledPokemon } from "../Models/PulledPokemon.js"

// @ts-ignore
const pulledApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon'

})


class PulledService {

async pullPokemon(){
  let res = await pulledApi.get()
  console.log('pulled res', res.data.results)
  ProxyState.pulledPokemon = res.data.results.map(p => new PulledPokemon(p))
}
async getPokeDetails(url){
  let res = await pulledApi.get(url)
  ProxyState.currentPokemon = new CurrentPokemon(res.data)
  console.log('current pokemon:', ProxyState.currentPokemon)
}

}

export const pulledService = new PulledService()