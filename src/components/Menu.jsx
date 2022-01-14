import React from 'react';
import '../App.css';
import logo from '../logo-blue.png';
import search from '../search-solid.svg'

const Menu = () => {
    return (
        <div className='header'>
            <img className='App-logo' src={logo} alt="Naturli Logo" />
            <nav>
                <ul className='nav-bar'>
                    <li className='nav-item'>
                        <form action="">
                            <input type="text" placeholder='Search' className='search-input' />
                            <button type="submit"><img class="search" src={search} /></button>
                        </form>
                    </li>
                    <li className='nav-item'>Products</li>
                    <li className='nav-item'>Recipes</li>
                    <li className='nav-item'>Shop</li>
                    <li className='nav-item'>FAQ</li>
                    <li className='nav-item'>Contact</li>
                    <li className='nav-item'>Find us</li>
                    <li className='nav-item'>About us</li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu;