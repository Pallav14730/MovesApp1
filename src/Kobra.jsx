import React from "react"
import { NavLink } from "react-router-dom";
import kobra from "./Images/kobra.jpeg"
const kobra_season_1=""
const kobra_season_2=""
const kobra_season_3=""
const kobra_season_4=""
const Kobra=()=>{
    return (

        <div className="All">
        <div className="movie1"> 
            <div>
            <NavLink to="/Kobra">
               <img className="image1" src={kobra} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={kobra_season_1} target="blank"><button className="button"><b>Season1</b></button></a> 
            </div> 
           
        </div>


        <div className="movie1"> 
            <div>
            <NavLink to="/Kobra">
               <img className="image1" src={kobra} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={kobra_season_2} target="blank"><button className="button"><b>Season2</b></button></a> 
            </div> 
           
        </div>


        <div className="movie1"> 
            <div>
            <NavLink to="/Kobra">
               <img className="image1" src={kobra} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={kobra_season_3} target="blank"><button className="button"><b>Season3</b></button></a> 
            </div> 
           
        </div>


        <div className="movie1"> 
            <div>
            <NavLink to="/Kobra">
               <img className="image1" src={kobra} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={kobra_season_4} target="blank"><button className="button"><b>Season4</b></button></a> 
            </div> 
           
        </div>
        </div>

    )
}
export default Kobra;