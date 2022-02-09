import React from "react"
import { NavLink } from "react-router-dom";
import gotham from "./Images/gotham.jpeg"
const gotham_season_1=""
const gotham_season_2=""
const gotham_season_3=""
const gotham_season_4=""
const gotham_season_5=""

const Gotham=() => {
    return (

        <div className="All">
        <div className="movie1"> 
            <div>
            <NavLink to="/Gotham">
               <img className="image1" src={gotham} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={gotham_season_1} target="blank"><button className="button"><b>Season1</b></button></a> 
            </div> 
           
        </div>

        <div className="movie1"> 
            <div>
            <NavLink to="/Gotham">
               <img className="image1" src={gotham} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={gotham_season_2} target="blank"><button className="button"><b>Season2</b></button></a> 
            </div> 
           
        </div>

        <div className="movie1"> 
            <div>
            <NavLink to="/Gotham">
               <img className="image1" src={gotham} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={gotham_season_3} target="blank"><button className="button"><b>Season3</b></button></a> 
            </div> 
           
        </div>

        <div className="movie1"> 
            <div>
            <NavLink to="/Gotham">
               <img className="image1" src={gotham} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={gotham_season_4} target="blank"><button className="button"><b>Season4</b></button></a> 
            </div> 
           
        </div>

        <div className="movie1"> 
            <div>
            <NavLink to="/Gotham">
               <img className="image1" src={gotham} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={gotham_season_5} target="blank"><button className="button"><b>Season5</b></button></a> 
            </div> 
           
        </div>
        </div>



    )
}
export default Gotham;