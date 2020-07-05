import React from 'react';
import { BrowserRouter, Link, Switch, Route, withRouter } from 'react-router-dom';

import './SideDrawer.css';
const sideDrawer = props => (
    <nav>
        <ul className='side-drawer'>
            <li>
                <Link to='/'>בית</Link>
            </li>
            <li>
                <Link to='/Gallery'>גלריה</Link>
            </li>
            <li>
                <Link to='/PriceList'>מחירון</Link>
            </li>
            <li>
                <Link to='/Products'>המוצרים שלנו</Link>
            </li>
            <li>
                <Link to="/SignUp" className="nav-link"> הרשמה </Link>
                <Link to="/SignIn" className="nav-link">כניסה</Link>
            </li>
        </ul>
    </nav>
)

export default sideDrawer