import React from 'react';
import '../CSS/App.css';

function Navbar()
{
    return(
        <div id="NavbarDiv">
            <a id="HomeButton" className="NavButton" href="/">Home</a>
            <span>|</span>
            <a id="PortfolioButton" className="NavButton" href="/portfolio">Portfolio</a>
            <span>|</span>
            <a id="AboutButton" className="NavButton" href="/about">About</a>
        </div>
    );
}

export default Navbar;