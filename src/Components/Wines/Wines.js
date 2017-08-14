import React, {Component} from 'react';
import dragon from './../../dragonWhite.png';
import $ from 'jquery';

export default class Wines extends Component {
    constructor() {
        super();
        
        this.state = {
            wines: [
                {name: 'Mirkwood Malbec',
                price: 35.00,
                description: 'Aged in oak for eighteen months in the finest French oak barrels, this Bordeaux varietal is smooth and deep and dark with rich, spicy, complex boysenberry and rasberry flavors. The aromatic is chocolate, the finish divine!'},
                {name: 'Lothlorien Pinot Grigio',
                price: 32.00,
                description: 'Tasting Notes: yellow apple-and-citrus like flavors; unoaked and light bodied. Some new oak which adds hazelnut and baking spice notes. Medium to medium plus bodied. Aged for 18 months in new oak casks for spicy flavor.'},
                {name: 'Caradhras Cabernet',
                price: 38.00,
                description: 'Tasting Notes: A combination of red and black fruit.  Intense mid palate concentration. Floral nose. Pencil, tobacco, cedar and integrated herbal notes. A bit of vanilla and baking spice from French oak. Ripe, but elegant.'},
                {name: 'Rivendell Rosé',
                price: 30.00,
                description: 'On the nose, there are notes of summer strawberries and red cherries; after some time, the rosé considerably opens up on the palate, with flavors of blood orange, dried cranberries, red grapefruit, and dried sage and thyme'},
                {name: 'Shire Shiraz',
                price: 35.00,
                description: 'Tasting Notes: Smoked meat, intense core of strawberry, raspberry, blueberry, almost black fruit, mineral, black olive, pepper. Granite, stone, and cement. Some green herbs. Medium to medium + bodied with noticeable tannins.'},
                {name: 'Lady of the Rohirrim Red Blend',
                price: 45.00,
                description: 'It’s all about the red – cranberry, raspberries, currant, sweet cherries, and red flowers. Well-cooked pot roast, leather, smoked meat, nori, saline, thyme. Fresh acidity. Aged for 36 months, a special blend worthy of kings.'}
            ],
            cart: {
                productsInCart: [],
                quantityInCart: [],
                cartTotal: 0
            }
            
        }
    }

    addProduct(product) {
        let x = this.state.cart.productsInCart.indexOf(product.name);
        let prods = this.state.cart.productsInCart.slice(0);
        let quant = this.state.cart.quantityInCart.slice(0);
        let sum = this.state.cart.cartTotal;
        
        if (x > -1) {
            quant[x] += 1;
            sum += product.price;
            
        } else {
            prods.push(product.name);
            quant.push(1);
            sum += product.price;                       
        }
        this.setState({
            cart: {
                productsInCart: prods,
                quantityInCart: quant,
                cartTotal: sum
            }
        });
    }

    checkout() {
        this.setState({
            cart: {
                productsInCart: [],
                quantityInCart: [],
                cartTotal: 0
            }
        });
        alert('Sorry, this is only a class project, not a real site.'+
        ' But hey, here\'s a guide to real wineries near Seattle: '+
        'https://www.thrillist.com/drink/seattle/a-guide-to-the-best-washington-wineries');
    }

    componentDidMount() {
        $('body').scrollTop(0);
        
    }

    render() {

        
        return(
            <div>
                <header className="wineHeader">Our Wines<img src={dragon} alt='dragon'/></header>
                <section className="wineContainer">
                    {this.state.wines.map((wine, index)=>{
                        return (
                            <div key={index} className="wineProduct">
                                <h1>{wine.name}</h1>
                                <p>{wine.description}</p>
                                <p>${wine.price}.00</p>
                                <button disabled={false} onClick={()=>this.addProduct(wine)}>Collect</button>
                            </div>
                        )
                    })}
                    <div className="cart">
                        <h1>Total</h1>
                        <h1>${this.state.cart.cartTotal}.00</h1>
                        <button disabled={this.state.cart.cartTotal === 0} 
                                onClick={()=> this.checkout()}>Checkout</button>
                    </div>
                </section>
            </div>
        );
    }
}