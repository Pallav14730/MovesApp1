import React from "react"
import ReactDom from "react-dom"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Footer from "./Footer"
import Movies from "./Movies"
import Navigation from "./Navigation"
import Sign from "./Sign"
import Bollywood from "./Bollywood"
import Hollywood from "./Hollywood"
import Home from "./Home"
import Webseries from "./Webseries"
import Genre from "./Genre"
import SuperGirl from "./SuperGirl"
import Arrow from "./Arrow"
import Friends from "./Friends"
import Robot from "./Robot"
import Last from "./Last"
import TheBoys from "./TheBoys"
import TheFlash from "./TheFlash"
import Got from "./Got"
import Gotham from "./Gotham"
import Hanna from "./Hanna"
import Fringe from "./Fringe"
import ModernFamily from "./ModernFamily"
import Vikings from "./Vikings"
import Kobra from "./Kobra"
import Suits from "./Suits"
import "./style.css";
ReactDom.render(

  <Router>
    <Footer />
    <Navigation />

    <Routes>
      <Route path="/Sign" element={<Sign />} />
      <Route path="/Movies" element={<Movies />} />
      <Route path="/Bollywood" element={<Bollywood />} />
      <Route path="/Hollywood" element={<Hollywood />} />
      <Route path="/" element={<Home />} />
      <Route path="/Webseries" element={<Webseries />} />
      <Route path="/SuperGirl" element={<SuperGirl />} />
      <Route path="/Arrow" element={<Arrow />} />
      <Route path="/Friends" element={<Friends />} />
      <Route path="/Robot" element={<Robot />}/>
      <Route path="/TheBoys" element={<TheBoys />}/>
      <Route path="/TheFlash" element={<TheFlash />}/>
      <Route path="/Got" element={<Got />}/>
      <Route path="/Gotham" element={<Gotham />}/>
      <Route path="/Hanna" element={<Hanna />}/>
      <Route path="/Fringe" element={<Fringe />}/>
      <Route path="/ModernFamily" element={<ModernFamily />}/>
      <Route path="/Vikings" element={<Vikings />}/>
      <Route path="/Kobra" element={<Kobra />}/>
      <Route path="/Suits" element={<Suits />}/>
      <Route path="/Genre" element={<Genre />} />
      

    </Routes>
    <Last />
  </Router>,
  


  document.getElementById("root")
)