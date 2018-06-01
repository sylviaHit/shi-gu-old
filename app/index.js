/**
 * 导航设置页
 */
import React, { Component } from 'react';
import HomePage from './src/pages/home/HomePage';
import Poetry from './src/pages/poetry/Poetry';
import Person from './src/pages/person/Person';
import { createStackNavigator } from 'react-navigation';


const RootStack = createStackNavigator(
    {
        Home: { screen: HomePage },
        Poetry:{ screen: Poetry },
        Person: { screen: Person }
    },
    {
        initialRouteName: 'Home',
        mode: 'modal',
        headerMode: 'none',
    }
);

export default class App extends React.Component {
    render() {
        return <RootStack />;
    }
}
