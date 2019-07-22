import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, StatusBar, Dimensions, } from 'react-native';

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

class Circle extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'space-between', backgroundColor: '#ddd', }}>
        <StatusBar hidden={true} />
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          backgroundColor: '#bdb76b',
          height: Dimensions.get('window').height / 2 - Dimensions.get('window').width / 2,
        }}>
          <View style={{ width: 50, height: 50, backgroundColor: '#0000ff', }}></View>
          <View style={{ width: 50, height: 50, backgroundColor: '#0000ff', }}></View>
          <View style={{ width: 50, height: 50, backgroundColor: '#0000ff', }}></View>
        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
          <View style={{
            backgroundColor: '#008b8b',
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').width,
            borderRadius: Dimensions.get('window').width / 2,
          }}>
          </View>

        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          backgroundColor: '#a9a9a9',
          height: Dimensions.get('window').height / 2 - Dimensions.get('window').width / 2,
        }}>
          <View style={{ width: 50, height: 50, backgroundColor: '#0000ff', }}></View>
          <View style={{ width: 50, height: 50, backgroundColor: '#0000ff', }}></View>
          <View style={{ width: 50, height: 50, backgroundColor: '#0000ff', }}></View>
        </View>
      </View>
    );
  }
}

export default Circle;
