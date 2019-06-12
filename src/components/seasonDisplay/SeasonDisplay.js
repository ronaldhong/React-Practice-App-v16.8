import './SeasonDisplay.css'
import React from 'react';
import Typist from 'react-typist';
import { Parallax } from 'react-scroll-parallax';

const seasonConfig = {
    Summer:{
        text: "Let's hit the beach!",
        icon: "sun"
    },
    Winter:{
        text: "Let's go snowboarding!!",
        icon: "snowflake"
    }
};

const getSeason =(lat, month) =>{
    if (month<3 || month>8){
        return lat>0? 'Winter':'Summer';
    }
    if (month>2 || month<9){
        return lat>0? 'Summer':'Winter';
    }
}

const SeasonDisplay = (props)=>{
    const season =getSeason(props.lat? props.lat : 29.76, new Date().getMonth());
    const {icon} = seasonConfig[season];

    return (
        // <Parallax className="custom-class" y={[-30, 30]} tagOuter="figure">
            <div  className={`${season}`}>
                <i className={`${icon} icon massive`}/>
                <h1 className={`season-display ${season}`}><Typist><Typist.Delay ms={1000}/>Current Season at your Location:<Typist.Delay ms={1500}/>{season}</Typist></h1>
                <i className={`icon-right ${icon} icon massive`}/>
            </div>
        // </Parallax>
    )
};

export default SeasonDisplay