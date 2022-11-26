import React from 'react';
//Gif
import spinner from './spinner.gif'

const Loading = () => {
    return (
        <div>
            <img src={spinner} alt="loading"/>
            <h1>Loading...</h1>
        </div>
    );
};

export default Loading;