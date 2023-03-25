import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private static necromancerCount = 0;
  private _hability: EnergyType = 'mana';

  constructor(name: string) {
    super(name);
    Necromancer.necromancerCount += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.necromancerCount;
  }

  get energyType(): EnergyType {
    return this._hability;
  }
}