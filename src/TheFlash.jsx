import React from "react"
import { NavLink} from "react-router-dom"
import the_flash from "./Images/the_flash.jpeg"
const the_flash_movie_season_1=""
const the_flash_movie_season_2=""
const the_flash_movie_season_3=""
const the_flash_movie_season_4=""
const the_flash_movie_season_5=""
const the_flash_movie_season_6=""
const the_flash_movie_season_7=""
const the_flash_movie_season_8=""
const TheFlash=() => {
    return(

        <div className="All">
        <div className="movie1"> 
            <div>
            <NavLink to="/TheFlash">
               <img className="image1" src={the_flash} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={the_flash_movie_season_1} target="blank"><button className="button"><b>Season1</b></button></a> 
            </div> 
           
        </div>

        <div className="movie1"> 
            <div>
            <NavLink to="/TheFlash">
               <img className="image1" src={the_flash} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={the_flash_movie_season_2} target="blank"><button className="button"><b>Season2</b></button></a> 
            </div> 
           
        </div>

        <div className="movie1"> 
            <div>
            <NavLink to="/TheFlash">
               <img className="image1" src={the_flash} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={the_flash_movie_season_3} target="blank"><button className="button"><b>Season3</b></button></a> 
            </div> 
           
        </div>

        <div className="movie1"> 
            <div>
            <NavLink to="/TheFlash">
               <img className="image1" src={the_flash} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={the_flash_movie_season_4} target="blank"><button className="button"><b>Season4</b></button></a> 
            </div> 
           
        </div>

        <div className="movie1"> 
            <div>
            <NavLink to="/TheFlash">
               <img className="image1" src={the_flash} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={the_flash_movie_season_5} target="blank"><button className="button"><b>Season5</b></button></a> 
            </div> 
           
        </div>

        <div className="movie1"> 
            <div>
            <NavLink to="/TheFlash">
               <img className="image1" src={the_flash} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={the_flash_movie_season_6} target="blank"><button className="button"><b>Season6</b></button></a> 
            </div> 
           
        </div>

        <div className="movie1"> 
            <div>
            <NavLink to="/TheFlash">
               <img className="image1" src={the_flash} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={the_flash_movie_season_7} target="blank"><button className="button"><b>Season7</b></button></a> 
            </div> 
           
        </div>

        <div className="movie1"> 
            <div>
            <NavLink to="/TheFlash">
               <img className="image1" src={the_flash} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={the_flash_movie_season_8} target="blank"><button className="button"><b>Season8</b></button></a> 
            </div> 
           
        </div>

        


        </div>

    )
}
export default TheFlash;