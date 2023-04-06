export class Pokemon {
	constructor (name, types, image, id, evolutionChain, genderRate, hatchSteps, abilities, height, weight, moves, stats, generation) {
		this._evolutionChain = evolutionChain;
		this._name = name;
		this._types = types;
		this._image = image;
		this._id = id;
		this._genderRate = genderRate;
		this._hatchSteps = hatchSteps;
		this._abilities = abilities;
		this._height = height;
		this._weight = weight;
		this._moves = moves;
		this._stats = stats;
		this._generation = generation;
	}

	show () {
		return `${this._name}, I choose you!`;
	}

	valueOf () {
		return this.level;
	}


	get name () {
		return this._name;
	}


	get types () {
		return this._types;
	}


	get image () {
		return this._image;
	}


	get id () {
		return this._id;
	}


	get evolutionChain () {
		return this._evolutionChain;
	}


	get genderRate () {
		return this._genderRate;
	}


	get hatchSteps () {
		return this._hatchSteps;
	}


	get abilities () {
		return this._abilities;
	}


	get height () {
		return this._height;
	}


	get weight () {
		return this._weight;
	}


	get moves () {
		return this._moves;
	}


	get stats () {
		return this._stats;
	}

	get generation () {
		return this._generation;
	}
}