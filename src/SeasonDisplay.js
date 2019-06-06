import './SeasonDisplay.css'
import React from 'react';

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
    const {text , icon} = seasonConfig[season];

    return (
        <div  className={`${season}`}>
            <i className={`${icon} icon massive`}/>
            <h1 className={`season-display ${season}`}>{season}</h1>
            <i className={`icon-right ${icon} icon massive`}/>
        </div>
    )
};

export default SeasonDisplay