import React from "react"
import { NavLink } from "react-router-dom";
import hanna from "./Images/hanna.jpeg"
const hanna_season_1=""
const hanna_season_2=""
const hanna_season_3=""


const Hanna=() => {
    return (

        <div className="All">
        <div className="movie1"> 
            <div>
            <NavLink to="/Hanna">
               <img className="image1" src={hanna} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={hanna_season_1} target="blank"><button className="button"><b>Season1</b></button></a> 
            </div> 
           
        </div>

        <div className="movie1"> 
            <div>
            <NavLink to="/Hanna">
               <img className="image1" src={hanna} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={hanna_season_2} target="blank"><button className="button"><b>Season2</b></button></a> 
            </div> 
           
        </div>

        <div className="movie1"> 
            <div>
            <NavLink to="/Hanna">
               <img className="image1" src={hanna} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={hanna_season_3} target="blank"><button className="button"><b>Season3</b></button></a> 
            </div> 
           
        </div>
        </div>

    )
}
export default Hanna;