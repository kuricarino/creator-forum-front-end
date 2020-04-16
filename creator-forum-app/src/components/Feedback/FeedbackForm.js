import React from 'react';
import FeedbackApi from '../../api/FeedbackApi';

class FeedbackForm extends React.Component {

    // field validation

    // componentDidMount() {
    //     console.log('feedback container mounted');
    //     console.log(this.props.upload._id)
    //     FeedbackApi.feedbackIndex(this.props.upload._id)
    //     .then(res => {
    //         console.log(res.data);
    //         let feedback = res.data.filter((feedback) => {
    //             // console.log(feedback);
    //             return feedback.upload === this.props.upload._id
    //             console.log(feedback);
    //         })
    //         // let feedback = res.data;
    //         // console.log(res);
    //         feedback.reverse();
    //         this.setState({
    //             feedback: feedback,
    //     })}
    //     );
    // }

    submitFeedback = (event) => {
        event.preventDefault();
        // console.log(this.props.uploadId);
        // if (this.validateFields()) {
            console.log(document.getElementById(`${this.props.uploadId}`).value);
            FeedbackApi.feedbackCreate({
                body: document.getElementById(`${this.props.uploadId}`).value,
                uploadId: this.props.uploadId,
                user: this.props.loggedInUser
            })
            .then(res => {
                console.log('feedback posted on backend');
                this.props.updateFeedbackContainer();
            })
        }

    render() {
        return (
            <div className="container">
                <div className="field">
                    <div className="control">
                        <textarea className="input has-text-black" name="body" id={this.props.uploadId} type="text" defaultValue="" />
                    </div>
                </div>
                <button className="button is-rounded is-link is-outlined" id="submit-button" onClick={this.submitFeedback}>Give Feedback</button>
            </div>
        )
    }
}

export default FeedbackForm;