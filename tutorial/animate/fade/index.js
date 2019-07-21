import React, { Component } from 'react';
import { View, Text } from 'react-native';
import FadeView from './FadeView';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
        <FadeView />
      </View>
    );
  }
}

export default App;
