import React from 'react';
import FeedbackApi from '../../api/FeedbackApi';
import UploadUpdateForm from './UploadUpdateForm';
import DeleteMessage from './DeleteMessage';
import ProfileFeedbackContainer from '../../containers/FeedbackContainer/ProfileFeedbackContainer';
import './Upload.css';

class Upload extends React.Component {
    state = {
        feedback: {},
        showUpdate: false,
        showDelete: false,
        showFeedback: false,
        // editButtonStyle: true,
    }

    // *********************** //
    //    upload on profile    //
    // *********************** //
    
    showUpdateForm = (event) => {
        this.setState({
            showUpdate: !this.state.showUpdate,
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
            // editButtonStyle: !this.state.editButtonStyle
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
            // editButtonStyle: !this.state.editButtonStyle
        });
    };

    feedbackButton = () => {
        console.log('show feedback')
        this.showFeedback()
    }

    // handleCloseFeedback = (event) => {
    //     this.setState({
    //         showFeedback: !this.state.showFeedback
    //     });
    // }

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
        // let editButtonClass = this.state.editButtonStyle ? "icon is-small" : "icon is-small has-text-link"

        // const pathName = window.location.pathname;

        // if (pathName === '/profile') {
            return (
                <div className="box" id="profile-upload-box">
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
                        <strong><a className="has-text-link" id="profile-upload-link" href={this.props.upload.link}>Your Link</a></strong>
                        <br/>
                        {this.props.upload.body}
                        </p>
                    </div>
                    <nav className="level is-mobile">
                        <div className="level-left">
                        <a className="level-item" aria-label="edit">
                            <span className="icon is-small" onClick={this.updateButton} >
                            <i className="fas fa-edit" aria-hidden="true"></i>
                            {/* <p>Edit</p> */}
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
                    onClose={this.handleCloseFeedback}
                    upload={this.props.upload}
                    loggedInUser={this.props.userId} 
                />
                </div>
            )
    }

}

export default Upload;