export class PulledPokemon{
  constructor(pokeData){
    this.id = pokeData.id 
    this.name = pokeData.name 
    this.url = pokeData.url
  }


  get Template(){
    return /*html*/ `
      <li class="list-group-item py-2 selectable" onclick="app.pulledController.getPokeDetails('${this.url}')">${this.name}</li>
    `
  }
}