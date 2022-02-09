import React from "react"
import { NavLink } from "react-router-dom";
import super_girl from "./Images/super_girl.jpeg"
const super_girl_movie_season_1="https://www.terabox.com/web/share/link?surl=q3qMnXifDc4z5wENX_u6lQ&path=%2FSUPERGIRL%20SEASON%201"
const super_girl_movie_season_2="https://www.terabox.com/web/share/link?surl=xHoF1klHbfebSZnYqDCW2g&path=%2FSUPERGIRL%20SEASON%202"
const super_girl_movie_season_3="https://www.terabox.com/web/share/link?surl=Ri4hp8xCBeajfDF1pk1kxw&path=%2FSUPERGIRL%20SEASON%203"
const super_girl_movie_season_4="https://www.terabox.com/web/share/link?surl=44-UajLPd3N6WL03q8dQ7w&path=%2FSUPERGIRL%20SEASON%204"
const super_girl_movie_season_5="https://www.terabox.com/web/share/link?surl=MdzgPV5MuAWvZPxkt_bXNA&path=%2FSUPERGIRL%20SEASON%205"

const SuperGirl=()=>{
    return(

        <div className="All">
        <div className="movie1"> 
            <div>
            <NavLink to="/SuperGirl">
               <img className="image1" src={super_girl} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={super_girl_movie_season_1} target="blank"><button className="button"><b>Season1</b></button></a> 
            </div> 
           
        </div>

        <div className="movie1"> 
            <div>
            <NavLink to="/SuperGirl">
               <img className="image1" src={super_girl} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={super_girl_movie_season_2} target="blank"><button className="button"><b>Season2</b></button></a> 
            </div> 
           
        </div>

        <div className="movie1"> 
            <div>
            <NavLink to="/SuperGirl">
               <img className="image1" src={super_girl} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={super_girl_movie_season_3} target="blank"><button className="button"><b>Season3</b></button></a> 
            </div> 
           
        </div>

        <div className="movie1"> 
            <div>
            <NavLink to="/SuperGirl">
               <img className="image1" src={super_girl} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={super_girl_movie_season_4} target="blank"><button className="button"><b>Season4</b></button></a> 
            </div> 
           
        </div>

        <div className="movie1"> 
            <div>
            <NavLink to="/SuperGirl">
               <img className="image1" src={super_girl} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={super_girl_movie_season_5} target="blank"><button className="button"><b>Season5</b></button></a> 
            </div> 
           
        </div>




        </div>

       
    
   
    


    )

}
export default SuperGirl;