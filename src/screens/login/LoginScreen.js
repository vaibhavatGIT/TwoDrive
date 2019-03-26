import React, { Component } from 'react';
import {
    View, Text, Image, ImageBackground,
    KeyboardAvoidingView, TouchableOpacity, Alert, Dimensions
} from 'react-native';


class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View>
                <Text> This Is Login Screen</Text>
            </View>
        )
    }
}

export default LoginScreen;