import React from 'react';
import FeedbackUpdateForm from '../../components/Feedback/FeedbackUpdateForm';
import FeedbackDeleteMessage from '../../components/Feedback/FeedbackDeleteMessage';
// import FeedbackApi from '../../api/FeedbackApi';
// import Upload from '../../components/Upload/Upload';

class Feedback extends React.Component {
    state = {
        formStyle: {
            display: 'none',
        },
        showDelete: false,
    }

    // field validation

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

    // for editing feedback
    toggleBodyForm = () => {
        this.state.formStyle.display === 'block'
        ? this.setState({ formStyle: {display: 'none' } })
        : this.setState({ formStyle: {display: 'block'} });
    }

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
                updateFeedbackContainer={this.props.updateFeedbackContainer}
            />
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