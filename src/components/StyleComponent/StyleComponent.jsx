import React, { Component } from 'react'
import './style.css'
import css from './style.module.css'
export default class StyleComponent extends Component {
  render() {
    return (
      <div className='container'>
      <h2>StyleComponent</h2>
      <p className="title">Cybersoft BC32E</p>
    <p className={`${css.heading} ${css.heading1} ${css['about-heading']}`}>cmm</p>
      </div>
    )
  }
}
