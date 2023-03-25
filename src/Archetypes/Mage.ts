import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private static mageCount = 0;
  private _hability: EnergyType = 'mana';

  constructor(name: string) {
    super(name);
    Mage.mageCount += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage.mageCount;
  }

  get energyType(): EnergyType {
    return this._hability;
  }
}