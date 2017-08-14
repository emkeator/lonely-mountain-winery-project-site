import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import lonelyMtn from './../LonleyMtnLogoBlack.jpg';
import $ from 'jquery';

export default class Footer extends Component {
    constructor() {
        super();
        this.state = {
            infoBoxes: ['featWine', 'news', 'contact', 'history'],
            featWine: false,
            news: false,
            contact: false,
            history: false
        }
    }

    componentDidMount() {
        $('.infoBox').hide();
       
    }

    showHide(selector) {
        $('.'+selector).fadeToggle(700);
        let changes = {
            selector: true
        }
        for (let x= 0; x < this.state.infoBoxes.length; x++){
            if (this.state.infoBoxes[x] !== selector){
                changes[this.state.infoBoxes[x]] = false;
                if ($('.'+this.state.infoBoxes[x]).css('display') === 'block') {
                    $('.'+this.state.infoBoxes[x]).fadeToggle(700);
                }
                
            }
        }
    }

    render() {
        return(
            <footer id="#footer" className="mainFooter">
                <ul className='footerMenu'>
                    <li onClick={ () => this.showHide('featWine')} >Featured Wine ||</li>
                    <li onClick={ () => this.showHide('news')} className="left"> News</li>
                    <li onClick={ () => this.showHide('contact')} >Contact ||</li>
                    <li onClick={ () => this.showHide('history')} className="left"> Winery History</li>                    
                </ul>
                <div className='infoBox featWine'>
                    <section>
                        <em>Featured this Month</em>
                        <h1 className="infoBoxHeader">{this.props.featuredWine[0]}</h1>
                        <div>
                            <img alt="wine" src={this.props.featuredWine[2]}/>
                            <p>{this.props.featuredWine[3]} <Link to='/wines' className="featWineLink">${this.props.featuredWine[1]}.00, available</Link></p>
                        </div>
                    </section>
                </div>
                <div className='infoBox news'>
                    <section>
                        <em>{this.props.news[1]}</em>
                        <h1 className="infoBoxHeader">{this.props.news[0]}</h1>
                        <div>
                            <img alt="pike place market" src={this.props.news[2]}/>
                            <p>{this.props.news[3]} <a href='http://www.seattletimes.com/' className="featWineLink">Seattle Times</a></p>
                        </div>
                    </section>
                </div>
                <div className='infoBox contact'>
                    <section>
                        <h1 className="infoBoxHeader">Contact Us</h1>
                        <span>Phone // {this.props.contact[0]}</span>
                        <span>Email // {this.props.contact[1]}</span>
                        <span>Address // {this.props.contact[2]}</span>                        
                        
                    </section>
                </div>
                <div className='infoBox history'>
                    <section>
                        <h1 className="infoBoxHeader">History of Lonely Mountain</h1>
                        <p className="historyP">{this.props.history}</p>                        
                        
                    </section>
                </div>
                <img className='logoImg' alt="mountain drawing" src={lonelyMtn}/>              
            </footer>
        );
    }
}