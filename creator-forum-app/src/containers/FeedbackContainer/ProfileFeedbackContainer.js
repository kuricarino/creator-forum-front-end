import React from 'react';
import ProfileFeedback from '../../components/Feedback/ProfileFeedback';
import FeedbackApi from '../../api/FeedbackApi';
import './FeedbackContainer.css';


class ProfileFeedbackContainer extends React.Component {

    state = {
        feedback: [],
    }

    // new feedback posted
    updateFeedbackContainer = () => {
        console.log('new feedback and component should re-render');
        FeedbackApi.feedbackIndex(this.props.upload._id)
        .then(res => {
            let feedback = res.data.filter((feedback) => {
                return feedback.upload === this.props.upload._id
            })
            feedback.reverse();
            this.setState({
                feedback: feedback,
        })}
        );
    }

    componentDidMount() {
        console.log('feedback container mounted');
        console.log(this.props.upload._id)
        FeedbackApi.feedbackIndex(this.props.upload._id)
        .then(res => {
            console.log(res.data);
            let feedback = res.data.filter((feedback) => {
                return feedback.upload === this.props.upload._id
                console.log(feedback);
            })
            feedback.reverse();
            this.setState({
                feedback: feedback,
        })}
        );
    }

    render() {
        if (!this.props.showFeedbackState) {
            return null;
        }
        // user can only post feedback on work they DID NOT upload
        if (this.props.loggedInUser === this.props.upload.user._id) {
            return (
                <div className="container is-narrow-mobile" id="feedback-container">
                    <div className="content is-narrow-mobile">
                    {this.state.feedback && this.state.feedback.map(item => {
                    return <ProfileFeedback 
                        showFeedbackState={this.props.showFeedback}
                        feedback={item.body} 
                        key={item._id} 
                        userId={this.props.upload.user._id} 
                        updateUploadContainer={this.updateUploadContainer} 
                        updateFeedbackContainer={this.updateFeedbackContainer} 
                        uploadId={this.props.upload._id} 
                    />
                    })}
                    </div>
                </div>
            )
        }
    }
}

export default ProfileFeedbackContainer;