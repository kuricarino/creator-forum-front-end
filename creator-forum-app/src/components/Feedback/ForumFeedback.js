import React from 'react';
import FeedbackUpdateForm from './FeedbackUpdateForm';
import FeedbackDeleteMessage from './FeedbackDeleteMessage';
import './ForumFeedback.css';

class ForumFeedback extends React.Component {
    state = {
        formStyle: {
            display: 'none',
        },
        showDelete: false
    }

    showDeleteMessage = (event) => {
        this.setState({
            showDelete: !this.state.showDelete,
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

    toggleUpdateFeedbackForm = () => {
        this.state.formStyle.display === 'block'
        ? this.setState({ formStyle: {display: 'none' } })
        : this.setState({ formStyle: {display: 'block'} });
    }

    render() {
        if (this.props.feedback.user === this.props.loggedInUser) {
        return (
            <>
            <div className="content is-narrow-mobile" id="feedback-forum-content">
                <p className="has-text-grey-dark is-size-5">
                <i className="far fa-comment" data-fa-transform="flip-h" aria-hidden="true" id="comment-bubble-icon"></i>
                <p> {this.props.feedback.body}</p>
                </p>
                    <nav className="level is-mobile">
                        <div className="level-right">
                        <a className="level-item" aria-label="edit">
                            <span className="icon is-small" onClick={this.toggleUpdateFeedbackForm} >
                            <i className="fas fa-edit" aria-hidden="true"></i>
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
                updateFeedbackContainer={this.props.updateFeedbackContainer}
            />
            <br/>
            <FeedbackDeleteMessage 
                feedback={this.props.feedback}
                showDeleteState={this.state.showDelete} 
                updateFeedbackContainer={this.props.updateFeedbackContainer} 
                onClose={this.handleCloseDeleteMessage} 
            />
            <br/>
            </>
        )
        }
        return (
            <>
            <div className="content" id='forum-feedback'>
                <p className="has-text-grey-dark is-size-5">
                    <i className="far fa-comment" data-fa-transform="flip-h" aria-hidden="true" id="comment-bubble-icon"></i>
                    <p> {this.props.feedback.body}</p>
                </p>
            </div>
            </>
        )
    }
}

export default ForumFeedback;