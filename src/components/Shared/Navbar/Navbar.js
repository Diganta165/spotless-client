import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link ms-5 active" aria-current="page" to="/home">Home</Link>

                        </li>
                        <li class="nav-item">
                            <Link class="nav-link ms-5" to="about-us">About us</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link ms-5" to="/projects" >Projects</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link ms-5" to="/contact" >Contact</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link ms-5" to="/admin" >Admin/Dashboard</Link>
                        </li>
                        <li>
                            {
                                loggedInUser ? loggedInUser.name || loggedInUser.email
                                    : <li></li>
                            }

                        </li>
                        <li class="nav-item">
                            <Link class="nav-link ms-5" to="/login">Login</Link>
                        </li>


                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;