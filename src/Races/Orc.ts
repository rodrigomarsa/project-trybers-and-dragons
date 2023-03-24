import Race from './Race';

export default class Orc extends Race {
  private static orcCount = 0;
  private _maxLifePoints = 74;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc.orcCount += 1;
  }

  static createdRacesInstances(): number {
    return Orc.orcCount;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
