import React from "react";
import Phaser from "phaser";
import * as spine from "@esotericsoftware/spine-phaser"
import TestScene from "./TestScene";


export default class Arena extends React.Component {
  componentDidMount() {
    const config = {
      type: Phaser.WEBGL,
      width: 800,
      height: 600,
      physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 300 },
          debug: false,
        },
      },
      scale: {
        parent: "phaser-game",
        autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
      },
      plugins: {
        scene: [
          { key: "spine.SpinePlugin", plugin: spine.SpinePlugin, mapping: "spine" }
        ]
      },
      scene: [TestScene],
    };

    const p = new Phaser.Game(config);
    console.log(p);
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return <div id="phaser-game" />;
  }
}
