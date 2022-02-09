import React from "react"
import Webseries from "./Webseries"
// import { NavLink } from "react-router-dom";
import terminator from "./Images/terminator.jpeg"
import civil_war from "./Images/civil_war.jpeg"
import first_avenger from "./Images/first_avenger.jpeg"
import matrix from "./Images/matrix.jpeg"
import parasite from "./Images/parasite.jpeg"
import joker from "./Images/joker.jpeg"
import lord_of_rings from "./Images/lord_of_rings.jpeg"
import inception from "./Images/inception.jpeg"
import good_hunting from "./Images/good_hunting.jpeg"
import fight_club from "./Images/fight_club.jpeg"
import coco from "./Images/coco.jpeg"
import before_i_go from "./Images/before_i_go.jpeg"
import tadap from "./Images/tadap.jpeg"
import matrix_resurrection from "./Images/matrix_resurrection.jpeg"
const civil_war_movie = "https://www.terabox.com/web/share/videoPlay?surl=S-iU9iAh9GCCz9dcZlK5IA&dir=%2FCAPTAIN%20AMERICA%20CIVIL%20WAR&fsid=1055474997958669&fileName=Captain.America.Civil.War.2016.720p.Hindi.English.Themoviesflix.us.com.mkv&page=1";
const first_avenger_movie = "https://www.terabox.com/web/share/videoPlay?surl=_ESGcqhvBLqYSpEVlPCy0g&dir=%2FCAPTAIN%20AMERICA%20THE%20FIRST%20AVENGER&fsid=837899443149312&fileName=Captain.America.First.Avenger.2011.720p.Hindi.English.Themoviesflix.us.com.mkv&page=1"
const terminator_movie="https://dood.so/d/3uiav7pcngdg"
const parasite_movie="https://dood.so/d/yy10s14lsgtl"
const matrix_movie="https://dood.so/d/f6je810fl6fm"
const lord_of_rings_movie="https://dood.so/d/gz4tbwe4qgeg"
const joker_movie="https://dood.so/d/nwdmyqzybn4c"
const inception_movie ="https://dood.so/d/rca4fs0ym7jg"
const good_hunting_movie="https://dood.so/d/nncp1bzm8bi9"
const fight_club_movie="https://dood.so/d/mrxzttlhu7h1"
const coco_movie="https://dood.so/d/mfar7lfnlhpi"
const before_i_go_movie="https://dood.so/d/op6ebw0dsh5s"
const tadap_movie ="https://dood.so/d/d2rf1it9hlxm"
const matrix_resurrection_movie ="https://dood.so/d/v45qsteqynea"
const Hollywood = () => {
    return (
        <div className="All">
            <div className="movie1">
                <div>
                    <img className="image1" src={civil_war} alt="" />
                </div>
                <div>
                    <a href={civil_war_movie} target="blank"><button className="button">Play</button></a>
                </div>  
            </div>

            <div className="movie1"> 
            <div>
                <img className="image1" src={first_avenger} alt="" />
            </div>
            <div>
            <a href={first_avenger_movie} target="blank"><button className="button">Play</button></a> 
            </div> 
            
        </div>

        <div className="movie1"> 
            <div>
                <img className="image1" src={terminator} alt="" />
            </div>
            <div>
            <a href={terminator_movie} target="blank"><button className="button">Play</button></a> 
            </div> 
            
        </div>


        <div className="movie1"> 
            <div>
                <img className="image1" src={parasite} alt="" />
            </div>
            <div>
            <a href={parasite_movie} target="blank"><button className="button">Play</button></a> 
            </div> 
            
        </div>


        <div className="movie1"> 
            <div>
                <img className="image1" src={matrix} alt="" />
            </div>
            <div>
            <a href={matrix_movie} target="blank"><button className="button">Play</button></a> 
            </div> 
            
        </div>


        <div className="movie1"> 
            <div>
                <img className="image1" src={lord_of_rings} alt="" />
            </div>
            <div>
            <a href={lord_of_rings_movie} target="blank"><button className="button">Play</button></a> 
            </div> 
            
        </div>


        <div className="movie1"> 
            <div>
                <img className="image1" src={joker} alt="" />
            </div>
            <div>
            <a href={joker_movie} target="blank"><button className="button">Play</button></a> 
            </div> 
            
        </div>


        <div className="movie1"> 
            <div>
                <img className="image1" src={inception} alt="" />
            </div>
            <div>
            <a href={inception_movie} target="blank"><button className="button">Play</button></a> 
            </div> 
            
        </div>


        <div className="movie1"> 
            <div>
                <img className="image1" src={good_hunting} alt="" />
            </div>
            <div>
            <a href={good_hunting_movie} target="blank"><button className="button">Play</button></a> 
            </div> 
            
        </div>


        <div className="movie1"> 
            <div>
                <img className="image1" src={fight_club} alt="" />
            </div>
            <div>
            <a href={fight_club_movie} target="blank"><button className="button">Play</button></a> 
            </div> 
            
        </div>


        <div className="movie1"> 
            <div>
                <img className="image1" src={coco} alt="" />
            </div>
            <div>
            <a href={coco_movie} target="blank"><button className="button">Play</button></a> 
            </div> 
            
        </div>

        <div className="movie1"> 
            <div>
                <img className="image1" src={before_i_go} alt="" />
            </div>
            <div>
            <a href={before_i_go_movie} target="blank"><button className="button">Play</button></a> 
            </div> 
            
        </div>


        <div className="movie1"> 
            <div>
                <img className="image1" src={tadap} alt="" />
            </div>
            <div>
            <a href={tadap_movie} target="blank"><button className="button">Play</button></a> 
            </div> 
            
        </div>

        <div className="movie1"> 
            <div>
                <img className="image1" src={matrix_resurrection} alt="" />
            </div>
            <div>
            <a href={matrix_resurrection_movie} target="blank"><button className="button">Play</button></a> 
            </div> 
            
        </div>


        <Webseries />










        </div>

    )
}
export default Hollywood; 