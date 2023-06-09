export class Pokemon {
  constructor(name, types, image, id, evolutionChain, genderRate, abilities, height, weight, moves, stats, generation, shinyimage) {
    this.evolutionChain = evolutionChain;
    this.name = name;
    this.types = types;
    this.image = image;
    this.id = id;
    this.genderRate = genderRate;
    this.abilities = abilities;
    this.height = height;
    this.weight = weight;
    this.moves = moves;
    this.stats = stats;
    this.generation = generation;
    this.shinyImage = shinyimage;
  }

  show() {
    return `${ this.name }, I choose you!`;
  }


}