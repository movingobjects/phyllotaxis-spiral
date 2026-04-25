
import React, { Component } from 'react';

import Spiral from '../Spiral';

import style from './index.module.scss';

export default class App extends Component {

  render() {

    return (
      <div className={style.wrap}>

        <Spiral />

      </div>
    )

  }

}
