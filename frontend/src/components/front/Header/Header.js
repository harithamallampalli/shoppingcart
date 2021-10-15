import React from 'react';
import {Link} from "react-router-dom";
import "./Header.css";

const Header = ({cartItems}) => {
    return (
        <div className="header">
        <div>
            <h1>
                <Link to="/" className="Logo">
                ONLINE SHOPPING CART
                </Link>
            </h1>
            </div>
            <div className="header-links">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>

                <ul>
                    <li>
                        <Link to="/signin">signin</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/signup">signup</Link>
                    </li>
                </ul>
                
                
                
            </div>
            </div>
        );
};
export default Header;