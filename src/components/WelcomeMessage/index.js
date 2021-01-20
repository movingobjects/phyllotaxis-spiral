
import React, { Component } from 'react';

import checkmark from '~/src/images/checkmark.svg'

import style from './index.module.scss';

export default class WelcomeMessage extends Component {

  render() {

    const { message } = this.props;

    return (
      <div className={style.wrap}>

        <img
          className={style.checkmark}
          src={checkmark} />

        <p>{message}</p>

      </div>
    )

  }

}
