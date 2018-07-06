import React, {
    Component
} from 'react';

class Footer extends Component{
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <footer>
            <p className="footer-links">
                <a href="https://github.com/sivadass/react-shopping-cart" target="_blank">View Source on Github</a>
                <span>  /  </span>
                <a href="mailto:tuanitpro@gmail.com" target="_blank">Need any help?</a>
                <span>  /  </span>
                <a href="https://twitter.com/tuanitpro" target="_blank">Say Hi on Twitter</a>
                <span>  /  </span>
                <a href="https://tuanitpro.com" target="_blank">Read My Blog</a>
            </p>
            <p>&copy; 2018 <strong>Veggy</strong> - Organic Green Store</p>
        </footer>
        )
    }
}
export default Footer;