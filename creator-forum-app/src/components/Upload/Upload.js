import React from 'react';
import FeedbackApi from '../../api/FeedbackApi';
import UploadUpdateForm from './UploadUpdateForm';
import DeleteMessage from './DeleteMessage';
import ProfileFeedbackContainer from '../../containers/FeedbackContainer/ProfileFeedbackContainer';
import foryou from '../../images/for-you-120.png';
import './Upload.css';

class Upload extends React.Component {
    state = {
        feedback: {},
        showUpdate: false,
        showDelete: false,
        showFeedback: false,
        editButtonStyle: false,
        deleteButtonStyle: false,
        feedbackButtonStyle: false
    }

    // *********************** //
    //    upload on profile    //
    // *********************** //
    
    showUpdateForm = (event) => {
        this.setState({
            showUpdate: !this.state.showUpdate,
            showDelete: this.state.showDelete,
            showFeedback: this.state.showFeedback
            // editButtonStyle: !this.state.editButtonStyle
        });
    };

    updateButton = () => {
        console.log('edit button clicked')
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
            // editButtonStyle: !this.state.deleteButtonStyle
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

    showFeedback = (event) => {
        this.setState({
            showFeedback: !this.state.showFeedback,
            // editButtonStyle: !this.state.feedbackButtonStyle
        });
    };

    feedbackButton = () => {
        console.log('show feedback')
        this.showFeedback()
    }

    componentDidMount = () => {
        console.log('new feedback added');
        FeedbackApi.feedbackIndex(this.props.upload._id)
        .then(res => {
                console.log(res.data);
                // let feedback = res.data.filter((upload) => {
                //     return upload.feedback === this.props.upload._id
                // })
                let feedback = res.data;
                feedback.reverse();
                this.setState({
                    feedback: feedback,
            })}
        );
    }

    render () {
        // let editButtonClass = this.state.editButtonStyle ? "icon is-small has-text-link" : "icon is-small"
        // let deleteButtonClass = this.state.deleteButtonStyle ? "icon is-small has-text-link" : "icon is-small"
        // let feedbackButtonClass = this.state.feedbackButtonStyle ? "icon is-small has-text-link" : "icon is-small"

            return (
                <div className="box" id="profile-upload-box">
                <article className="media">
                    <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={foryou} alt="user upload"/>
                    </figure>
                    </div>
                    <div className="media-content">
                    <div className="content">
                        <p>
                        <strong>{this.props.upload.title}</strong>
                        <br/>
                        <strong><a className="has-text-link" id="profile-upload-link" href={this.props.upload.link}>View Work</a></strong>
                        <br/>
                        {this.props.upload.body}
                        </p>
                    <nav className="level is-mobile">
                        <div className="level-left">
                        <a className="level-item" aria-label="edit">
                            <span className="icon is-small" onClick={this.updateButton} >
                                <i className="fas fa-edit" aria-hidden="true"></i>
                            </span>
                        </a>
                        <a className="level-item" aria-label="delete">
                            <span className="icon is-small" onClick={this.deleteButton} >
                                <i className="fas fa-trash" aria-hidden="true"></i>
                            </span>
                        </a>
                        <a className="level-item" aria-label="comments">
                            <span className="icon is-small" onClick={this.feedbackButton}>
                                <i className="fas fa-comment" data-fa-transform="flip-h" aria-hidden="true"></i>
                            </span>
                        </a>
                        </div>
                    </nav>
                    </div>
                    </div>
                </article>
                <br/>
                <UploadUpdateForm 
                    showUpdateState={this.state.showUpdate} 
                    updateUploadContainer={this.props.updateUploadContainer} 
                    onClose={this.handleCloseUpdateForm} 
                    upload={this.props.upload} 
                    editButtonStyle={this.state.editButtonStyle} 
                />
                <DeleteMessage 
                    showDeleteState={this.state.showDelete} 
                    updateUploadContainer={this.props.updateUploadContainer} 
                    onClose={this.handleCloseDeleteMessage} 
                    upload={this.props.upload}
                />
                <ProfileFeedbackContainer
                    showFeedbackState={this.state.showFeedback}
                    upload={this.props.upload}
                    loggedInUser={this.props.userId} 
                />
                </div>
            )
    }

}

export default Upload;