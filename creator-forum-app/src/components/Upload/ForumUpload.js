import React from 'react';
import FeedbackContainer from '../../containers/FeedbackContainer/FeedbackContainer';
import foryou from '../../images/for-you-120.png';
import './ForumUpload.css';

class ForumUpload extends React.Component {
    state = {
        showUpdate: false,
        showDelete: false,
        feedback: {}
    }

    // *********************** //
    //        forum view       //
    // *********************** //
    
    showUpdateForm = (event) => {
        this.setState({
            showUpdate: !this.state.showUpdate,
            editButtonStyle: !this.state.editButtonStyle
        });
    };

    updateButton = () => {
        this.showUpdateForm()
    }

    handleCloseUpdateForm = (event) => {
        this.setState({
            showUpdate: !this.state.showUpdate
        });
    }

    showDeleteMessage = (event) => {
        this.setState({
            showDelete: !this.state.showDelete,
            editButtonStyle: !this.state.editButtonStyle
        });
    }

    deleteButton = () => {
        this.showDeleteMessage()
    }

    handleCloseDeleteMessage = (event) => {
        this.setState({
            showDelete: !this.state.showDelete
        });
    };

    render () {
        return (
            <div className="box is-narrow-mobile forum-upload-box">
                <article className="media is-narrow-mobile">
                    <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={foryou} alt="user upload"/>
                    </figure>
                    </div>
                    <div className="media-content">
                    <div className="content is-size-5">
                        <p className="has-text-black">
                        <strong className="is-size-4">{this.props.upload.title}</strong>
                        <br/>
                        <em className="is-size-5">{this.props.upload.category}</em>
                        <br/>
                        <strong><a className="is-size-5" href={this.props.upload.link}>View Work</a></strong>
                        <br/>
                        {this.props.upload.body}
                        </p>
                    </div>
                    </div>
                </article>
                <br/>
                <FeedbackContainer  
                    upload={this.props.upload} 
                    loggedInUser={this.props.loggedInUser} 
                />
            </div>
        )
    }

}

export default ForumUpload;