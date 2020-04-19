import React from 'react';
import ForumFeedback from '../../components/Feedback/ForumFeedback';
import FeedbackForm from '../../components/Feedback/FeedbackForm';
import FeedbackApi from '../../api/FeedbackApi';
import './FeedbackContainer.css';

class FeedbackContainer extends React.Component {

    state = {
        feedback: [],
        // pathName: '',
        // show: false,
        // buttonStyle: true,
    }

    updateFeedbackContainer = () => {
        FeedbackApi.feedbackIndex(this.props.upload._id)
        .then(res => {
            let feedback = res.data.filter((feedback) => {
                return feedback.upload === this.props.upload._id
            })
            this.setState({
                feedback: feedback,
        })}
        );
    }

    componentDidMount() {
        FeedbackApi.feedbackIndex(this.props.upload._id)
        .then(res => {
            let feedback = res.data.filter((feedback) => {
                return feedback.upload === this.props.upload._id
            })
            this.setState({
                feedback: feedback,
        })}
        );
    }

    render() {
        // user can only post feedback on work they DID NOT upload
        if (this.props.loggedInUser === this.props.upload.user._id) {
            return (
                <div className="container is-narrow-mobile" id="feedback-container">
                    <div className="content is-narrow-mobile">
                    {this.state.feedback && this.state.feedback.map(item => {
                    return <ForumFeedback 
                        feedback={item} 
                        key={item._id}
                        upload={this.props.upload} 
                        userId={this.props.upload.user._id} 
                        updateUploadContainer={this.updateUploadContainer} 
                        updateFeedbackContainer={this.updateFeedbackContainer} 
                        uploadId={this.props.upload._id} loggedInUser={this.props.loggedInUser} 
                    />
                    })}
                    </div>
                </div>
            )
        }
        return (           
            <div className="container" id="feedback-container">
                <div className="content">
                {this.state.feedback && this.state.feedback.map(item => {
                    return <ForumFeedback 
                                feedback={item} 
                                key={item._id}
                                upload={this.props.upload} 
                                userId={this.props.upload.user._id} 
                                updateUploadContainer={this.updateUploadContainer} 
                                updateFeedbackContainer={this.updateFeedbackContainer} 
                                uploadId={this.props.upload._id} 
                                loggedInUser={this.props.loggedInUser} 
                            />
                })}
                <FeedbackForm 
                    feedback={this.state.feedback} 
                    uploadId={this.props.upload._id} 
                    loggedInUser={this.props.loggedInUser} 
                    updateFeedbackContainer={this.updateFeedbackContainer} 
                />
                </div>
            </div> 
        )
    }
}

export default FeedbackContainer;