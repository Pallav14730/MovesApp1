import React from "react"
import { NavLink } from "react-router-dom";
// import Spiderman from "./Images/Spiderman.jpeg"
import super_girl from "./Images/super_girl.jpeg"
import arrow from "./Images/arrow.jpeg"
import friends from "./Images/friends.jpeg"
import robot from "./Images/robot.jpeg"
import the_boys from "./Images/the_boys.jpeg"
import the_flash from "./Images/the_flash.jpeg"
import got from "./Images/got.jpeg"
import gotham from "./Images/gotham.jpeg"
import hanna from "./Images/hanna.jpeg"
import fringe from "./Images/fringe.jpeg"
import vikings from "./Images/vikings.jpeg"
import modern_family from "./Images/modern_family.jpeg"
import kobra from "./Images/kobra.jpeg"
import suits from "./Images/suits.jpeg"

const Webseries = () => {
    return (
        <div className="All">
            <div className="movie1">
                <div>
                    <NavLink to="/SuperGirl">
                        <img className="image1" src={super_girl} alt="" />
                    </NavLink>

                </div>
                <div>
                    <NavLink to="/SuperGirl">
                        <a  ><button className="button">Click</button></a>
                    </NavLink>
                </div>

            </div>

            <div className="movie1">
                <div>
                    <NavLink to="/Arrow">
                        <img className="image1" src={arrow} alt="" />
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/Arrow">
                        <a target="blank"><button className="button">Click</button></a>

                    </NavLink>
                </div>

            </div>

            <div className="movie1">
                <div>
                    <NavLink to="/Friends">
                        <img className="image1" src={friends} alt="" />
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/Friends">
                        <a target="blank"><button className="button">Click</button></a>

                    </NavLink>
                </div>

            </div>

            <div className="movie1">
                <div>
                    <NavLink to="/Robot">
                        <img className="image1" src={robot} alt="" />

                    </NavLink>

                </div>
                <div>
                    <NavLink to="/Robot">
                        <a target="blank"><button className="button">Click</button></a>

                    </NavLink>
                </div>

            </div>

            <div className="movie1">
                <div>
                    <NavLink to="/TheBoys">
                        <img className="image1" src={the_boys} alt="" />

                    </NavLink>
                </div>
                <div>
                    <NavLink to="/TheBoys">
                        <a target="blank"><button className="button">Click</button></a>

                    </NavLink>
                </div>

            </div>


            <div className="movie1">
                <div>
                    <NavLink to="/TheFlash">
                        <img className="image1" src={the_flash} alt="" />

                    </NavLink>
                </div>
                <div>
                    <NavLink to="/TheFlash">
                        <a target="blank"><button className="button">Click</button></a>

                    </NavLink>

                </div>

            </div>


            <div className="movie1">
                <div>
                    <NavLink to="/Got">
                        <img className="image1" src={got} alt="" />

                    </NavLink>
                </div>
                <div>
                    <NavLink to="/Got">
                        <a target="blank"><button className="button">Click</button></a>

                    </NavLink>

                </div>

            </div>

            <div className="movie1">
                <div>
                    <NavLink to="/Gotham">
                        <img className="image1" src={gotham} alt="" />

                    </NavLink>
                </div>
                <div>
                    <NavLink to="/Gotham">
                        <a target="blank"><button className="button">Click</button></a>

                    </NavLink>

                </div>

            </div>

            <div className="movie1">
                <div>
                    <NavLink to="/Hanna">
                        <img className="image1" src={hanna} alt="" />

                    </NavLink>
                </div>
                <div>
                    <NavLink to="/Hanna">
                        <a target="blank"><button className="button">Play</button></a>

                    </NavLink>
                </div>

            </div>
            <div className="movie1">
                <div>
                    <NavLink to="/Fringe">
                        <img className="image1" src={fringe} alt="" />

                    </NavLink>
                </div>
                <div>
                    <NavLink to="/Fringe">
                        <a target="blank"><button className="button">Click</button></a>

                    </NavLink>
                </div>

            </div>

            <div className="movie1">
                <div>
                    <NavLink to="/ModernFamily">
                        <img className="image1" src={modern_family} alt="" />

                    </NavLink>
                </div>
                <div>
                    <NavLink to="/ModernFamily">
                        <a target="blank"><button className="button">Click</button></a>

                    </NavLink>
                </div>

            </div>

            <div className="movie1">
                <div>
                <NavLink to="/Vikings">
                    <img className="image1" src={vikings} alt="" />

                </NavLink>
                </div>
                <div>
                    <NavLink to="/Vikings">
                        <a target="blank"><button className="button">Click</button></a>

                    </NavLink>
                </div>

            </div>

            <div className="movie1">
                <div>
                    <NavLink to="/Kobra">
                        <img className="image1" src={kobra} alt="" />

                    </NavLink>
                </div>
                <div>
                    <NavLink to="/Kobra">
                        <a target="blank"><button className="button">Click</button></a>

                    </NavLink>
                </div>

            </div>

            <div className="movie1">
                <div>
                    <NavLink to="/Suits">
                        <img className="image1" src={suits} alt="" />

                    </NavLink>
                </div>
                <div>
                    <NavLink to="/Suits">
                        <a target="blank"><button className="button">Click</button></a>

                    </NavLink>
                </div>

            </div>

        </div>




    )
}
export default Webseries; 