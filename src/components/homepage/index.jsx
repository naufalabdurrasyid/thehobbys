import React, {Component} from 'react';
import AppHeader from '../common/AppHeader';
import AppFooter from '../common/AppFooter';

import HomeCarousel from './HomeCarousel';
import HomeJumbotron from './HomeJumbotron';
import HomeInfo from './HomeInfo';

export default class Homepage extends Component {
    render(){
        return (
            <div>
                <AppHeader />
                <HomeCarousel />
                <HomeJumbotron />
                <HomeInfo />
                <AppFooter />
            </div>
        )
    }
}