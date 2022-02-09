import React from 'react'
import { NavLink } from "react-router-dom"
const Login=(props)=>{
    return(
        <div>
        <h1 className="LogHead">Register</h1>
        <form className="form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        {!props.isregistered  && (<input type="password" placeholder="Confirm Password" />) }
       <NavLink to="/"> <button type="submit" >{props.isregistered ? "Login" : "Register"}</button> </NavLink>
      </form>
      </div>
    
    )
}
export default Login;