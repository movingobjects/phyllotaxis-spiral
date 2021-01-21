
import React, { Component } from 'react';
import { Stage, Layer, Circle } from 'react-konva';
import { times } from 'lodash';
import { maths } from 'varyd-utils';

import style from './index.module.scss';

export default class Spiral extends Component {

  getVerts() {

    const INDEX_START  = 1,
          INDEX_END    = 79,
          DIST_SCALE   = 9,
          DIST_POWER   = 0.75,
          RADIUS_MIN   = 5,
          RADIUS_MAX   = 25,
          RADIUS_POWER = 1.25,
          COUNT        = INDEX_END - INDEX_START;

    const getColor = (index) => {

      if (!(index % 2)) return 'black';
      if (!(index % 3)) return 'black';
      if (!(index % 5)) return 'black';
      if (!(index % 8)) return 'black';
      if (!(index % 13)) return 'black';

      return 'black';

    }

    return times(COUNT, (i) => {

      const index = INDEX_START + i,
            angle = index * maths.GOLDEN_ANGLE,
            dist  = DIST_SCALE * Math.pow(index, DIST_POWER),
            x     = dist * Math.cos(angle),
            y     = dist * Math.sin(angle);

      return {
        x,
        y,
        radius: maths.map(
          Math.pow(index, RADIUS_POWER),
          0,
          Math.pow(COUNT, RADIUS_POWER),
          RADIUS_MIN,
          RADIUS_MAX
        ),
        color: getColor(index)
      }

    });

  }

  render() {

    const {
      w = 1000,
      h = 1000
    } = this.props;

    const verts = this.getVerts();

    return (
      <div className={style.wrap}>

        <Stage
          width={w}
          height={h}>

          <Layer>
            {verts.map((vert, i) => (
              <Circle
                key={`vert-${i}`}
                fill={vert.color}
                radius={vert.radius}
                x={w / 2 + vert.x}
                y={h / 2 + vert.y}
              />
            ))}

          </Layer>

        </Stage>

      </div>
    )

  }

}
