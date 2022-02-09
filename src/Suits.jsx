import React from "react"
import { NavLink } from "react-router-dom";
import suits from "./Images/suits.jpeg"
const suits_season_1=""
const suits_season_2=""
const suits_season_3=""
const suits_season_4=""
const suits_season_5=""
const suits_season_6=""
const suits_season_7=""
const suits_season_8=""
const suits_season_9=""
const Suits=() => {
    return (

        <div className="All">
        <div className="movie1"> 
            <div>
            <NavLink to="/Suits">
               <img className="image1" src={suits} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={suits_season_1} target="blank"><button className="button"><b>Season1</b></button></a> 
            </div> 
           
        </div>

        <div className="movie1"> 
            <div>
            <NavLink to="/Suits">
               <img className="image1" src={suits} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={suits_season_2} target="blank"><button className="button"><b>Season2</b></button></a> 
            </div> 
           
        </div>

        <div className="movie1"> 
            <div>
            <NavLink to="/Suits">
               <img className="image1" src={suits} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={suits_season_3} target="blank"><button className="button"><b>Season3</b></button></a> 
            </div> 
           
        </div>

        <div className="movie1"> 
            <div>
            <NavLink to="/Suits">
               <img className="image1" src={suits} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={suits_season_4} target="blank"><button className="button"><b>Season4</b></button></a> 
            </div> 
           
        </div>

        <div className="movie1"> 
            <div>
            <NavLink to="/Suits">
               <img className="image1" src={suits} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={suits_season_5} target="blank"><button className="button"><b>Season5</b></button></a> 
            </div> 
           
        </div>

        <div className="movie1"> 
            <div>
            <NavLink to="/Suits">
               <img className="image1" src={suits} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={suits_season_6} target="blank"><button className="button"><b>Season6</b></button></a> 
            </div> 
           
        </div>

        <div className="movie1"> 
            <div>
            <NavLink to="/Suits">
               <img className="image1" src={suits} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={suits_season_7} target="blank"><button className="button"><b>Season7</b></button></a> 
            </div> 
           
        </div>

        <div className="movie1"> 
            <div>
            <NavLink to="/Suits">
               <img className="image1" src={suits} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={suits_season_8} target="blank"><button className="button"><b>Season8</b></button></a> 
            </div> 
           
        </div>

        <div className="movie1"> 
            <div>
            <NavLink to="/Suits">
               <img className="image1" src={suits} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={suits_season_9} target="blank"><button className="button"><b>Season9</b></button></a> 
            </div> 
           
        </div>
        </div>

    )
}
export default Suits;