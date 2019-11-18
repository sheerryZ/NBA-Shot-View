import logo from '../assets/images/logo.svg'
import React from 'react'

export function TopNavBar(props){
    return(
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
        </header>
    );
}