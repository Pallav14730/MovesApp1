import React from 'react';
import { NavLink } from 'react-router-dom';
import arrow from "./Images/arrow.jpeg"
const arrow_movie_season_1="https://www.terabox.com/web/share/link?surl=wR5VkC2cFhcUa3sDYJK4AA&path=%2FARROW%20SEASON%201"
const arrow_movie_season_2="https://www.terabox.com/web/share/link?surl=-U25eRjwHtD-qbrzjiiIDg&path=%2FARROW%20SEASON%202"
const arrow_movie_season_3="https://www.terabox.com/web/share/link?surl=ClouMelCxMdzzs-AZuJhSQ&path=%2FARROW%20SEASON%203"
const arrow_movie_season_4="https://www.terabox.com/web/share/link?surl=kq_bIhD0MAjAva0aCzfRcw&path=%2FARROW%20SEASON%204"
const arrow_movie_season_5="https://www.terabox.com/web/share/link?surl=ncwury6VzZtEUS8SEiSMLQ&path=%2FARROW%20SEASON%205"
const arrow_movie_season_6="https://www.terabox.com/web/share/link?surl=ynMuBSMjrUeG_dPYiJp1bw&path=%2FARROW%20SEASON%206"
const arrow_movie_season_7="https://www.terabox.com/web/share/link?surl=KYdB7kpVNuXvGL6d7gVtSA&path=%2FARROW%20SEASON%207"
const arrow_movie_season_8="https://www.terabox.com/web/share/link?surl=LRdReCEzKjXPIsN5xMM-CQ&path=%2FARROW%20SEASON%208"
const Arrow=()=>{
    return ( 
    <div className="All">
        <div className="movie1"> 
            <div>
            <NavLink to="/Arrow">
               <img className="image1" src={arrow} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={arrow_movie_season_1} target="blank"><button className="button"><b>Season1</b></button></a> 
            </div> 
           
        </div>

        <div className="movie1"> 
            <div>
            <NavLink to="/Arrow">
               <img className="image1" src={arrow} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={arrow_movie_season_2} target="blank"><button className="button"><b>Season2</b></button></a> 
            </div> 
           
        </div>

        <div className="movie1"> 
            <div>
            <NavLink to="/Arrow">
               <img className="image1" src={arrow} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={arrow_movie_season_3} target="blank"><button className="button"><b>Season3</b></button></a> 
            </div> 
           
        </div>

        <div className="movie1"> 
            <div>
            <NavLink to="/Arrow">
               <img className="image1" src={arrow} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={arrow_movie_season_4} target="blank"><button className="button"><b>Season4</b></button></a> 
            </div> 
           
        </div>
        <div className="movie1"> 
            <div>
            <NavLink to="/Arrow">
               <img className="image1" src={arrow} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={arrow_movie_season_5} target="blank"><button className="button"><b>Season5</b></button></a> 
            </div> 
           
        </div>
        <div className="movie1"> 
            <div>
            <NavLink to="/Arrow">
               <img className="image1" src={arrow} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={arrow_movie_season_6} target="blank"><button className="button"><b>Season6</b></button></a> 
            </div> 
           
        </div>

        <div className="movie1"> 
            <div>
            <NavLink to="/Arrow">
               <img className="image1" src={arrow} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={arrow_movie_season_7} target="blank"><button className="button"><b>Season7</b></button></a> 
            </div> 
           
        </div>


        <div className="movie1"> 
            <div>
            <NavLink to="/Arrow">
               <img className="image1" src={arrow} alt="" />
            </NavLink>
                
            </div>
            <div>
            <a href={arrow_movie_season_8} target="blank"><button className="button"><b>Season8</b></button></a> 
            </div> 
           
        </div>






        </div>

    )
}
export default Arrow;