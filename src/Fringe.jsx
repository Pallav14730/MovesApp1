import React from "react"
import { NavLink } from "react-router-dom";
import fringe from "./Images/fringe.jpeg"
const fringe_season_1=""
const fringe_season_2=""
const fringe_season_3=""
const fringe_season_4=""
const fringe_season_5=""
const Fringe=()=>{
    return (

        <div className="All">
        <div className="movie1"> 
            <div>
            <NavLink to="/Fringe">
               <img className="image1" src={fringe} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={fringe_season_1} target="blank"><button className="button"><b>Season1</b></button></a> 
            </div> 
           
        </div>

        <div className="movie1"> 
            <div>
            <NavLink to="/Fringe">
               <img className="image1" src={fringe} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={fringe_season_2} target="blank"><button className="button"><b>Season2</b></button></a> 
            </div> 
           
        </div>

        <div className="movie1"> 
            <div>
            <NavLink to="/Fringe">
               <img className="image1" src={fringe} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={fringe_season_3} target="blank"><button className="button"><b>Season3</b></button></a> 
            </div> 
           
        </div>

        <div className="movie1"> 
            <div>
            <NavLink to="/Fringe">
               <img className="image1" src={fringe} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={fringe_season_4} target="blank"><button className="button"><b>Season5</b></button></a> 
            </div> 
           
        </div>


        <div className="movie1"> 
            <div>
            <NavLink to="/Fringe">
               <img className="image1" src={fringe} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={fringe_season_5} target="blank"><button className="button"><b>Season5</b></button></a> 
            </div> 
           
        </div>
        </div>

    )

}
export default Fringe;