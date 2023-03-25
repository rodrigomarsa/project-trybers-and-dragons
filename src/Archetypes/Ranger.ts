import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private static rangerCount = 0;
  private _hability: EnergyType = 'stamina';

  constructor(name: string) {
    super(name);
    Ranger.rangerCount += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger.rangerCount;
  }

  get energyType(): EnergyType {
    return this._hability;
  }
}