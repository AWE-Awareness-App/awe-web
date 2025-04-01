import React from 'react';

interface VideoSectionProps {
    videoSrc: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({ videoSrc }) => {
    return (
        <section className="mx-auto max-w-6xl py-6">
            <iframe
                className="w-full h-full rounded-lg shadow-lg"
                src={videoSrc}
                title="Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </section>
    );
};

export default VideoSection;
