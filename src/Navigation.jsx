import React from "react"

import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <div className="navigation">
            <ul className="Nav_bar">

                <li className="home">
                    <NavLink className="home1" to="/"><b>Home</b></NavLink>
                    
                </li>

                <li className="home">
                    <NavLink className="home1" to="/Movies"><b>Movies</b></NavLink>
                </li>
                <li className="home">
                <NavLink className="home1" to="/Genre"><b>Genre</b></NavLink>
                </li>
                <li className="home">
                <NavLink className="home1" to="/Webseries"><b>Web Series</b></NavLink>
                </li>
                <li className="home">
               <NavLink className="home1" to="/Bollywood"><b>Bollywood</b></NavLink>
                </li>
                <li className="home">
                <NavLink className="home1" to="./Hollywood"><b>Hollywood</b></NavLink>
                </li>
            </ul>
        </div>
    )
}
export default Navigation;