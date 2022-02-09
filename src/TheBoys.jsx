import React from 'react'
import { NavLink} from "react-router-dom"
import the_boys from "./Images/the_boys.jpeg"
const the_boys_movie_season_1="https://www.terabox.com/web/share/link?surl=VsXk_ViV8Jie9ioYgzJr3A&path=%2FTHE%20BOYS%20SEASON%201"
const the_boys_movie_season_2="https://www.terabox.com/web/share/link?surl=-KtM4_6O2BGcCB0XeqLKWg&path=%2FTHE%20BOYS%20SEASON%202"

const TheBoys=()=>{
    return (

        <div className="All">
        <div className="movie1"> 
            <div>
            <NavLink to="/TheBoys">
               <img className="image1" src={the_boys} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={the_boys_movie_season_1} target="blank"><button className="button"><b>Season1</b></button></a> 
            </div> 
           
        </div>

        <div className="movie1"> 
            <div>
            <NavLink to="/TheBoys">
               <img className="image1" src={the_boys} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={the_boys_movie_season_2} target="blank"><button className="button"><b>Season2</b></button></a> 
            </div> 
           
        </div>
        </div>

    )
}
export default TheBoys;