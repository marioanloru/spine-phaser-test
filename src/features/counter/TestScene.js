import Phaser from 'phaser';

export default class FightScene extends Phaser.Scene {

  constructor () {
    super('FightScene');
  }

  preload () {
    console.log('Preload!');
    // Spine
    this.load.spineBinary("spineboy-data", "spineboy-pro.skel");
    this.load.spineAtlas("spineboy-atlas", "spineboy-pma.atlas", true);
  }

  async create() {
  }

  stateUpdated() {
  }
}

