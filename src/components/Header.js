import React, {
    Component
} from 'react';

import EmptyCart from '../empty-states/EmptyCart';

class Header extends Component{     
    constructor(props){
        super(props);
        this.state = {
            showCart: false,
            cart: this.props.cartItems,
            mobileSearch: false
        };
    }
    render() {
        return (
            <header>
                <div className="container">
                    <div className="brand">
                        <img className="logo" src="https://res.cloudinary.com/sivadass/image/upload/v1493547373/dummy-logo/Veggy.png" alt="Veggy Brand Logo"/>
                    </div>
                        
                    <div className="search">
                       
                    </div>

                     
                </div>
            </header>
        )
    }
}
export default Header;