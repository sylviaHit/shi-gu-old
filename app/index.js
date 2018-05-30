/**
 * homePage
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    ImageBackground,
    View,
    Text
} from 'react-native';
import HomePage from './pages/home/HomePage';
import Poetry from './pages/poetry/Poetry';


type Props = {};
export default class ShiGu extends Component<Props> {

    constructor(props){
        super(props);
        this.state = {
            currentPage: 'home'
        }
    }

    /**
     * 当前页面修改
     * @returns {*}
     */
    currentPageChange = (page) => {
        console.log('page', page);
        this.setState({
            currentPage: page
        })
    }

    render() {
        // getRequest('https://cbdb.fas.harvard.edu/cbdbapi/person.php?name=王安石&o=json');
        const { currentPage } = this.state;
        console.log('currentPage', currentPage);
        let Component = HomePage;
        switch(currentPage){
            case 'home':
                Component = HomePage;
                break;
            case 'poetry':
                Component = Poetry;
                break;
            default:
                Component = HomePage;
                break;
        }

        return (
            <Component currentPageChange={this.currentPageChange}/>

        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});
