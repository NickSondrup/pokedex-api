export class PushedPokemon {
  constructor(pokeData){
    this.id = pokeData.id 
    this.name = pokeData.name 
    this.img = pokeData.imgUrl
    this.weight = pokeData.weight
  }
  get Template(){
    return /*html*/ `
    <div class="card elevation-2">
        <div class="card-header">
          <h3>${this.name}</h3>
        </div>
          <button class="btn btn-danger" onclick="app.pushedController.releasePokemon('${this.id}')">"Release"</button>
        </div>
      </div>
      `
   }
}