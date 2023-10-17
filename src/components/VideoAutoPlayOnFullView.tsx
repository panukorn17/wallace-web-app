import React, { useEffect, useRef, ReactNode, useState } from 'react';

type SectionProps = {
    children: ReactNode;
};

const MAX_LOOPS = 3;

const VideoAutoPlayOnFullView: React.FC<SectionProps> = ({ children }) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [loopCount, setLoopCount] = useState(0); // State to track loop count

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && entry.intersectionRatio >= 0.5 && videoRef.current) {
                    if (loopCount < MAX_LOOPS) { // Only play if loopCount is less than MAX_LOOPS
                        videoRef.current.play().catch(error => {
                            console.error("Playback failed: ", error);
                        });
                    }
                } else if (videoRef.current && !videoRef.current.paused) {
                    videoRef.current.pause();
                }
            },
            {
                threshold: 0.5 // Only play video when 50% of the video is visible
            }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, [loopCount]); // Add loopCount to the dependency array

    useEffect(() => {
        const handleVideoEnd = () => {
            setLoopCount((prevCount) => prevCount + 1); // Increase loopCount by 1 when video ends
        };

        if (videoRef.current) {
            videoRef.current.addEventListener('ended', handleVideoEnd); // Add event listener for video end event
        }

        return () => {
            if (videoRef.current) {
                videoRef.current.removeEventListener('ended', handleVideoEnd); // Cleanup event listener
            }
        };
    }, []); // This effect should only run once

    return <video className="VideoAutoPlayOnFullView" ref={videoRef} muted>{children}</video>;
}

export default VideoAutoPlayOnFullView;