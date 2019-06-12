import React from 'react';
import "./ImageList.css";

const ImageList = props =>{
    const images = props.images.map(({description, id, urls}) => {
        return (
            <img alt={description} key={id} src={urls.regular}></img>
        )
    });
    return (
        <div className="image_list">
            {images}
        </div>
    )
}

export default ImageList;