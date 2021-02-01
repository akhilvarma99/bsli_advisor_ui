import React from 'react';
import loader from '../assets/img/loading.gif';

const Loader = () => {
    return (
        <div className ='fp-container'>
            <img className = 'fp-loader' src = {loader} alt = 'loader'/>
        </div>
        
    )
}

export default Loader
