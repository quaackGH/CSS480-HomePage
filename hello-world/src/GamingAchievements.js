import React from 'react';
import valorant from './valorant.jpg';
import radiant from './radiant.png';
import valo40 from './40.png';
import donoobs from './donoobs.png';
import './GamingAchievements.css';

const GamingAchievements = () => {
    return (
        <div className="gaming-achievements-page">
            <div className="valorant-section">
                <img src={valorant} alt="Valorant Logo" className="valorant-image" />
                <h1 className="main-heading">My Valorant Experience</h1>
            </div>

            <div className="intro-section">
                <h2>A Journey Through My Valorant Accomplishments</h2>
                <p>
                    Gaming has been a significant part of my life. Here are some of my proudest moments and impacts in the Valorant community.
                </p>
            </div>

            <div className="achievements-section">
                <div className="achievement-block">
                    <img src={radiant} alt="radiant" className="achievement-image" />
                    <div className="achievement-text">
                        <h3>Hitting Radiant!</h3>
                        <p>Hitting Radiant was one of the happiest moments in Valorant for me. I remember my first time trying to hit Radiant and it took me like 400-500 games. I definitely struggled but it was all worth it in the end.</p>
                    </div>
                </div>

                <div className="achievement-block reverse">
                    <img src={valo40} alt="40" className="achievement-image" />
                    <div className="achievement-text">
                        <h3>40+ kills</h3>
                        <p>This was when I got 41 kills in a game of Valorant. It is considered a fairly hard thing to do and I have only done this a few times!</p>
                    </div>
                </div>

                <div className="achievement-block">
                    <img src={donoobs} alt="donoobs" className="achievement-image" />
                    <div className="achievement-text">
                        <h3>Rank 1 in Premier!</h3>
                        <p>Currently, my team and I are the number 1 team in Premier since we are 4-0. We are going to try keep this record going and do our best.</p>
                    </div>
                </div>
            </div>

            <div className="conclusion-section">
                <h2>Next Up?</h2>
                <p>I am trying to practice some more with my team and play in small tournaments!</p>
            </div>
        </div>
    );
};

export default GamingAchievements;
