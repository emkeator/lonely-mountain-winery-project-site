import React, {Component} from 'react'
import dragon from './../../dragonWhite.png';
import $ from 'jquery';
import wedding from './weddingHex.jpg';
import wine from './wineHex.jpg';
import pikePlace from './pikePlaceHex.jpg';
import redWine from './redWineHex.jpg';

export default class Events extends Component {
    
    constructor() {
        super();
        
        this.state = {
            events: [
                {
                    name: 'Weddings',
                    img: wedding,
                    id: 'wedding',
                    description: 'Gorgeous, personalized ceremonies and stunning receptions for up to 200 guests may be held at Lonely Mountain. We have several venues to choose from, including a chapel in the forest and an outdoor venue on the mountainside. Please inquire for more information.'
                },
                {
                    name: 'Parties',
                    img: wine,
                    id: 'party',
                    description: 'Small parties and any other occasions deserving of a breathtaking venue. Private tasting included for the group. Catering onsite is available from a list of local vendors, and menus vary seasonally. Please inquire for more information.'
                },
                {
                    name: 'Business Retreats',
                    img: pikePlace,
                    id: 'business',
                    description: 'With Seattle nearby, plenty of businesses love to give employees a well-deserved retreat at Lonely Mountain. Activities can be arranged, both onsite and in the area, as part of the retreat. Please inquire for more information.'
                },
                {
                    name: 'Public Events',
                    img: redWine,
                    id: 'publicEvents',
                    description: (
                        <ul>
                            <li>Art and Wine, 7pm 8//28//17<br/><em className="listDescrip"> A night of painting and wine tasting. Materials provided as part of cost.</em></li>
                            <li>Yoga Retreat, 5pm 9//3//17<br/><em className="listDescrip"> Simultaneously cleanse your body of toxins, and pack them in with our wine.</em></li>
                            <li>Tolkein Outdoor Screening, 8pm 9//22//18<br/><em className="listDescrip"> Bring your blankets, and enjoy a wine tasting and an outdoor screening of </em><span className="listDescrip">The Lord of the Rings: the Two Towers.</span></li>
                        </ul>)
                }
            ],

        }
    }

    componentDidMount() {
        $('.eventDescription').hide();
        $('body').scrollTop(0);
    }

    submitInformation() {
        $('input').val('');
        $('select').prop('selectedIndex', 0);
        alert('Sorry, this is just a mock site for a class project. But thanks for your interest!');
    }

    render() {
        return(
            <div>
                <header className="eventHeader">Events at Lonely Mountain<img src={dragon} alt='dragon'/></header>
                <section className="eventContainer">
                     {this.state.events.map((event, index)=>{
                        return (
                            <div key={index} className={"eventInfo "+ event.id}>
                                <span className="eventTitle" onClick={ () => {
                                        let me = $(`.${event.id} .eventDescription`);
                                        if(me.is(':visible')) {
                                            me.hide(800);
                                        }else {
                                            me.show(800);
                                        }
                                    }
                                }><img src={event.img} alt="wine"className="eventImg"/><h1 style={{display: 'inline'}}>|| {event.name}</h1></span>
                                <div className="eventDescription">{event.description}</div>
                            </div>
                        )
                    })} 
                    <div className="requestInformation">
                        <h1>Request Event Information</h1>
                        <input type="text" placeholder="Name"></input>
                        <input type="text" placeholder="Email"></input>
                        <select className="selector" name="Type of Event">
                            <option selected disabled>Type of Event</option>
                            <option value="weddings">Weddings</option>
                            <option value="parties">Parties</option>
                            <option value="business retreats">Business Retreats</option>
                            <option value="public events">Public Events</option>
                        </select>                        
                        <button className="eventButton" disabled={false} 
                                onClick={() => this.submitInformation()}
                                >Submit</button>
                    </div>
                </section>
            </div>
        );
    }
}