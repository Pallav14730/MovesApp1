import React from "react"
import { AiFillBulb } from "react-icons/ai"
import { NavLink } from "react-router-dom"


function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode")

}
const mode = myFunction

const Footer = () => {
    return (
        <div className="Nav-bar">
            <li className="front"> <a class="logo-title"><b>
                Movies
            </b></a></li>
            <li className="front"><input className="input" type="search" placeholder="Search" /></li>
            <li className="front"><button className="button-sea">Search</button></li>
            <li className="front"><AiFillBulb onClick={mode} /></li>
            <li className="front"><NavLink className="login-page" to="/Sign">Log in/Sign Up</NavLink></li>
        </div>

    )
}
export default Footer;
