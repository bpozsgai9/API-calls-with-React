import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
    
    /*setTimeout(() => {
        props.history.push('/about');
    }, 2000);*/
    return(
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a  className="brand-logo">Poke'Times</a>
                <ul className="right">
                    {/* 
                    a sima Link újratötés nélkül 
                    tölti be az oldalt*
                    a Navlink hozzáad egy class="acive"-t a css miatt"
                    */}
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}
/*a Navbar nem tartozik a Route-ba de a 
withRouter() átadja a Router props-ot neki*/
export default withRouter(Navbar);