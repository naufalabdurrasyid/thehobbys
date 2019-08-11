import React, {Component} from 'react';
import AppHeader from '../common/AppHeader';
import AppFooter from '../common/AppFooter';

import HomeCarousel from './HomeCarousel';
import HomeJumbotron from './HomeJumbotron';
import HomeCard from './HomeCard'

export default class Homepage extends Component {
    render(){
        return (
            <div>
                <AppHeader gambar = {this.gambar}/>
                <HomeCarousel />
                <HomeJumbotron />
                <HomeCard />
                <AppFooter />
            </div>
        )
    }
}