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

    // state = {
    //     feedback: this.props.upload.feedback,
    //     pathName: '',
    //     show: false,
    //     buttonStyle: true,
    // }

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

    // // after creating a new upload or updating an upload
    // updateUploadContainer = () => {
    //     console.log('UploadContainer rendered');
    //     UploadApi.uploadIndex()
    //     .then(res => {
    //             let userUpload = res.data.filter((upload) => {
    //                 return upload.user._id === this.props.id
    //             })
    //             userUpload.reverse();
    //             this.setState({
    //                 uploads: userUpload,
    //         })}
    //     );
    // }

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

    render() {
        // user can only post feedback on work they DID NOT upload
        if (this.props.loggedInUser === this.props.upload.user._id) {
            return (
                <div className="container">
                    <div className="content ">
                    {/* <a className="level-item" aria-label="comments"> */}
                    <span className="icon is-small">
                        <i className="fas fa-comment" data-fa-transform="flip-h" aria-hidden="true"></i>
                    </span>
                    <Feedback upload={this.props.upload} loggedInUser={this.props.loggedInUser} />
                    {/* <UploadForm userId={this.props.id} updateUploadContainer={this.updateUploadContainer} closeUpdateForm={this.handleClose} show={this.state.show} /> */} 
                    </div>
                </div>
            )
        }
        return (
            <div className="container">
                <div className="content ">
                {/* <a className="level-item" aria-label="comments"> */}
                <span className="icon is-small">
                    <i className="fas fa-comment" data-fa-transform="flip-h" aria-hidden="true"></i>
                </span>
                <Feedback upload={this.props.upload} loggedInUser={this.props.loggedInUser} />
                <FeedbackForm upload={this.props.upload} loggedInUser={this.props.loggedInUser}  updateUploadContainer={this.props.updateUploadContainer} />
                {/* <UploadForm userId={this.props.id} updateUploadContainer={this.updateUploadContainer} closeUpdateForm={this.handleClose} show={this.state.show} /> */} 
                </div>
            </div>
            
        )
    }
}

export default FeedbackContainer;