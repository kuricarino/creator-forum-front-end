import React from 'react';
import './About.css';

const About = (props) => {
    return (
        <div className="hero-body">
            <div className="container has-text-centered">
            <h1 className="title is-size-1 has-text-white has-text-left has-text-justified is-uppercase" id="about-title">
                About
            </h1>
            <div class="tile is-ancestor">
                <article class="tile is-child notification" id="about-tile">
                <div class="content">
                    <p className="has-text-grey-dark has-text-left has-text-justified is-size-5">
                        Born out of the desire to promote honest feedback, the Creator Forum is where you can post links to your work (art, music, photography, what have you). 
                        Fellow creators can check out what you share and give non-biased feedback. 
                        The name was inspired by the Latin word, <em>forum</em>, or "public place outdoors".
                        Similar to the Roman Forum, this is a public space where discussion is welcome.
                    </p>
                    <p className="has-text-grey-dark has-text-left has-text-justified is-size-5">Want to get opinions that aren't sugar coated?</p>
                    <p className="has-text-grey-dark has-text-left has-text-justified is-size-4">Time to get on the forum.</p>
                </div>
                </article>
                <article class="tile is-parent notification" id="dev-tile">
                <div class="content">
                    <p className="has-text-grey-dark has-text-left has-text-justified is-size-5">
                         
                    </p>
                </div>
                </article>
            </div>
            </div>
        </div>
    )
}

export default About;

