import React from 'react';
import FeedbackForm from '../../components/Feedback/FeedbackForm';
// import FeedbackApi from '../../api/FeedbackApi';
// import Upload from '../../components/Upload/Upload';

class Feedback extends React.Component {

    // field validation

    // submitNewUpload = (event) => {
    //     event.preventDefault();
    //     // if (this.validateFields()) {
    //         UploadApi.uploadCreate({
    //             feedback: document.getElementById('title').value,
    //             user: this.props.userId
    //         })
    //         .then(res => {
    //             // from Upload Container which will re-render container to include new upload
    //             this.props.updateUploadContainer();
    //             this.props.closeUpdateForm && this.props.closeUpdateForm(event);
    //         })
    //     //}
    // }

    render() {
        // if (!this.props.show) {
        //     return null;
        // }
        return (
            <>
            <div className="content">
                <p className="has-text-black">
                    <strong>{this.props.feedback}</strong>
                </p>
            </div>
            {/* <FeedbackForm uploadId={this.props.uploadId} loggedInUser={this.props.loggedInUser}  updateFeedbackContainer={this.updateFeedbackContainer} /> */}
            </>
        )
    }
}

export default Feedback;