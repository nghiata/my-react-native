import React, { Component } from 'react';
import { View, Text, Animated, Easing, } from 'react-native';

class SlideView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideAnim: new Animated.Value(-1000),
        };
    }

    componentDidMount() {
        Animated.timing(
            this.state.slideAnim,
            {
                toValue: 0,
                duration: 5000,
                easing: Easing.bounce,
            }
        )
        .start();
    }

    render() {
        const marginLeft = this.state.slideAnim;
        return (
            <Animated.View style={{ width: 300, height: 200, backgroundColor: 'green', marginLeft, }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                    <Text style={{ color: '#fff', fontSize: 26, fontFamily: 'sans-serif', }}> Nghia Ta </Text>
                </View>
            </Animated.View>
        );
    }
}

export default SlideView;
