import React from 'react';
import UploadApi from '../../api/UploadApi';

class UploadUpdateForm extends React.Component {

    onClose = (event) => {
        this.props.onClose && this.props.onClose(event);
    }

    submitUpdate = (event) => {
        event.preventDefault();
            UploadApi.uploadUpdate(this.props.upload._id, {
                title: document.getElementById('title').value,
                category: document.getElementById('category').value,
                link: document.getElementById('link').value,
                body: document.getElementById('body').value,
                user: this.props.upload.user._id
            })
            .then(res => {
                this.props.updateUploadContainer();
                this.onClose();
            })
    }

    render() {
        if (!this.props.showUpdateState) {
            return null;
        }
        return (
            <div className="container">
                    <div className="tile is-vertical">
                        <h1 className="title has-text-grey-dark">Edit</h1>
                            <div className="field">
                                <label className="label has-text-grey-dark">Title</label>
                                <div className="control">
                                    <input className="input has-text-black" name="title" id="title" type="text" defaultValue={this.props.upload.title} />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label has-text-grey-dark">Category</label>
                                <div className="control">
                                    <input className="input has-text-black" name="category" id="category" type="text" defaultValue={this.props.upload.category} />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label has-text-grey-dark">Link</label>
                                <div className="control">
                                    <input className="input has-text-black" name="link" id="link" type="text" defaultValue={this.props.upload.link} />
                                </div>
                                <p className="help has-text-grey-dark">ex. https://github.com/kuricarino/creator-forum</p>
                            </div>
                            <div className="field">
                                <label className="label has-text-grey-dark">Body</label>
                                <div className="control">
                                    <textarea className="textarea is-small has-text-black" name="body" id="body" type="text" defaultValue={this.props.upload.body} />
                                </div>
                            </div>
                            <button className="button is-rounded is-link is-outlined" id="submit-button" onClick={this.submitUpdate}>Update</button>
                </div>
            </div>
        )
    }
}


export default UploadUpdateForm;