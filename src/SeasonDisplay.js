import React from 'react';


const getSeason =(lat, month) =>{
    if (month<3 || month>8){
        return lat>0? 'winter':'summer';
    }
    if (month>2 || month<9){
        return lat>0? 'summer':'winter';
    }
}
const SeasonDisplay = (props)=>{
    const season =getSeason(props.lat? props.lat : 29.76, new Date().getMonth() )
    return (
        <div className="ui container">
            Season Display: {season}
        </div>
    )
};

export default SeasonDisplay