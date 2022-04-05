import React from 'react';

function AudioSlider() {
    return (
        <div>
            <input
                type="range"
                className="form-range appearance-none w-full h-6 p-0bg-transparentfocus:outline-none focus:ring-0 focus:shadow-none"
            />
        </div>
    );
}

export default AudioSlider;
