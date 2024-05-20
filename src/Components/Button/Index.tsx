import React from 'react';
import './Index.css';

export function Button() {
    const handleClick = () => {
        window.location.href = 'https://github.com/AgnesFolytan/kultura-es-nepcsoportok';
    };

    return (
        <button onClick={handleClick} id='color'>
            Github!
        </button>
    );
}
