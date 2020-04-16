import React from 'react';
// import { Route } from 'react-router-dom';
import UploadApi from '../../api/UploadApi';
import FeedbackApi from '../../api/FeedbackApi';
import Upload from '../../components/Upload/Upload';
import ForumUpload from '../../components/Upload/ForumUpload';
import UploadForm from '../../components/Upload/UploadForm';
import './UploadContainer.css';

class UploadContainer extends React.Component {
    state = {
        // uploads
        uploads: this.props.uploads,
        feedback: {},
        pathName: '',
        show: false,
        buttonStyle: true,
        // feedback
        // feedback: {},
        // showFeedback: ''
    }

    // *********************** //
    //    profile component    //
    // *********************** //

    // changes + button to red (would want to have x)
    showUploadForm = (event) => {
        console.log('show/hide blank create form')
        this.setState({
            show: !this.state.show,
            buttonStyle: !this.state.buttonStyle
        });
    }

    // submits and closes create form
    handleClose = (event) => {
        this.setState({
            show: !this.state.show
        });
    };

    // after creating a new upload or updating an upload
    updateUploadContainer = () => {
        console.log('UploadContainer rendered');
        UploadApi.uploadIndex()
        .then(res => {
                let userUpload = res.data.filter((upload) => {
                    return upload.user._id === this.props.id
                })
                userUpload.reverse();
                this.setState({
                    uploads: userUpload,
            })}
        );
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('page refresh');
        if (prevProps !== this.props) { 
            
            const pathName = window.location.pathname;

        UploadApi.uploadIndex()
        .then(res => {
            if (pathName === '/profile') {
                let userUpload = res.data.filter((upload) => {
                    return upload.user._id === this.props.id
                })
                userUpload.reverse();
                this.setState({
                    uploads: userUpload,
                    pathName: pathName
                });
            } 
            else {
                console.log('forum component')
                let allUploads = res.data;
                allUploads.reverse();
                this.setState({
                    uploads: allUploads,
                    pathName: pathName
                })
                }
            
            } 
            )
        }
    }

    // *********************** //
    //      forum component    //
    // *********************** //

    updateFeedbackOnForum = () => {
        console.log('Feedback on Forum re-rendered');
        UploadApi.uploadIndex()
        .then(res => {
                let allUploads = res.data;
                allUploads.reverse();
                this.setState({
                    uploads: allUploads,
            })}
        );
    }

    render() {
        let buttonClass = this.state.buttonStyle ? "icon has-text-link is-large" : "icon has-text-danger is-large"
        // let buttonDataTransform = this.state.buttonStyle ? "" : "rotate-90"
        let uploads = this.state.uploads;
        if (this.state.pathName === '/profile') {
            // user has no uploads
            if (uploads.length === 0) {
                return (
                    <div className="tile notification">
                        <div className="container">
                        <div className="content">
                            <p className="title has-text-grey-dark">Your Work</p>
                            <p className="subtitle has-text-grey-dark">Upload your work to the forum</p>
                            <UploadForm userId={this.props.id} updateUploadContainer={this.updateUploadContainer} closeUpdateForm={this.handleClose} show={this.state.show} />
                            <span className={buttonClass} onClick={event => this.showUploadForm()}> 
                            {/* or use has-text-info and change submit button */}
                                <i className="fas fa-lg fa-plus-circle" title="Click to add a new upload" aria-hidden="true"></i>
                            </span>
                        </div>
                        </div>
                    </div>
                )
            }
            return (
                <div className="tile notification">
                    <div className="container">
                    <div className="content ">
                    <h1 className="title has-text-grey-dark">Your Work</h1>
                    {uploads && uploads.map(upload => {
                        return <Upload upload={upload} key={upload._id} userId={this.props.id} updateUploadContainer={this.updateUploadContainer}/>
                    })}
                    <span className={buttonClass} onClick={event => this.showUploadForm()}>
                        <i className="fas fa-lg fa-plus-circle" title="Click to add a new upload" aria-hidden="true"></i>
                    </span>
                    <UploadForm userId={this.props.id} updateUploadContainer={this.updateUploadContainer} closeUpdateForm={this.handleClose} show={this.state.show} />
                    </div>
                    </div>
                </div>
            );
        };

        // *********************** //
        //      forum component    //
        // *********************** //
        console.log('rendering forum page')
        return (
        // logic for forum
            <div className="tile" id="forum-scroll">
                <div className="container">
                <div className="content ">
                {uploads && uploads.map(upload => {
                    return <ForumUpload upload={upload} key={upload._id} loggedInUser={this.props.userId} updateUploadsOnForum={this.updateUploadsOnForum}/>
                })}
                {/* <span className={buttonClass} onClick={event => this.showUploadForm()}> */}
                    {/* <i className="fas fa-lg fa-plus-circle" title="Click to add a new upload" aria-hidden="true"></i> */}
                {/* </span> */}
                {/* <UploadForm userId={this.props.id} updateUploadContainer={this.updateUploadContainer} closeUpdateForm={this.handleClose} show={this.state.show} /> */}
                </div>
                </div>
            </div>
            
        )
    }
}

export default UploadContainer;