import React from 'react'
import { NavLink } from "react-router-dom";
import got from "./Images/got.jpeg"
const got_season_1=""
const got_season_2=""
const got_season_3=""
const got_season_4=""
const got_season_5=""
const got_season_6=""
const got_season_7=""
const got_season_8=""
const Got=()=>{
    return(
        <div className="All">
        <div className="movie1"> 
            <div>
            <NavLink to="/Got">
               <img className="image1" src={got} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={got_season_1} target="blank"><button className="button"><b>Season1</b></button></a> 
            </div> 
           
        </div>

        <div className="movie1"> 
            <div>
            <NavLink to="/Got">
               <img className="image1" src={got} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={got_season_2} target="blank"><button className="button"><b>Season2</b></button></a> 
            </div> 
           
        </div>

        <div className="movie1"> 
            <div>
            <NavLink to="/Got">
               <img className="image1" src={got} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={got_season_3} target="blank"><button className="button"><b>Season3</b></button></a> 
            </div> 
           
        </div>

        <div className="movie1"> 
            <div>
            <NavLink to="/Got">
               <img className="image1" src={got} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={got_season_4} target="blank"><button className="button"><b>Season4</b></button></a> 
            </div> 
           
        </div>

        <div className="movie1"> 
            <div>
            <NavLink to="/Got">
               <img className="image1" src={got} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={got_season_5} target="blank"><button className="button"><b>Season5</b></button></a> 
            </div> 
           
        </div>

        <div className="movie1"> 
            <div>
            <NavLink to="/Got">
               <img className="image1" src={got} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={got_season_6} target="blank"><button className="button"><b>Season6</b></button></a> 
            </div> 
           
        </div>

        <div className="movie1"> 
            <div>
            <NavLink to="/Got">
               <img className="image1" src={got} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={got_season_7} target="blank"><button className="button"><b>Season7</b></button></a> 
            </div> 
           
        </div>

        <div className="movie1"> 
            <div>
            <NavLink to="/Got">
               <img className="image1" src={got} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={got_season_8} target="blank"><button className="button"><b>Season8</b></button></a> 
            </div> 
           
        </div>
        </div>

    )
}
export default Got;