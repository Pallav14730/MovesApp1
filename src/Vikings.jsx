import React from "react"
import { NavLink } from "react-router-dom";
import vikings from "./Images/vikings.jpeg"
const vikings_season_1=""
const vikings_season_2=""
const vikings_season_3=""
const vikings_season_4=""
const vikings_season_5=""
const vikings_season_6=""

const Vikings =() => {
    return (

        <div className="All">
        <div className="movie1"> 
            <div>
            <NavLink to="/Vikings">
               <img className="image1" src={vikings} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={vikings_season_1} target="blank"><button className="button"><b>Season1</b></button></a> 
            </div> 
           
        </div>

        <div className="movie1"> 
            <div>
            <NavLink to="/Vikings">
               <img className="image1" src={vikings} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={vikings_season_2} target="blank"><button className="button"><b>Season2</b></button></a> 
            </div> 
           
        </div>

        <div className="movie1"> 
            <div>
            <NavLink to="/Vikings">
               <img className="image1" src={vikings} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={vikings_season_3} target="blank"><button className="button"><b>Season3</b></button></a> 
            </div> 
           
        </div>

        <div className="movie1"> 
            <div>
            <NavLink to="/Vikings">
               <img className="image1" src={vikings} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={vikings_season_4} target="blank"><button className="button"><b>Season4</b></button></a> 
            </div> 
           
        </div>

        <div className="movie1"> 
            <div>
            <NavLink to="/Vikings">
               <img className="image1" src={vikings} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={vikings_season_5} target="blank"><button className="button"><b>Season5</b></button></a> 
            </div> 
           
        </div>

        <div className="movie1"> 
            <div>
            <NavLink to="/Vikings">
               <img className="image1" src={vikings} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={vikings_season_6} target="blank"><button className="button"><b>Season6</b></button></a> 
            </div> 
           
        </div>
        </div>

    )
}
export default Vikings;
