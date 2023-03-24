import Race from './Race';

export default class Dwarf extends Race {
  private static dwarfCount = 0;
  private _maxLifePoints = 80;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf.dwarfCount += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf.dwarfCount;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
