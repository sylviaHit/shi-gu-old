/**
 * homePage
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    Dimensions,
    TextInput,
    TouchableOpacity
} from 'react-native';
import TestStar from './pages/home/Test';
import HeartTest from './pages/home/HeartTest';

type Props = {};
export default class HomePage extends Component<Props> {

    render() {
        return (
            <HeartTest/>
        );
    }
}
