import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private static warriorCount = 0;
  private _hability: EnergyType = 'stamina';

  constructor(name: string) {
    super(name);
    Warrior.warriorCount += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior.warriorCount;
  }

  get energyType(): EnergyType {
    return this._hability;
  }
}