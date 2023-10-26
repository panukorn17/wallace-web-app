import React, { useEffect, useRef, ReactNode, useState } from 'react';

type SectionProps = {
    children: ReactNode;
};

const MAX_LOOPS = 3;

const VideoAutoPlayOnHalfView: React.FC<SectionProps> = ({ children }) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [loopCount, setLoopCount] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    // Detect if the user is on mobile
    useEffect(() => {
        const isMobileUserAgent = /Mobi|Android/i.test(navigator.userAgent);
        setIsMobile(isMobileUserAgent);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Don't autoplay on mobile, wait for user interaction
                if(isMobile) return;

                (async () => {
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.5 && videoRef.current) {
                        if (loopCount < MAX_LOOPS) {
                            videoRef.current.play();
                        }
                    } else if (videoRef.current && !videoRef.current.paused) {
                        videoRef.current.pause();
                    }
                })();
            },
            {
                threshold: 0.5
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
    }, [loopCount, isMobile]);

    useEffect(() => {
        const handleVideoEnd = () => {
            setLoopCount((prevCount) => prevCount + 1);
        };

        if (videoRef.current) {
            videoRef.current.addEventListener('ended', handleVideoEnd);
        }

        return () => {
            if (videoRef.current) {
                videoRef.current.removeEventListener('ended', handleVideoEnd);
            }
        };
    }, []);

    const handleVideoClick = () => {
        if(videoRef.current) {
            if(videoRef.current.paused) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        }
    }

    return (
        <video 
            className="h-[95%]" 
            ref={videoRef} 
            muted 
            onClick={isMobile ? handleVideoClick : undefined}
        >
            {children}
        </video>
    );
}

export default VideoAutoPlayOnHalfView;
