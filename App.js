import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, Dimensions, } from 'react-native';
import Circle from './tutorial/basic/flex/circle';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Circle />
    );
  }
}

export default App;
