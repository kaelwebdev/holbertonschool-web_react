import React, { Component } from 'react';
import logo from '../assets/holberton-logo.jpg';
import {StyleSheet, css} from 'aphrodite';


const styles = StyleSheet.create({
  img: {
    width: '14rem'
  },
  h1: {
    fontWeight: 'bold'
  },
});

export default class Header extends Component {
  render() {
    return (
      <>
        <img src={ logo } className={css(styles.img)} alt="logo" />
        <h1 className={css(styles.h1)}>School dashboard</h1>
      </>
    )
  }
}
