import React, { useEffect } from 'react';

const InstagramEmbed = ({ url }) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.async = true;
        script.src = "//www.instagram.com/embed.js";
        script.onload = () => window.instgrm?.Embeds.process();
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="relative mt-4">
            <blockquote
                className="instagram-media"
                data-instgrm-captioned
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                style={{
                    background: "#FFF",
                    border: "0",
                    borderRadius: "3px",
                    boxShadow: "0 0 1px rgba(0,0,0,0.5), 0 1px 10px rgba(0,0,0,0.15)",
                    margin: "1px",
                    width: "100%",
                    padding: "0",
                }}
            ></blockquote>
        </div>
    );
};

export default InstagramEmbed;
