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
                <h1 className="text-8xl font-bold">Wallace AI</h1>
            </div>
        </FadeOnScrollDiv>
        <FullScreenDiv>
            <div className="flex flex-col h-[100%] items-center">
                <VideoAutoPlayOnHalfView>
                    <source src='./1-step-delay-prediction-DID-PAD-2017.mp4' type="video/mp4" />
                    Your browser does not support the video tag.
                </VideoAutoPlayOnHalfView>
            </div>
        </FullScreenDiv>
        <FullScreenDiv>
            <div className="flex flex-col h-[100%] items-center">
                <VideoAutoPlayOnHalfView>
                    <source src='./5-step-delay-prediction-DID-PAD-2017.mp4' type="video/mp4" />
                    Your browser does not support the video tag.
                </VideoAutoPlayOnHalfView>
            </div>
        </FullScreenDiv>
        <div className="flex flex-col p-10 px-40 text-justify">
            <h2 className="text-4xl font-bold">Further Resources</h2>

            <div className="mt-5 flex flex-row items-center">
                <img src="github-mark.png" alt="Repository Icon" className="mr-4 w-10 h-10" />
                <a className="text-xl text-bold text-black-600 hover:text-blue-500" href="https://github.com/panukorn17/wallace-ai" target="_blank" rel="noopener noreferrer"> Github Repository</a>
            </div>
            <div className="mt-5 flex flex-row items-center">
                <img src="Taylor_and_Francis.png" alt="Journal Icon" className="mr-4 w-10 h-10" />
                <a className="text-l text-bold text-black-600 hover:text-blue-500" href="https://doi.org/10.1080/15472450.2020.1858822" target="_blank" rel="noopener noreferrer"><u>Taleongpong, P.</u>, Hu, S., Jiang, Z., Wu, C., Popo-Ola, S. & Han, K., 2020. Machine learning techniques to predict reactionary delays and other associated key performance indicators on British railway network. Journal of Intelligent Transportation Systems: Technology, Planning, and Operations, 26(3), pp. 311-329.</a>
            </div>
            <div className="mt-5 flex flex-row items-center">
                <img src="Ieee_blue.jpg" alt="Journal Icon" className="mr-4 w-10" />
                <a className="text-l text-bold text-black-600 hover:text-blue-500" href="https://doi.org/10.1109/ITSC45102.2020.9294742" target="_blank" rel="noopener noreferrer">Heglund, J.S.W., <u>Taleongpong, P.</u>, Hu, S. & Tran, H.T., 2020. Railway Delay Prediction with Spatial-Temporal Graph Convolutional Networks. In: 2020 IEEE 23rd International Conference on Intelligent Transportation Systems (ITSC). Rhodes, Greece, pp. 1-6.</a>
            </div>
        </div>
    </ScrollableContentLayout>;
}

export default Landing;