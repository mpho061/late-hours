import React from 'react';
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Cart from './Cart';
import Shop from './Shop';
import SignIn from './SignIn';
import SignUp from './SignUp';
const NaviBar = () => {
    return (
        <Router>
            <header className='header'>
                <nav className='navbar'>
                    <a className='nav-logo'>Logo</a>
                    <ul className='menu-nav'>
                        <Link to="/" className='Link-nav'>Home</Link>
                        <Link to="/cart" className='Link-nav'>Cart</Link>
                        <Link to="signUp" className='Link-nav'>Sign Up</Link>
                         
                    </ul>
                </nav>
            </header>
            <Switch>
                <Route exact path="/">
                    <Shop></Shop>
                </Route>
                <Route path="/cart">
                    <Cart></Cart>
                </Route>          
                <Route path="/signUp">
                    <SignUp></SignUp>
                </Route>
                <Route path="/signIn">
                    <SignIn></SignIn>
                </Route>
               
            </Switch>
        </Router>

    );
};

export default NaviBar;