import React from 'react';
import '../CSS/App.css';
import Navbar from '../Components/Navbar';

function HomePage()
{
    return(
        <div id="HomePage">
            <body>
                <Navbar/>
                <h1>Home!</h1>
            </body>
        </div>
    );
}

export default HomePage;