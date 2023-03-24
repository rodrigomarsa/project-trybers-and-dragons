import Race from './Race';

export default class Elf extends Race {
  private static elfCount = 0;
  private _maxLifePoints = 99;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf.elfCount += 1;
  }

  static createdRacesInstances(): number {
    return Elf.elfCount;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
