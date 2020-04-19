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
                    <div class="tile is-parent is-8">
                        <article class="tile is-child box">
                        <div class="content">
                            <p className="has-text-grey-dark has-text-left has-text-justified is-size-5">
                                Born out of the desire to promote honest feedback, the <strong>Creator Forum</strong> is where you can post links to your work (art, music, photography, what have you). 
                                Fellow creators can check out what you share and give non-biased feedback. 
                                The name was inspired by the Latin word, <em>forum</em>, or "public place outdoors".
                                Similar to the Roman Forum, this is a public space where discussion is welcome.
                            </p>
                            <p className="has-text-grey-dark has-text-left has-text-justified is-size-5"><em>Want to get opinions that aren't sugar coated?</em></p>
                            <p className="has-text-grey-dark has-text-left has-text-justified is-size-4"><strong>Time to get on the forum.</strong></p>      
                        </div>
                        </article>
                    </div>
                    <div class="tile is-parent">
                        <article class="tile is-child box">
                        <div class="content">
                            <p>
                                what to say?
                            </p>
                        </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
