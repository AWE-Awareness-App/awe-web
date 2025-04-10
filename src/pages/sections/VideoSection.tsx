import React from 'react';

interface VideoSectionProps {
    videoSrc: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({ videoSrc }) => {
    return (
        <section className="mx-auto aspect-w-16 aspect-h-9 w-full rounded-lg shadow-lg">
            <iframe
                className="w-full h-full"
                src={videoSrc}
                title="Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </section>
    );
};

export default VideoSection;
