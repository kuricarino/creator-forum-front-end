import React from 'react';

class Upload extends React.Component {
    state = {}

    render () {
        const pathName = window.location.pathname;

        if (pathName === '/profile') {
            return (
                <div className="box">
                <article className="media">
                    <div className="media-left">
                    <figure className="image is-64x64">
                        {/* <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image"/> */}
                        {/* <img src="https://img.icons8.com/ios/100/000000/exhibition.png"/> */}
                        {/* <img src="https://img.icons8.com/dotty/150/000000/for-you.png" alt="user upload"/> */}
                        {/* <img src="https://img.icons8.com/material/150/000000/for-you.png"/> */}
                        {/* <img src="https://img.icons8.com/ios-filled/150/000000/for-you.png"/> */}
                        {/* <img src="https://img.icons8.com/material-rounded/150/000000/for-you.png"/> */}
                        <img src="https://img.icons8.com/ios-glyphs/150/000000/for-you--v1.png" alt="user upload"/>
                        {/* <img src="https://img.icons8.com/material-outlined/150/000000/for-you.png"/> */}
                        {/* <img src="https://img.icons8.com/plasticine/100/000000/content.png" alt="upload"/> */}
                    </figure>
                    </div>
                    <div className="media-content">
                    <div className="content">
                        <p>
                        <strong>{this.props.upload.title}</strong>
                        <br/>
                        {this.props.upload.body}
                        </p>
                    </div>
                    <nav className="level is-mobile">
                        <div className="level-left">
                        <a className="level-item" aria-label="edit">
                            <span className="icon is-small">
                            <i className="fas fa-edit" aria-hidden="true"></i>
                            {/* <p>Edit</p> */}
                            </span>
                        </a>
                        <a className="level-item" aria-label="delete">
                            <span className="icon is-small">
                            <i className="fas fa-trash" aria-hidden="true"></i>
                            </span>
                        </a>
                        <a className="level-item" aria-label="comments">
                            <span className="icon is-small">
                            <i className="fas fa-comment" data-fa-transform="flip-h" aria-hidden="true"></i>
                            </span>
                        </a>
                        </div>
                    </nav>
                    </div>
                </article>
                </div>
            )
        }
    }

}

export default Upload;