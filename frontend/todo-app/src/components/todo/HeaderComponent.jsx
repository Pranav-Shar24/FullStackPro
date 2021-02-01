import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthenticationService from './AuthenticationService.js';



class HeaderComponent extends Component {
    render() {

        const isUserLoggedin = AuthenticationService.isUserLoggedIn();
        console.log("check:", isUserLoggedin)
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a className="navbar-brand" href="https://www.linkedin.com/in/sharmapranav92/">Pranav Sharma</a></div>

                    <ul className="navbar-nav">

                        {isUserLoggedin && <li><Link className="nav-link" to={{ pathname: '/welcome/pranShar' }}>Home</Link></li>}
                        {isUserLoggedin && <li><Link className="nav-link" to={{ pathname: '/todos' }}>Todos</Link></li>}


                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">

                        {!isUserLoggedin && <li><Link className="nav-link" to={{ pathname: '/login' }}>Login</Link></li>}
                        {isUserLoggedin && <li><Link className="nav-link" to={{ pathname: '/logout' }} onClick={AuthenticationService.logout}>Logout</Link></li>}



                    </ul>

                </nav >

            </header >
        );
    }
}
export default HeaderComponent