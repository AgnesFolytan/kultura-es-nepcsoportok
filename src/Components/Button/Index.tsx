import React from 'react';

export function Button() {
    const handleClick = () => {
        window.location.href = 'https://github.com/AgnesFolytan/kultura-es-nepcsoportok';
    };

    return (
        <button onClick={handleClick}>
            Click Here
        </button>
    );
}
