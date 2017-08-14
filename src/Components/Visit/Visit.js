import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import dragon from './../../dragonWhite.png';
import MapContainer from './../MapContainer/MapContainer';
import $ from 'jquery';

export default class Visit extends Component {
    

    componentDidMount() {
        $('body').scrollTop(0);
    }

    render() {
        return(
            <div>
                <header className="visitHeader">Visit Lonely Mountain<img src={dragon} alt='dragon'/></header>
                <section className="visitInfo">
                    <p>We are located at <a href="https://www.google.com/maps/search/best+seattle+wineries" target="_blank">3 Rivendell Road, Dale, WA 98061</a>.</p>
                    <p>Distance from Seattle: approximately 1 hour.</p>
                    <p>Come join us for one of our many <Link to="/events">events</Link>!</p>  
                    <MapContainer />                 
                </section>
            </div>
        );
    }
}