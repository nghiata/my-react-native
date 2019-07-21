import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableHighlight,
  StyleSheet,
  Switch,

} from 'react-native';

const styles = StyleSheet.create({
  containerApp: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  count: {
    fontSize: 48,
  }
})

class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  shouldComponentUpdate(nextProps) {
    return !(nextProps.count % 2)
  }

  componentDidUpdate() {
    console.log(this.props.count)
  }

  render() {
    return (
      <View>
        <Text style={styles.count}>{this.props.count}</Text>
      </View>
    );
  }
}


class MainCount extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
    }

    this.inc = this.inc.bind(this)

  }

  componentDidMount() {
    setInterval(this.inc, 1000)
  }

  inc = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }))
  }

  render() {
    return (
      <View style={styles.containerApp}>
        <Count count={this.state.count} />
      </View>
    );
  }
}

export default MainCount;
