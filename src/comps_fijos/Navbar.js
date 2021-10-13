import React, { useState, useEffect } from 'react';
import { useLocation, Link } from "react-router-dom";
import blueLong from "../images/blue_long_TMDB.svg"
import ReactDOM from 'react-dom';

function Navbar() {

    /* Viewport size conditional rendering  */
    const [isDesktop, setDesktop] = useState(window.innerWidth >= 768);
    const updateMedia = () => {
        setDesktop(window.innerWidth >= 768);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    /* URL location */
    const location = useLocation();
        
    return (
        <>
            <header className="main-header mb-5 pb-5">
                {!isDesktop ? "" : <img href={blueLong} />}

                {isDesktop ? <div className="container">
                    <hr/>
                </div> : "" }
                
                <nav className="navbar navbar-expand-md navbar-light">
                    {isDesktop ? "" : <Link className="navbar-brand text-uppercase" to="/">
                        Diana B.P
                    </Link>}

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse mt-3" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto">

                            <li className={"nav-item " + (location.pathname === "/" ? "active-tab" : "")}>
                                <Link to="/" className="nav-link" >Home</Link>
                            </li>

                            <li className={"nav-item " + (location.pathname === "/movies" ? "active-tab" : "")}>
                                <Link to="/movies" className="nav-link" >Movies</Link>
                            </li>

                            <li className={"nav-item " + (location.pathname === "/tv-shows" ? "active-tab" : "")}>
                                <Link to="/tv-shows" className="nav-link" >TV Shows</Link>
                            </li>

                            <li className={"nav-item " + (location.pathname === "/people" ? "active-tab" : "")}>
                                <Link to="/people" className="nav-link" >People</Link>
                            </li>

                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Navbar;