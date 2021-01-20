
import React, { Component } from 'react';
import { Stage, Layer, Circle } from 'react-konva';

import style from './index.module.scss';

export default class Spiral extends Component {

  render() {

    const {
      w = 500,
      h = 500
    } = this.props;

    return (
      <div className={style.wrap}>

        <Stage
          width={w}
          height={h}>

          <Layer>
            <Circle
              fill='black'
              radius={25}
              x={w / 2}
              y={h / 2}
            />
          </Layer>

        </Stage>

      </div>
    )

  }

}
