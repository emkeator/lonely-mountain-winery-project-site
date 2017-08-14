import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import $ from 'jquery';

export default class Nav extends Component {

    componentDidMount() {
        $('.hiddenItem').hide();
        $('body').on('click', function(){
            if ($('.hiddenItem').css('display') === 'block') {
                    $('.hiddenItem').fadeOut(700);
                }
        });
    }

    render() {

        return(
            <nav className="navBar">
                <Link to='/' className="navMenuItem" id='home'>Home</Link>
                <div className='hiddenMenuItems'>
                    <Link to='/wines' className="navMenuItem hiddenItem" id='wines'>Wines</Link>
                    <Link to='/events' className="navMenuItem hiddenItem" id='events'>events</Link>
                    <Link to='/visit' className="navMenuItem hiddenItem" id='visit'>visit</Link>
                </div>
                <span className="navMenuItem" id='menu' onClick={ () => {
                        let me = $('.hiddenItem');
                        if(me.css('display') === 'block'){
                            me.fadeOut(700);
                        }else {
                            me.fadeIn(700);
                        }
                    }}>menu</span>                
            </nav>
        );
    }
}