export class Item {
	constructor (name, image, id, description, cost, heldByPokemon, category) {
		this._name = name;
		this._image = image;
		this._id = id;
		this._description = description;
		this._cost = cost;
		this._heldByPokemon = heldByPokemon;
		this._category = category;
	}

	get name () {
		return this._name;
	}


	get image () {
		return this._image;
	}


	get id () {
		return this._id;
	}


	get description () {
		return this._description;
	}


	get cost () {
		return this._cost;
	}


	get heldByPokemon () {
		return this._heldByPokemon;
	}


	get category () {
		return this._category;
	}
}