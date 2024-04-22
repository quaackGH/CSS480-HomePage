import React, { useEffect } from 'react';
import './ThingsToRead.css';

function ThingsToRead() {
    useEffect(() => {
        const handleKeyDown = (event) => {
            switch (event.key) {
                case '1':
                    window.location.href = "https://playvalorant.com/en-us/";
                    break;
                case '2':
                    window.location.href = "https://www.youtube.com/";
                    break;
                case '3':
                    window.location.href = "https://www.netflix.com/";
                    break;
                case '4':
                    window.location.href = "https://open.spotify.com/";
                    break;
                case '5':
                    window.location.href = "https://twitter.com/home";
                    break;
                case '6':
                    window.location.href = "https://discord.com/";
                    break;
                case '7':
                    window.location.href = "https://afkjourney.farlightgames.com/";
                    break;
                case '8':
                    window.location.href = "https://www.google.com/";
                    break;
                case '9':
                    window.location.href = "https://aniwave.to/trending";
                    break;
                case '0':
                    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley";
                    break;
                default:
                    break;
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className="container">
            <h1 className="heading">Websites</h1>
            <div className="links-container">
                <a href="https://playvalorant.com/en-us/">Valorant</a>
                <a href="https://www.youtube.com/">Youtube</a>
                <a href="https://www.netflix.com/">Netflix</a>
                <a href="https://open.spotify.com/">Spotify</a>
                <a href="https://twitter.com/home">X</a>
                <a href="https://discord.com/">Discord</a>
                <a href="https://afkjourney.farlightgames.com/">AFK Journey</a>
                <a href="https://www.google.com/">Google</a>
                <a href="https://aniwave.to/trending">Anime</a>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">Click Me!</a>
            </div>
        </div>
    );
}

export default ThingsToRead;
