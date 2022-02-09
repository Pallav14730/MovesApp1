import React from 'react';
import { NavLink} from "react-router-dom";
import robot from "./Images/robot.jpeg"
const robot_movie_season_1="https://www.terabox.com/web/share/link?surl=Y-LMQQ1_BHYwh8A4cn2_ig&path=%2FMR%20ROBOT%20SEASON%201"
const robot_movie_season_2="https://www.terabox.com/web/share/link?surl=yO2ss2_dIA5RcFwzWG0Qkw&path=%2FMR%20ROBOT%20SEASON%202"
const robot_movie_season_3="https://www.terabox.com/web/share/link?surl=PIwc4h8MMq6PxOcu5WIDzA&path=%2FMR%20ROBOT%20SEASON%203"
const robot_movie_season_4="https://www.terabox.com/web/share/link?surl=-0Zhgte90e2TfdF72WDHuA&path=%2FMR%20ROBOT%20SEASON%204"
const Robot=()=>{
    return (
        <div className="All">
        <div className="movie1"> 
            <div>
            <NavLink to="/Robot">
               <img className="image1" src={robot} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={robot_movie_season_1} target="blank"><button className="button"><b>Season1</b></button></a> 
            </div> 
           
        </div>

        <div className="movie1"> 
            <div>
            <NavLink to="/Robot">
               <img className="image1" src={robot} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={robot_movie_season_2} target="blank"><button className="button"><b>Season2</b></button></a> 
            </div> 
           
        </div>

        <div className="movie1"> 
            <div>
            <NavLink to="/Robot">
               <img className="image1" src={robot} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={robot_movie_season_3} target="blank"><button className="button"><b>Season3</b></button></a> 
            </div> 
           
        </div>

        <div className="movie1"> 
            <div>
            <NavLink to="/Robot">
               <img className="image1" src={robot} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={robot_movie_season_4} target="blank"><button className="button"><b>Season4</b></button></a> 
            </div> 
           
        </div>
        </div>

    )
}
export default Robot;