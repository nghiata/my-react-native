import React, { Component } from 'react';
import { View, Text, Animated } from 'react-native';

class FadeView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(1),
        };
    }

    componentDidMount() {
        Animated.timing(
            this.state.fadeAnim,
            {
                toValue: 0,
                duration: 5000,
            }
        )
        .start();
    }

    render() {
        const opacity = this.state.fadeAnim;
        return (
            <Animated.View style={{ width: 300, height: 200, backgroundColor: 'green', opacity }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                    <Text style={{ color: '#fff', fontSize: 26, fontFamily: 'sans-serif', }}> Nghia Ta </Text>
                </View>
            </Animated.View>
        );
    }
}

export default FadeView;
