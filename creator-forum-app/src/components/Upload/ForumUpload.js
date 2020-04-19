import React from 'react';
import FeedbackContainer from '../../containers/FeedbackContainer/FeedbackContainer';
// import FeedbackForm from '../../components/Feedback/FeedbackForm';
import FeedbackApi from '../../api/FeedbackApi';
import foryou from '../../images/for-you-120.png';
import './ForumUpload.css';

class ForumUpload extends React.Component {
    state = {
        showUpdate: false,
        showDelete: false,
        // editButtonStyle: true,
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

    // user posts new feedback
    updateFeedbackContainer = () => {
        FeedbackApi.feedbackIndex(this.props.upload._id)
        .then(res => {
                let feedback = res.data;
                feedback.reverse();
                this.setState({
                    feedback: feedback,
            })}
        );
    }

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
                    <div className="content">
                        <p className="has-text-black">
                        <strong>{this.props.upload.title}</strong>
                        <br/>
                        <strong><a href={this.props.upload.link}>View Work</a></strong>
                        <br/>
                        {this.props.upload.body}
                        </p>
                    </div>
                    {/* <nav className="level is-mobile">
                        <div className="level-left">
                        </div>
                    </nav> */}
                    </div>
                </article>
                <br/>
                <FeedbackContainer 
                    updateFeedbackContainer={this.updateFeedbackContainer} 
                    upload={this.props.upload} 
                    loggedInUser={this.props.loggedInUser} 
                />
            </div>
        )
    }

}

export default ForumUpload;