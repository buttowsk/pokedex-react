export class Evolution {
  constructor(name, image, evolutionInfo) {
    this._name = name;
    this._image = image;
    this._evolutionInfo = evolutionInfo;
  }

  get name() {
    return this._name;
  }

  get image() {
    return this._image;
  }

  get evolutionInfo() {
    return this._evolutionInfo;
  }
}