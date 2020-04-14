import React from 'react';
import UploadApi from '../../api/UploadApi';
import Upload from '../../components/Upload/Upload'

class UploadContainer extends React.Component {
    state = {
        uploads: this.props.uploads,
        pathName: ''
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps != this.props) {
            
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
                    // <div className="">
                    //     <p className="">Add a new upload with the + icon above</p>
                    // </div>
                    <div className="tile is-parent is-8 notification">
                        <div className="container">
                        <div className="content">
                            <p className="title has-text-grey-dark">Your Uploads</p>
                            <p className="subtitle has-text-grey-dark">Add a new upload</p>
                            <span className="icon has-text-link is-large"> 
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
                <div className="tile is-parent is-8 notification">
                    <div className="container">
                    <div className="content ">
                    <h1 className="title has-text-grey-dark">Your Uploads</h1>
                    {uploads && uploads.map(upload => {
                        return <Upload upload={upload} key={upload._id} user={this.props.user}/>
                        // return <Upload upload={upload} key={upload._id} />
                    })}
                    <span className="icon has-text-link is-large">
                        <i className="fas fa-lg fa-plus-circle" title="Click to add a new upload" aria-hidden="true"></i>
                    </span>
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