import React from "react";
import NS from "./images/NS.png"
import './locationDisplay.css'

const locationConfig={
    North:{
        text:"hi, you are currently in North region",
        picture:NS
        
    },
    South:{
        text:'hi, you are currently in South region',
        picture:NS
    }
}

const locationDisplay=({latitude})=>{
    var region=(latitude>0)?'North':'South';
    const {text,picture}=locationConfig[region];

    return(
        <div className={region}>
            {text}
            <img src={NS} alt='North or South' height='100px'/>
        </div>
    )
}

export default locationDisplay;
