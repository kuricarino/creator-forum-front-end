import React from 'react';
// import UploadUpdateForm from './UploadUpdateForm';
// import DeleteMessage from './DeleteMessage';
import FeedbackContainer from '../../containers/FeedbackContainer/FeedbackContainer';
import FeedbackForm from '../../components/Feedback/FeedbackForm';
import FeedbackApi from '../../api/FeedbackApi';

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

    // componentDidMount() {
    //     console.log('GET feedback rendered on forum page');
    //     FeedbackApi.feedbackIndex(this.props.upload._id)
    //     .then(res => {
    //             console.log(res.data);
    //             // let feedback = res.data.filter((upload) => {
    //             //     return upload.feedback === this.props.upload._id
    //             // })
    //             let feedback = res.data;
    //             feedback.reverse();
    //             this.setState({
    //                 feedback: feedback,
    //         })}
    //     );
    // }

    // user posts new feedback
    updateFeedbackContainer = () => {
        console.log('new feedback added');
        FeedbackApi.feedbackIndex(this.props.upload._id)
        .then(res => {
                console.log(res.data);
                // let feedback = res.data.filter((upload) => {
                //     return upload.feedback === this.props.upload._id
                // })
                let feedback = res.data;
                feedback.reverse();
                this.setState({
                    feedback: feedback,
            })}
        );
    }


    render () {
        // let editButtonClass = this.state.editButtonStyle ? "icon is-small" : "icon is-small has-text-link"
        // let extraContent = []
        // if (this.props.upload.userId === this.props.userId) {
        //     extraContent.push(
        //         <>
        //         <a className="level-item" aria-label="edit">
        //             <span className="icon is-small" onClick={this.updateButton} >
        //             <i className="fas fa-edit" aria-hidden="true"></i>
        //             {/* <p>Edit</p> */}
        //             </span>
        //         </a>
        //         <a className="level-item" aria-label="delete">
        //             <span className="icon is-small" onClick={this.deleteButton} >
        //             <i className="fas fa-trash" aria-hidden="true"></i>
        //             </span>
        //         </a>
        //         </>
        //     );
        // }
        console.log(this.state.feedback)
        // forum page
        return (
            
            <div className="box">
                <article className="media">
                    <div className="media-left">
                    <figure className="image is-64x64">
                        <img src="https://img.icons8.com/ios-glyphs/150/000000/for-you--v1.png" alt="user upload"/>
                    </figure>
                    </div>
                    <div className="media-content">
                    <div className="content">
                        <p className="has-text-black">
                        <strong>{this.props.upload.title}</strong>
                        <br/>
                        {/* make this a link */}
                        <strong><a href={this.props.upload.link}>View Work</a></strong>
                        <br/>
                        {this.props.upload.body}
                        </p>
                    </div>
                    <nav className="level is-mobile">
                        <div className="level-left">
                        </div>
                    </nav>
                    </div>
                </article>
                <br/>
                <FeedbackContainer 
                    updateFeedbackContainer={this.updateFeedbackContainer} 
                    upload={this.props.upload} 
                    loggedInUser={this.props.loggedInUser} 
                />
                {/* {this.state.feedback && this.state.feedback.map(item => {
                    return <FeedbackForm upload={this.props.upload} key={item._id} loggedInUser={this.props.loggedInUser}  updateFeedbackContainer={this.updateFeedbackContainer} />
                })} */}
                {/* {this.state.feedback && this.state.feedback.map(item => {
                    return <FeedbackForm upload={this.props.upload} key={item._id} loggedInUser={this.props.loggedInUser} />
                })} */}
                {/* <UploadUpdateForm showUpdateState={this.state.showUpdate} updateUploadContainer={this.props.updateUploadContainer} onClose={this.handleCloseUpdateForm} upload={this.props.upload} editButtonStyle={this.state.editButtonStyle} /> */}
                {/* <DeleteMessage showDeleteState={this.state.showDelete} updateUploadContainer={this.props.updateUploadContainer} onClose={this.handleCloseDeleteMessage} upload={this.props.upload}/> */}
                </div>
        )
    }

}

export default ForumUpload;