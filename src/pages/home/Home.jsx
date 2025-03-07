import React from 'react';
import './Home.css'
import logo from '../../assets/logo-white.png'


function Home() {

    return (
        <>
            <h1 className="title">Bij Blogventure geloven we in de kracht van woorden*</h1>
            <img className='home-logo' src={logo} alt='logo'/>
        </>
    );
}

export default Home;