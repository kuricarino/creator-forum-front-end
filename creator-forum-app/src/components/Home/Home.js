import React from 'react';
import './Home.css';

const Home = (props) => {
    return (
        <div className="hero-body">
            <div className="container has-text-centered">
                <h1 className="title is-size-1 has-text-white has-text-left has-text-justified is-uppercase">
                    Creator<br></br>Forum
                </h1>
                <h2 className="subtitle is-size-3 has-text-white has-text-left has-text-justified has-text-weight-semibold">
                    A safe space to share your art<br></br>and get thoughtful feedback
                </h2>
            </div>
        </div>
    )
}

export default Home;