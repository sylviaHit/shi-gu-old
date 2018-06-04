/**
 * homePage
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
} from 'react-native';

type Props = {};
export default class Scene extends Component<Props> {

    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <ImageBackground style={styles.wrap} source= {require('../../images/poetry-bg-3.jpg')}>

            </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({
    wrap: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});
