import { ProxyState } from "../AppState.js"
import { PushedPokemon } from "../Models/PushedPokemon.js"


// @ts-ignore
const pushedApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/'
})

class PushedService{
async catchPokemon(){
  const pokemonToCatch = new PushedPokemon(ProxyState.currentPokemon)
  let res = await pushedApi.post(`${ProxyState.user}/pokemon`, pokemonToCatch)
  ProxyState.pushedPokemon = [...ProxyState.pushedPokemon, new PushedPokemon(res.data)]
  console.log(ProxyState.pushedPokemon)
}
async getPushedPokemon(){
  let res = await pushedApi.get(`${ProxyState.user}/pokemon`)
  ProxyState.pushedPokemon = res.data.map(p => new PushedPokemon(p))
  console.log(ProxyState.pushedPokemon);
}
async releasePokemon(id){
  await pushedApi.delete(id)
  ProxyState.pushedPokemon = ProxyState.pushedPokemon.filter(p => p.id !== id)
}
}


export const pushedService = new PushedService()