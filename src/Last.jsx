import React from 'react';
const time=new Date().getFullYear();
const Last=()=>{
    return(
        <div className="Last">
            <h1>Copyright {time}</h1>
            <span>Made by Pallav</span>
        </div>
        

    )
}
export default Last;