import React from 'react';
import PlayButton from "./PlayButton";
import AudioSlider from "./AudioSlider";

function SoundPlayer() {
    return (
            <div className="fixed bottom-0 left-0 w-full bg-gray-800">
                <div className="max-w px-2 sm:px-6 lg:px-8">
                    <div className="justify-between flex h-16">
                        <div className="flex flex-shrink-0 items-center"/>
                        <div className="flex flex-shrink-0 items-center">
                            <PlayButton/>
                        </div>
                        <div className="flex flex-shrink-0 items-center">
                            <AudioSlider/>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default SoundPlayer;