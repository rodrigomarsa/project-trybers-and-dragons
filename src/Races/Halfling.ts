import Race from './Race';

export default class Halfling extends Race {
  private static halflingCount = 0;
  private _maxLifePoints = 60;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling.halflingCount += 1;
  }

  static createdRacesInstances(): number {
    return Halfling.halflingCount;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
