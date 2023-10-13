import React from 'react'
import logo from './images/Logo.png'
function Header() {
    return (
        <div>
            <div>
                <nav class="navbar navbar-expand-sm bg-light navbar-light">
                    <div class="container-fluid ">
                        <a class="navbar-brand ms-5" href="#"><img src={logo} alt='Jadoo' /></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-end " id="collapsibleNavbar">
                            <ul class="navbar-nav w-75 d-flex justify-content-around">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Destination</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Hotels</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Flights</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Bookings</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Login</a>
                                </li>
                                <li class="nav-item ">
                                    <button className='btn btn-outline-secondary' style={{ padding: '0' }} > <a class="nav-link" href="#">Sign up</a></button>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">EN</a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Hindi</a></li>
                                        <li><a class="dropdown-item" href="#">Spanish</a></li>
                                        <li><a class="dropdown-item" href="#">Tamil</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header