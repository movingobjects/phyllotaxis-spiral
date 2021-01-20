
import React, { Component } from 'react';

import WelcomeMessage from '~/src/components/WelcomeMessage';

import style from './index.module.scss';

export default class App extends Component {

  render() {

    return (
      <div className={style.wrap}>

        <WelcomeMessage
          message={`You did it!`} />

      </div>
    )

  }

}
