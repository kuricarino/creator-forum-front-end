import React from 'react';
import UploadApi from '../../api/UploadApi';
import Upload from '../../components/Upload/Upload';
import ForumUpload from '../../components/Upload/ForumUpload';
import UploadForm from '../../components/Upload/UploadForm';
import './UploadContainer.css';

class UploadContainer extends React.Component {
    state = {
        uploads: this.props.uploads,
        feedback: {},
        pathName: '',
        show: false,
    }

    // *********************** //
    //    profile component    //
    // *********************** //

    showUploadForm = (event) => {
        this.setState({
            show: !this.state.show,
        });
    }

    handleClose = (event) => {
        this.setState({
            show: !this.state.show
        });
    };

    updateUploadContainer = () => {
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

    render() {
        let uploads = this.state.uploads;
        if (this.state.pathName === '/profile') {
            if (uploads.length === 0) {
                return (
                    <div className="tile notification is-flex-mobile">
                        <div className="container">
                        <div className="content">
                            <p className="title has-text-grey-dark">Your Work</p>
                            <p className="subtitle has-text-grey-dark">Upload your work to the forum</p>
                            <span className="icon has-text-link is-large" onClick={event => this.showUploadForm()}> 
                                <i className="fas fa-lg fa-plus-circle" title="Click to add a new upload" aria-hidden="true"></i>
                            </span>
                            <UploadForm 
                                userId={this.props.id} 
                                updateUploadContainer={this.updateUploadContainer} 
                                closeUpdateForm={this.handleClose} 
                                show={this.state.show}
                                buttonStyle={this.state.buttonStyle} 
                            />
                        </div>
                        </div>
                    </div>
                )
            }
            return (
                <div className="tile notification is-flex-mobile" id="upload-container-profile">
                    <div className="container">
                    <div className="content ">
                    <h1 className="title has-text-grey-dark">Your Work</h1>
                    {uploads && uploads.map(upload => {
                        return <Upload 
                            upload={upload} 
                            key={upload._id} 
                            userId={this.props.id} 
                            updateUploadContainer={this.updateUploadContainer}
                        />
                    })}
                    <span className="icon has-text-link is-large" onClick={event => this.showUploadForm()}>
                        <i className="fas fa-lg fa-plus-circle" title="Click to add a new upload" aria-hidden="true"></i>
                    </span>
                    <UploadForm 
                        userId={this.props.id} 
                        updateUploadContainer={this.updateUploadContainer} 
                        closeUpdateForm={this.handleClose} 
                        show={this.state.show} 
                    />
                    </div>
                    </div>
                </div>
            );
        };

        // *********************** //
        //      forum component    //
        // *********************** //
        return (
            <div className="tile" id="forum-scroll">
                <div className="container">
                <div className="content ">
                {uploads && uploads.map(upload => {
                    return <ForumUpload 
                        upload={upload} 
                        key={upload._id} 
                        loggedInUser={this.props.userId} 
                    />
                })}
                </div>
                </div>
            </div>
            
        )
    }
}

export default UploadContainer;