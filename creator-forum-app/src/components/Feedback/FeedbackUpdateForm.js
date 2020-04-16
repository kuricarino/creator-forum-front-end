import React from 'react';
import FeedbackApi from '../../api/FeedbackApi';

class FeedbackUpdateForm extends React.Component {
    state = {
        feedback: ''
    }
    // state = {
    //     input: document.getElementsByClassName("field").value
    // }

    // field validation

    // submitFeedback = (event) => {
    //     event.preventDefault();
    //     // console.log(this.props.uploadId);
    //     // if (this.validateFields()) {
    //         console.log(document.getElementById(`${this.props.uploadId}`).value);
    //         FeedbackApi.feedbackCreate({
    //             body: document.getElementById(`${this.props.uploadId}`).value,
    //             upload: this.props.uploadId,
    //             user: this.props.loggedInUser
    //         })
    //         .then(res => {
    //             console.log('feedback posted on backend');
    //             this.props.updateFeedbackContainer();
    //         })
    //         // this.setState({
    //         //     input: document.getElementById(`${this.props.uploadId}`).value
    //         // })
    //         // this.clearForm();
    //     }
    
    // clearForm() {
    //     this.setState({
    //         input: ''
    //     })
    // }
    onChange = (event) => {
        this.setState({
            feedback: event.target.value,
        })
    }

    render() {
        return (
            <div className="container" style={this.props.style} >
                <div className="field">
                    <div className="control">
                        <textarea className="input has-text-black" name="body" id={this.props.uploadId} type="text" onChange={this.onChange} value={this.state.feedback} defaultValue="" />
                    </div>
                </div>
                <button className="button is-rounded is-link is-outlined" id="submit-button" onClick={this.submitFeedback}>Edit</button>
            </div>
        )
    }
}

export default FeedbackUpdateForm;