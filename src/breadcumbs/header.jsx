import layout from './css/header.css';

import Carrito from './../img/categorias/carrito.svg';
import logo from './../img/logo.svg'
import { Link } from 'react-router-dom';
import { FcMenu } from 'react-icons/fc';
import React, { useEffect } from 'react';
import { ToggleClass } from './../js/ToggleClass';

const Header = () => {
    useEffect(() => {
        window.addEventListener("scroll", isFixed);
    })

    const isFixed = () => {
        let header = document.querySelector('.header');
        const scrollTop = window.scrollY;

        if (scrollTop >= 100) {
            header.classList.add('fixed')
        }
        else {
            if (header.classList.contains('fixed')) {
                header.classList.remove('fixed');
            }
        }
    }

    return (
        <div className="header">

            <div className="header-wrapper">
                <div className="menu-mobile" onClick={ToggleClass}>
                    <FcMenu />

                </div>
                <div className="menu-mobile-wrapper">
                    <div className="menu-mobile side-bar" id="menuMobile">
                        <div className="mobile-wrapper">
                            <div className='mobile-links'>
                                <ul>
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/catalogo">Catalogo </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <Link to="/" className="logo">
                    <img src={logo} alt="" />
                </Link>
                <div className="content">

                    <div className="links">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li id="drop-down" class="dropdown-catalogo">
                                <Link to="/catalogo">Catalogo</Link>
                                <ul>
                                    <li>
                                        <a href="/">Techos</a>
                                    </li>
                                    <li>
                                        <a href="/">Muebles de hogar</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a>Page 1</a>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className="carrito">
                    <img src={Carrito} alt="" />
                </div>
            </div>

        </div>
    )
}


export default Header;