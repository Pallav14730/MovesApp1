import React from "react"
import Webseries from "./Webseries"
// import { NavLink } from "react-router-dom";
import taxi_driver from "./Images/taxi_driver.jpeg"
import shutter_island from "./Images/shutter_island.jpeg"
import the_secret from "./Images/the_secret.jpeg"
import the_hunt from "./Images/the_hunt.jpeg"
import the_father from "./Images/the_father.jpeg"
import the_prisoners from "./Images/the_prisoners.jpeg"
import kill_bill from "./Images/kill_bill.jpeg"
import wolf_street from "./Images/wolf_street.jpeg"
import gone_girl from "./Images/gone_girl.jpeg"
import no_country from "./Images/no_country.jpeg"
import departed from "./Images/departed.jpeg"
import Incendies from "./Images/Incendies.jpeg"
import interstellar from "./Images/interstellar.jpeg"
import finding_nemo from "./Images/finding_nemo.jpeg"
const taxi_driver_movie="https://dood.so/d/vg7hlzz85zt4"
const wolf_street_movie="https://dood.so/d/f9zcjaotsazl"
const shutter_island_movie="https://dood.so/d/ppcq5g2niilm"
const the_secret_movie ="https://dood.so/d/bdqfv3wcemml"
const the_hunt_movie ="https://dood.so/d/o17cwpdqf5rj"
const the_father_movie="https://dood.so/d/nnwb2n02m4h0"
const prisoners_movie ="https://dood.so/d/nvf7fozg3zcf"
const kill_bill_movie ="https://dood.so/d/opzpqpo52iac"
const gone_girl_movie="https://dood.so/d/922v3ds498d1"
const no_country_movie ="https://dood.so/d/nxlzjpoysgiu"
const Incendies_movie="https://dood.so/d/sqbxhm520tsu"
const finding_nemo_movie="https://dood.so/d/92q3uj2tlr08"
const departed_movie="https://dood.so/d/0li1pr3ex2u6"
const interstellar_movie="https://dood.so/d/ssf9ms8cfy51"
const Genre = () => {
    return (
        <div className="All">
        <div className="movie1"> 
            <div>
                <img className="image1" src={taxi_driver} alt="" />
            </div>
            <div>
            <a href={taxi_driver_movie} target="blank"><button className="button">Play</button></a> 
            </div> 
           
        </div>

        <div className="movie1"> 
            <div>
                <img className="image1" src={wolf_street} alt="" />
            </div>
            <div>
            <a href={wolf_street_movie} target="blank"><button className="button">Play</button></a> 
            </div> 
            
        </div>

        <div className="movie1"> 
            <div>
                <img className="image1" src={shutter_island} alt="" />
            </div>
            <div>
            <a href={shutter_island_movie} target="blank"><button className="button">Play</button></a> 
            </div> 
           
        </div>

        <div className="movie1"> 
            <div>
                <img className="image1" src={the_secret} alt="" />
            </div>
            <div>
            <a href={the_secret_movie} target="blank"><button className="button">Play</button></a> 
            </div> 
           
        </div>

        <div className="movie1"> 
            <div>
                <img className="image1" src={the_hunt} alt="" />
            </div>
            <div>
            <a href={the_hunt_movie} target="blank"><button className="button">Play</button></a> 
            </div> 
           
        </div>


        <div className="movie1"> 
            <div>
                <img className="image1" src={the_father} alt="" />
            </div>
            <div>
            <a href={the_father_movie} target="blank"><button className="button">Play</button></a> 
            </div> 
           
        </div>


        <div className="movie1"> 
            <div>
                <img className="image1" src={the_prisoners} alt="" />
            </div>
            <div>
            <a href={prisoners_movie} target="blank"><button className="button">Play</button></a> 
            </div> 
           
        </div>

        <div className="movie1"> 
            <div>
                <img className="image1" src={kill_bill} alt="" />
            </div>
            <div>
            <a href={kill_bill_movie} target="blank"><button className="button">Play</button></a> 
            </div> 
           
        </div>

        <div className="movie1"> 
            <div>
                <img className="image1" src={gone_girl} alt="" />
            </div>
            <div>
            <a href={gone_girl_movie} target="blank"><button className="button">Play</button></a> 
            </div> 
           
        </div>
        <div className="movie1"> 
            <div>
                <img className="image1" src={no_country} alt="" />
            </div>
            <div>
            <a href={no_country_movie} target="blank"><button className="button">Play</button></a> 
            </div> 
           
        </div>
        <div className="movie1"> 
            <div>
                <img className="image1" src={Incendies} alt="" />
            </div>
            <div>
            <a href={Incendies_movie} target="blank"><button className="button">Play</button></a> 
            </div> 
           
        </div>
        <div className="movie1"> 
            <div>
                <img className="image1" src={finding_nemo} alt="" />
            </div>
            <div>
            <a href={finding_nemo_movie} target="blank"><button className="button">Play</button></a> 
            </div> 
           
        </div>

        <div className="movie1"> 
            <div>
                <img className="image1" src={departed} alt="" />
            </div>
            <div>
            <a href={departed_movie} target="blank"><button className="button">Play</button></a> 
            </div> 
           
        </div>

        <div className="movie1"> 
            <div>
                <img className="image1" src={interstellar} alt="" />
            </div>
            <div>
            <a href={interstellar_movie} target="blank"><button className="button">Play</button></a> 
            </div> 
           
        </div>

        
        <Webseries />
        
        </div>




    )
}
export default Genre; 