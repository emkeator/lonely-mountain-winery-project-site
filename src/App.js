import React, { Component } from 'react';
import './App.css';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import router from './router';
import redWine from './Components/Events/redWineHex.jpg';
import pikePlace from './Components/Events/pikePlaceHex.jpg';

class App extends Component {

  constructor() {
      super();
      
      this.state = {
        featuredWine: ['Lady of the Rohirrim Red Blend', 
                      45.00, redWine, 
                      'It’s all about the red – cranberry, raspberries, currant, sweet cherries, and red flowers. Well-cooked pot roast, leather, smoked meat, nori, saline, thyme. Fresh acidity. Aged for 36 months, a special blend worthy of kings.'],
        news: ['Lonely Mountain Named Best Seattle-area Winery', 
              '7 // 31 // 17', 
              pikePlace,
              'Seattle Times reports that Lonely Mountain Winery has recently been ranked #1 in the area by Wine Spectator Magazine.'],
        contact: ['555-555-5555', 
                  'erebor@lonelymounta.in',
                  '3 Rivendell Road, Dale, WA 98061'],
        history: 'Lonely Mountain Winery was founded in the early 1920\'s by Elisabeth Keller, as The Keller Winery. Later, it was rechristened as Lonely Mountain Winery in homage to the nearby peak in the Cascade Range, and the novels of JRR Tolkein. The Lonely Mountain Winery consistently ranks among the best in the Seattle Area, and has a special relationship with several vineyards in New Zealand.'
                  
      }
  }
  
  render() {

    return (
      <div className="app">
        <Nav /> 
        {router}
        <Footer featuredWine={this.state.featuredWine} news={this.state.news} contact={this.state.contact} history={this.state.history}/>
      </div>
    );
  }
}

export default App;
