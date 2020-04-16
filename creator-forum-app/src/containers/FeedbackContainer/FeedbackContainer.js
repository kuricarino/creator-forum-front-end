import React from 'react';
// import { Route } from 'react-router-dom';
// import UploadApi from '../../api/UploadApi';
// import Upload from '../../components/Upload/Upload';
import ForumUpload from '../../components/Upload/ForumUpload';
import Feedback from '../../components/Feedback/Feedback';
import FeedbackForm from '../../components/Feedback/FeedbackForm';
import FeedbackApi from '../../api/FeedbackApi';
// import UploadForm from '../../components/Upload/UploadForm';
// import './UploadContainer.css';

class FeedbackContainer extends React.Component {

    state = {
        feedback: [],
        // pathName: '',
        // show: false,
        // buttonStyle: true,
    }

    // // changes + button to red (would want to have x)
    // showUploadForm = (event) => {
    //     console.log('show/hide blank create form')
    //     this.setState({
    //         show: !this.state.show,
    //         buttonStyle: !this.state.buttonStyle
    //     });
    // }

    // // submits and closes create form
    // handleClose = (event) => {
    //     this.setState({
    //         show: !this.state.show
    //     });
    // };

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

    // // forum page
    // // shouldComponentUpdate(nextProps, nextState) {
    // //     console.log(`shouldComponentUpdate invoked`)
    // //     if (nextProps.uploads && nextProps.uploads.length !== this.props.uploads.length) {
    // //         return false;
    // //     }
    // //     return true;
    // // }

    // componentDidUpdate(prevProps, prevState) {
    //     console.log('updating');
    //     if (prevProps !== this.props) { 
            
    //         const pathName = window.location.pathname;

    //     UploadApi.uploadIndex()
    //     .then(res => {
    //         if (pathName === '/profile') {
    //             let userUpload = res.data.filter((upload) => {
    //                 return upload.user._id === this.props.id
    //             })
    //             userUpload.reverse();
    //             this.setState({
    //                 uploads: userUpload,
    //                 pathName: pathName
    //             });
    //         } 
    //         else {
    //             // forum component
    //             // let allUploads = res.data
    //             // allUploads.reverse();
    //             // res.reverse();
    //             // console.log('forum component')
    //             console.log(res.data);
    //             let allUploads = res.data;
    //             allUploads.reverse();
    //             this.setState({
    //                 uploads: allUploads,
    //                 pathName: pathName
    //             })
    //             }
            
    //         } 
    //         )
    //     }
    // }

    componentDidMount() {
        console.log('feedback container mounted');
        console.log(this.props.upload._id)
        FeedbackApi.feedbackIndex(this.props.upload._id)
        .then(res => {
            console.log(res.data);
            let feedback = res.data.filter((feedback) => {
                // console.log(feedback);
                return feedback.upload === this.props.upload._id
                console.log(feedback);
            })
            // let feedback = res.data;
            // console.log(res);
            feedback.reverse();
            this.setState({
                feedback: feedback,
        })}
        );
    }

    render() {
        let allFeedback = this.state.feedback;
        console.log(this.state.feedback);
        console.log(`where is this?`);
        // user can only post feedback on work they DID NOT upload
        if (this.props.loggedInUser === this.props.upload.user._id) {
            return (
                <div className="container">
                    <div className="content ">
                    <span className="icon is-small">
                        <i className="fas fa-comment" data-fa-transform="flip-h" aria-hidden="true"></i>
                    </span>
                    {this.state.feedback && this.state.feedback.map(item => {
                    return <Feedback feedback={item.body} key={item._id} userId={this.props.id} updateUploadContainer={this.updateUploadContainer} uploadId={this.props.upload._id}/>
                    })}
                    </div>
                </div>
            )
        }
        return (
            
            <div className="container">
                <div className="content">
                <span className="icon is-small">
                    <i className="fas fa-comment" data-fa-transform="flip-h" aria-hidden="true"></i>
                </span>
                {this.state.feedback && this.state.feedback.map(item => {
                    return <Feedback feedback={item.body} key={item._id} userId={this.props.id} updateUploadContainer={this.updateUploadContainer} uploadId={this.props.upload._id} />
                })}
                <FeedbackForm uploadId={this.props.upload._id} loggedInUser={this.props.loggedInUser}  updateFeedbackContainer={this.updateFeedbackContainer} />
                </div>
            </div>
            
        )
    }
}

export default FeedbackContainer;