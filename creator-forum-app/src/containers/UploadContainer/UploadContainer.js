import React from 'react';
// import { Route } from 'react-router-dom';
import UploadApi from '../../api/UploadApi';
import Upload from '../../components/Upload/Upload';
import UploadForm from '../../components/Upload/UploadForm';

class UploadContainer extends React.Component {
    state = {
        uploads: this.props.uploads,
        pathName: '',
        show: false,
    }

    showUploadForm = (event) => {
        // event.preventDefault();
        console.log('show create form')
        this.setState({
            show: !this.state.show
        });
    }

    handleClose = (event) => {
        this.setState({
            show: !this.state.show
        });
    };

    // after creating a new upload or updating an upload
    updateUploadContainer = () => {
        console.log('UploadApi call');
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
            } else {
                // forum component
                let allUploads = res.data;
                allUploads.reverse();
                this.setState({
                    uploads: allUploads,
                    pathName: pathName
                })}
            })
        }
    }

    render() {
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
                            <span className="icon has-text-link is-large" onClick={event => this.showUploadForm()}> 
                            {/* or use has-text-info and change submit button */}
                                <i className="fas fa-lg fa-plus-circle" title="Click to add a new upload" aria-hidden="true"></i>
                            </span>
                            {/* <div className="content">

                            </div> */}
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
                        return <Upload upload={upload} key={upload._id} user={this.props.user}/>
                    })}
                    <span className="icon has-text-link is-large" onClick={event => this.showUploadForm()}>
                        <i className="fas fa-lg fa-plus-circle" title="Click to add a new upload" aria-hidden="true"></i>
                    </span>
                    <UploadForm userId={this.props.id} updateUploadContainer={this.updateUploadContainer} closeUpdateForm={this.handleClose} show={this.state.show} />
                    </div>
                    </div>
                </div>
            )
        }
        return null
        // add logic for forum container
    }
}

export default UploadContainer;