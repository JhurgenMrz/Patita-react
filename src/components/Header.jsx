import React from 'react';
import {Link} from 'react-router-dom';
import Nav from '../components/Nav'

const Header = () => (
    <div className="Header">
        <div className="Header-container">
            <div className="Header-content">
                <div className="Header-logo">
                    <Link to="/">
                    <img  src="https://st2.depositphotos.com/3687485/11386/v/950/depositphotos_113863048-stock-illustration-cartoon-cat-pet-animal-vector.jpg" alt="Patitas" />
                    </Link>
                    <h1>Patitas</h1>
                </div>
                <div className="Header-nav">
                    <Nav/>
                </div>
            </div>

        </div>
    </div>
);

export default Header;