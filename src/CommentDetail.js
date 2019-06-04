import React from 'react';
const ComDetail = (props)=>{
    return (
        <div className="comment">
            <a href="/" className="avatar">
            <img alt="avatar" src={props.avatar}/>
            </a>
            <div className="content">
            <a href="/" className="author">
                {props.author}
            </a>
            <div className="metadata">
                <span className="date">Today at 6:00 pm</span>
            </div>
            <div className="text">{props.content}</div>
            </div>
        </div>
    )
};

export default ComDetail