import React from 'react';

interface VideoSectionProps {
    videoSrc: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({ videoSrc }) => {
    return (
        <section className="w-full max-w-3xl mx-auto rounded-lg py-16 px-4">
            <div className="relative w-full pb-[56.25%]">
                <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                    src={videoSrc}
                    title="Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        </section>
    );
};

export default VideoSection;
