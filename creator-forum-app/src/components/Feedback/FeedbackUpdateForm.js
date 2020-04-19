import React from 'react';
import FeedbackApi from '../../api/FeedbackApi';

class FeedbackUpdateForm extends React.Component {
    state = {
        feedback: '',
    }

    onChange = (event) => {
        this.setState({
            feedback: event.target.value,
        })
    }

    editFeedback = (event) => {
        event.preventDefault();
            FeedbackApi.feedbackUpdate({
                body: document.getElementById(`${this.props.feedback._id}`).value,
                upload: this.props.feedback.upload,
                user: this.props.feedback.user,
                _id: this.props.feedback._id
            })
            .then(res => {
                this.props.updateFeedbackContainer();
            })
            this.setState({
                feedback: '',
            })
    }

    render() {
        return (
            <div className="container" style={this.props.style} >
                <div className="field">
                    <div className="control">
                        <textarea className="input has-text-black" name="body" id={this.props.feedback._id} type="text" onChange={this.onChange} value={this.state.feedback} defaultValue={this.props.feedback.body} />
                    </div>
                </div>
                <button className="button is-rounded is-link is-outlined" id="submit-button" onClick={this.editFeedback}>Edit</button>
            </div>
        )
    }
}

export default FeedbackUpdateForm;