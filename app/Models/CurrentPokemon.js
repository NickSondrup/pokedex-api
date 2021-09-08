export class CurrentPokemon{

  constructor(pokeData){
    this.id = pokeData.id 
    this.name = pokeData.species.name 
    this.imgUrl = pokeData.sprites.front_default
    this.weight = pokeData.weight
  }



  get Template(){
    return /*html*/ `
    <div class="card elevation-2">
        <div class="card-header">
          <h3>${this.name}</h3>
        </div>
        <div class="card-body scrollable-y" style="max-height:50vh;">
        <img class="poke-img" src="${this.imgUrl}">
        </div>
        <div>
          <span>Weight: ${this.weight} --- Number: ${this.id}</span>
        </div>
        <div class="card-footer">
          <button class="btn btn-success" onclick="app.pushedController.catchPokemon()">Catch</button>
        </div>
      </div>
    `
  }
}