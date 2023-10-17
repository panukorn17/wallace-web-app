import React, { useState} from 'react';
import ScrollableContentLayout from "../layouts/ScrollableContentLayout";
import FadeOnScrollDiv from '../components/FadeOnScrollDiv';
import FullScreenDiv from '../components/FullScreenDiv';
import VideoAutoPlayOnHalfView from '../components/VideoAutoPlayOnHalfView';
const Landing: React.FC = () => {
    const [autoplay, setAutoplay] = useState(true);
    const [loopCount, setLoopCount] = useState(0);  // Initialize loop count to 0
    const MAX_LOOPS = 1;  // Maximum number of loops to play the video

    const handleVideoEnd = () => {
        setLoopCount(prevCount => {
            if (prevCount >= MAX_LOOPS - 1) {
                setAutoplay(false);
            }
            return prevCount + 1;
        });
    };
    return <ScrollableContentLayout>
        <FadeOnScrollDiv>
            <div className="flex flex-col items-center justify-center w-full min-h-screen">
                <h1 className="text-6xl font-bold">Wallace AI</h1>
            </div>
        </FadeOnScrollDiv>
        <FullScreenDiv>
            <div className="flex flex-col h-[100%] items-center">
                <VideoAutoPlayOnHalfView>
                    <source src='./delay-prediction-DID-PAD-2017.mp4' type="video/mp4" />
                    Your browser does not support the video tag.
                </VideoAutoPlayOnHalfView>
            </div>
        </FullScreenDiv>
        <div className="flex flex-col items-center justify-center h-screen">
            <h2 className="text-2xl font-bold">Predictions</h2>
            <h2 className="text-2xl font-bold">Error Distributions</h2>
            <h2 className="text-2xl font-bold">Further Resources</h2>
        </div>
    </ScrollableContentLayout>;
}

export default Landing;