import React, { useState } from 'react';
import ScrollableContentLayout from "../layouts/ScrollableContentLayout";

const AUTOPLAY_DURATION = 100;
const Landing: React.FC = () => {
    const [autoplay, setAutoplay] = useState(true);
    const [loopCount, setLoopCount] = useState(0);  // Initialize loop count to 0
    const MAX_LOOPS = 1;  // Maximum number of loops to play the video

    const handleVideoEnd = () => {
        setLoopCount(prevCount => prevCount + 1); // Increment loop count

        if (loopCount >= MAX_LOOPS - 1) { 
            setAutoplay(false);  // Stop playing after reaching the maximum number of loops
        }
    }
    return <ScrollableContentLayout>
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-6xl font-bold">Wallace AI</h1>
        </div>
        <div className="flex flex-col items-center justify-center h-screen">
            <video  className="w-9/10" 
                    autoPlay={autoplay}  
                    loop={loopCount < MAX_LOOPS - 1} // Loop video until reaching the max loops
                    onEnded={handleVideoEnd}  // Handle the video end event
                    muted>
                <source src='./delay-prediction-map.mp4' type="video/mp4" />
                Your browser does not support the video tag.
            </video>  
            <div className="flex">
                {/*column for cumulative delay and delay headers*/}
                <div className="flex flex-col justify-between items-right pl-16 w-1/5">
                    <div className="flex-grow"></div>
                    <h2 className="text-l font-bold">Cumulative Delay</h2>
                    <div className="flex-grow"></div>
                    <h2 className="text-l font-bold">Delay</h2>
                    <div className="flex-grow"></div>
                </div>
                {/*Didcot Delay video*/}
                <div className="w-4/5">
                    <video  className="w-full max-h-96" 
                            autoPlay={autoplay}  
                            loop={loopCount < MAX_LOOPS - 1} // Loop video until reaching the max loops
                            onEnded={handleVideoEnd}  // Handle the video end event
                            muted>
                        <source src='./didcot-station-delay.mp4' type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                {/*Paddington Delay video*/}
                <div className="w-4/5">
                    <video  className="w-full max-h-96" 
                            autoPlay={autoplay}  
                            loop={loopCount < MAX_LOOPS - 1} // Loop video until reaching the max loops
                            onEnded={handleVideoEnd}  // Handle the video end event
                            muted>
                        <source src='./ldnpaddington-station-delay.mp4' type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>      
        </div>
        <div className="flex flex-col items-center justify-center h-screen">
            <h2 className="text-2xl font-bold">Predictions</h2>
            <h2 className="text-2xl font-bold">Error Distributions</h2>
            <h2 className="text-2xl font-bold">Further Resources</h2>
        </div>
    </ScrollableContentLayout>;
}

export default Landing;