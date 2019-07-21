import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, StatusBar, } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,

  },
  view1: {
    width: 50,
    height: 50,
    backgroundColor: '#0000ff',
    justifyContent: 'center',
  }
})

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'space-between', }}>
        <StatusBar hidden={true} />
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', }}>
          <View style={{ width: 50, height: 50, backgroundColor: '#0000ff', }}></View>
          <View style={{ width: 50, height: 50, backgroundColor: '#0000ff', }}></View>
          <View style={{ width: 50, height: 50, backgroundColor: '#0000ff', }}></View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', }}>          
          <View style={{ width: 50, height: 50, backgroundColor: '#0000ff', }}></View>
          <View style={{ width: 50, height: 50, backgroundColor: '#0000ff', }}></View>
          <View style={{ width: 50, height: 50, backgroundColor: '#0000ff', }}></View>
        </View>
      </View>
    );
  }
}

export default App;
