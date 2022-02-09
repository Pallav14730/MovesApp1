import React from 'react';
// import { NavLink } from "react-router-dom";
import Spiderman from "./Images/Spiderman.jpeg"
import black_widow from "./Images/black_widow.jpeg"
import docter_strange from "./Images/docter_strange.jpeg"
import shang_chi from "./Images/shang_chi.jpeg"
import captain_america_first_avenger from "./Images/captain_america_first_avenger.jpeg"
import avenger_end_game from "./Images/avenger_end_game.jpeg"
import red_sparrow from "./Images/red_sparrow.jpeg"
import royal_treatment from "./Images/royal_treatmant.jpeg"
import falcon_the_winter from "./Images/falcon_the_winter.jpeg"
import ant_man from "./Images/ant_man.jpeg"
import army_of_theives from "./Images/army_of_theives.jpeg"
import red_notice from "./Images/red_notice.jpeg"
import eternals from "./Images/eternals.jpeg"
import avenger_infinity_war from "./Images/avenger_infinity_war.jpeg"
const avenger_infinity_war_movie="https://www.terabox.com/web/share/videoPlay?surl=siALYBBPFuMsJPTzB3xrxQ&dir=%2FAVENGERS%20INFINITY%20WAR&fsid=113834098600127&fileName=Avengers.InfinityWar.2018.720p.Hindi.English.MoviesVerse.in.mkv&page=1"
const movie1="https://www.youtube.com/watch?v=5QB9agsk42Q";
const black_widow_movie="https://www.terabox.com/web/share/videoPlay?surl=pi33KhWSH-JFThDSTFdlbw&dir=%2FBLACK%20WIDOW&fsid=524465107689402&fileName=Black.Widow.2021.720p.Hindi.English.Esubs.MoviesVerse.Co.mkv&page=1"
const docter_strange_movie="https://www.terabox.com/web/share/videoPlay?surl=YGOgIp66CLhLV_iBBDD_6g&dir=%2FDR%20STRANGE&fsid=403266603043892&fileName=Doctor.Strange.2016.720p.Hindi.English.MoviesVerse.in.mkv&page=1"
const shang_chi_movie="https://www.terabox.com/web/share/videoPlay?surl=hR531egDMBkEhbx_FGUM8g&dir=%2FSHAANG%20CHI&fsid=902982139366426&fileName=Shang-Chi.2021.720p.Hindi.English.Bluray.Esubs.MoviesVerse.Co.mkv&page=1"
const captain_america_first_avenger_movie="https://www.terabox.com/web/share/videoPlay?surl=pSVzPe9DhwK2i61_-qTgMg&dir=%2FCAPTAIN%20MARVEL&fsid=547975963611635&fileName=Captain.Marvel.2019.720p.Hindi.English.MoviesFlixPro.in.mkv&page=1"
const avenger_end_game_movie="https://www.terabox.com/web/share/videoPlay?surl=d3QS23kUqRqrTe3c1RkUaw&dir=%2FAVENGERS%20END%20GAME&fsid=638398586443295&fileName=Avengers.Endgame.2019.720p.HEVC.Hindi.English.MoviesVerse.in.mkv&page=1"
const red_sparrow_movie="https://www.terabox.com/web/share/videoPlay?surl=LGzalFfe94h7ybvEjEOCUw&dir=%2FRED%20SPARROW&fsid=76807124414247&fileName=Red.Sparrow.2018.720p.BRRip.Hindi.Dual-Audio.MoviesVerse.In.mkv&page=1"
const royal_treatment_movie="https://www.terabox.com/web/share/videoPlay?surl=2gToOp72qTmGsm5pEtlJmA&dir=%2FTHE%20ROYAL%20TREATMENT&fsid=295372901507175&fileName=The.Royal.Treatment.2022.720p.WEB-DL.Hindi-English.x264-Themoviesflix.us.com.mkv&page=1"
const falcon_the_winter_movie="https://www.terabox.com/web/share/videoPlay?surl=Sq8Mri_FvfUtfCxmnYYvfQ&dir=%2FFALCON%20AND%20THE%20WINTER%20SOLDIER&fsid=137149080799548&fileName=The.Falcon.and.The.Winter.Soldier.S01E06.720p.Hindi.English.Esubs.MoviesVerse.org.mkv&page=1"
const ant_man_movie="https://www.terabox.com/web/share/videoPlay?surl=wn6_69eqBHJBp21vxDrHSw&dir=%2FAND%20MAN%20AND%20THE%20WASP&fsid=990012145825959&fileName=AntMan.The.Wasp.2018.720p.Hindi.English.MoviesVerse.in.mkv&page=1"
const army_of_theives_movie="https://www.terabox.com/web/share/videoPlay?surl=213iZHTBzKajvNgaQ69FKQ&dir=%2FARMY%20OF%20THIEVES&fsid=421731037030639&fileName=Watch%20Army%20of%20Thieves%20Full%20Movie%20on%20FMovies.to.ts&page=1"
const red_notice_movie="https://www.terabox.com/web/share/videoPlay?surl=qcwpiT-b6p1BhiIQaXQcfg&dir=%2FRED%20NOTICE&fsid=839049010705388&fileName=Watch%20Red%20Notice%20Full%20Movie%20on%20FMovies.to.ts&page=1"
const eternals_movie="https://www.terabox.com/web/share/videoPlay?surl=ARtgE24Se2OaXpG0l9puug&dir=%2FETERNALS&fsid=857610708119502&fileName=Eternals.2021.IMAX.720p.WEB-DL.Hindi-English.x264-Themoviesflix.us.com.mkv&page=1"
const Spiderman_movie="https://www.terabox.com/web/share/videoPlay?surl=lr1YZE3h69khkx53M-5yPQ&dir=%2FSPIDERMAN%20NO%20WAY%20HOME%20HD%20PRINT&fsid=743453821766101&fileName=Spider-Man.No.Way.Home.2021.720P.Hdtc.Hindi.Dub.1Xbet-1.mkv&page=1"
const Home = () => {
    
    return (
        <div className="All">
        <div className="movie1"> 
            <div>
                <img className="image1" src={Spiderman} alt="" />
            </div>
            <div>
            <a href={Spiderman_movie} target="blank"><button className="button">Play</button></a> 
            </div> 
           
        </div>

        <div className="movie1"> 
            <div>
                <img className="image1" src={black_widow} alt="" />
            </div>
            <div>
            <a href={black_widow_movie} target="blank"><button className="button">Play</button></a> 
            </div> 
            
        </div>

        <div className="movie1"> 
            <div>
                <img className="image1" src={docter_strange} alt="" />
            </div>
            <div>
            <a href={docter_strange_movie} target="blank"><button className="button">Play</button></a> 
            </div> 
           
        </div>

        <div className="movie1"> 
            <div>
                <img className="image1" src={shang_chi} alt="" />
            </div>
            <div>
            <a href={shang_chi_movie} target="blank"><button className="button">Play</button></a> 
            </div> 
           
        </div>

        <div className="movie1"> 
            <div>
                <img className="image1" src={captain_america_first_avenger} alt="" />
            </div>
            <div>
            <a href={captain_america_first_avenger_movie} target="blank"><button className="button">Play</button></a> 
            </div> 
           
        </div>


        <div className="movie1"> 
            <div>
                <img className="image1" src={avenger_end_game} alt="" />
            </div>
            <div>
            <a href={avenger_end_game_movie} target="blank"><button className="button">Play</button></a> 
            </div> 
           
        </div>


        <div className="movie1"> 
            <div>
                <img className="image1" src={avenger_infinity_war} alt="" />
            </div>
            <div>
            <a href={avenger_infinity_war_movie} target="blank"><button className="button">Play</button></a> 
            </div> 
           
        </div>

        <div className="movie1"> 
            <div>
                <img className="image1" src={red_sparrow} alt="" />
            </div>
            <div>
            <a href={red_sparrow_movie} target="blank"><button className="button">Play</button></a> 
            </div> 
           
        </div>

        <div className="movie1"> 
            <div>
                <img className="image1" src={royal_treatment} alt="" />
            </div>
            <div>
            <a href={royal_treatment_movie} target="blank"><button className="button">Play</button></a> 
            </div> 
           
        </div>
        <div className="movie1"> 
            <div>
                <img className="image1" src={falcon_the_winter} alt="" />
            </div>
            <div>
            <a href={falcon_the_winter_movie} target="blank"><button className="button">Play</button></a> 
            </div> 
           
        </div>

        <div className="movie1"> 
            <div>
                <img className="image1" src={ant_man} alt="" />
            </div>
            <div>
            <a href={ant_man_movie} target="blank"><button className="button">Play</button></a> 
            </div> 
           
        </div>

        <div className="movie1"> 
            <div>
                <img className="image1" src={army_of_theives} alt="" />
            </div>
            <div>
            <a href={army_of_theives_movie} target="blank"><button className="button">Play</button></a> 
            </div> 
           
        </div>

        <div className="movie1"> 
            <div>
                <img className="image1" src={red_notice} alt="" />
            </div>
            <div>
            <a href={red_notice_movie} target="blank"><button className="button">Play</button></a> 
            </div> 
           
        </div>
        </div>
    )
}
 export default Home;