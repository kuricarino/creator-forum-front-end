import React from 'react';
import FeedbackUpdateForm from '../../components/Feedback/FeedbackUpdateForm';
// import FeedbackApi from '../../api/FeedbackApi';
// import Upload from '../../components/Upload/Upload';

class Feedback extends React.Component {

    state = {
        formStyle: {
            display: 'none',
        }
    }

    toggleBodyForm = () => {
        this.state.formStyle.display === 'block'
        ? this.setState({ formStyle: {display: 'none' } })
        : this.setState({ formStyle: {display: 'block'} });
    }

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
    // passed as props to feedback from feedback container
        // updateFeedbackContainer={this.updateFeedbackContainer}
        // updateFeedbackContainer = () => {
        //     console.log('new feedback and component should re-render');
        //     FeedbackApi.feedbackIndex(this.props.upload._id)
        //     .then(res => {
        //         let feedback = res.data.filter((feedback) => {
        //             return feedback.upload === this.props.upload._id
        //         })
        //         feedback.reverse();
        //         this.setState({
        //             feedback: feedback,
        //     })}
        //     );
        // }

    // updateButton() {
    //     console.log('update comment on forum clicked');
    //     this.toggleBodyForm();
    // }

    deleteButton() {
        console.log('deleted comment on forum clicked')
    }

    render() {
        // if (!this.props.show) {
        //     return null;
        // }
        if (this.props.feedback.user === this.props.loggedInUser) {
        return (
            <>
            <div className="content">
                <p className="has-text-black">
                    <strong>{this.props.feedback.body}</strong>
                </p>
                    <nav className="level is-mobile">
                        <div className="level-right">
                        <a className="level-item" aria-label="edit">
                            <span className="icon is-small" onClick={this.toggleBodyForm} >
                            <i className="fas fa-edit" aria-hidden="true"></i>
                            {/* <p>Edit</p> */}
                            </span>
                        </a>
                        <a className="level-item" aria-label="delete">
                            <span className="icon is-small" onClick={this.deleteButton} >
                            <i className="fas fa-trash" aria-hidden="true"></i>
                            </span>
                        </a>
                        </div>
                    </nav>
            </div>
            <FeedbackUpdateForm 
                feedback={this.props.feedback}
                style={this.state.formStyle} 
                toggleBodyForm={this.props.toggleBodyForm}
            />
            <br/>
            </>
        )
        }
        return (
            <>
            <div className="content">
                <p className="has-text-black">
                    <strong>{this.props.feedback.body}</strong>
                </p>
            </div>
            </>
        )
    }
}

export default Feedback;