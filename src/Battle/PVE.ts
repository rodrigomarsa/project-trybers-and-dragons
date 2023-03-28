import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  private _monsters: Monster[] | Fighter[] | SimpleFighter[];

  constructor(
    player: Fighter,
    monsters: Monster[] | Fighter[] | SimpleFighter[],
  ) {
    super(player);
    this._monsters = monsters;
  }

  fight(): number {
    this._monsters.forEach((e) => {
      this.player.attack(e);
      e.attack(this.player);
    });
    return super.fight();
  }
}