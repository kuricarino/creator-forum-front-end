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
                        <article class="tile is-child box notification">
                            <br/>
                            <p className="has-text-grey-dark has-text-left has-text-justified is-size-5">
                                Born out of the desire to promote honest feedback, the <strong>Creator Forum</strong> is where you can post links to your work (art, music, photography, what have you). 
                                Fellow creators can check out what you share and give non-biased feedback. 
                                The name was inspired by the Latin word, <em>forum</em>, or "public place outdoors".
                                Similar to the Roman Forum, this is a public space where discussion is welcome.
                            </p>
                            <br/>
                            <br/>
                            <p className="has-text-grey-dark has-text-left has-text-justified is-size-5"><em>Want to get opinions that aren't sugar coated?</em></p>
                            <br/>
                            <br/>
                            <p className="has-text-grey-dark has-text-left has-text-justified is-size-4"><strong>Time to get on the forum.</strong></p>      
                        </article>
                    </div>
                    <div class="tile is-parent">
                        <article class="tile is-child box notification">
                        <div class="content">
                            <p className="has-text-left has-text-justified">
                                From knowing nothing about coding when starting on this journey 12 weeks ago, to being able to build and present this full-stack app today, I am proud to know that I have come a long way.                                
                                Even more so, I am eternally grateful to everyone who has stood by my side through all of my craziness.
                                <br/>
                                <br/>
                                <strong><u>Thank you to GA and our instructors</u></strong> - <em>Allen, Brock, Carson, Kenny and Isha.</em> I hope all of you know how indebted I am to your neverending dedication to push us, challenge us, but most of all, see us succeed. 
                                <br/>
                                <br/>
                                <strong><u>Thank you to my SEI-∞ fam</u></strong> for making this a ride I will never forget. Couldn't have done this without you all 🤙 <strong>Truly.</strong>
                                <br/>
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
