/**
 * 导航设置页
 */
import React, { Component } from 'react';
import HomePage from './src/pages/home/HomePage';
import Poetry from './src/pages/poetry/Poetry';
import Person from './src/pages/person/Person';
import Road from './src/pages/road/Road';
import Culture from './src/pages/culture/Culture';
import Scene from './src/pages/scene/Scene';
import { createStackNavigator } from 'react-navigation';

const RootStack = createStackNavigator(
    {
        Home: { screen: HomePage },
        Poetry:{ screen: Poetry },
        Person: { screen: Person },
        Road: { screen: Road },
        Culture:{ screen: Culture },
        Scene: { screen: Scene }
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
