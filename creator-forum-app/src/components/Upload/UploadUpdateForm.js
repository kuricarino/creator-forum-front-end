import React from 'react';
import UploadApi from '../../api/UploadApi';

class UploadUpdateForm extends React.Component {

    // close update form
    onClose = (event) => {
        this.props.onClose && this.props.onClose(event);
    }

    // field validation

    submitUpdate = (event) => {
        event.preventDefault();
        // if (this.validateFields()) {
            UploadApi.uploadUpdate(this.props.upload._id, {
                title: document.getElementById('title').value,
                category: document.getElementById('category').value,
                link: document.getElementById('link').value,
                body: document.getElementById('body').value,
                //add privacy toggle for user
                user: this.props.upload.user._id
            })
            .then(res => {
                // from Upload Container which will re-render container to include new upload
                this.props.updateUploadContainer();
                this.onClose();
            })
        //}
    }

    render() {
        if (!this.props.showUpdateState) {
            return null;
        }
        return (
            <div className="container">
                {/* <div className="tile is-ancestor">  */}
                    {/* <div className="tile is-parent is-vertical is-6 notification"> */}
                    <div className="tile is-vertical">
                        {/* <div> */}
                        <h1 className="title has-text-grey-dark">Edit</h1>
                            {/* <figure className="container image is-128x128" id="profile-photo">
                                <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" alt="default profile"/>
                            </figure> */}
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
                            <div className="field">
                                    <p className="has-text-black">ADD TOGGLE FOR PRIVACY</p>
                            </div>
                            {/* </div> */}
                            {/* <button className="button is-rounded is-link is-outlined" id="submit-button" onClick={this.submitUpdate}>Upload on Forum</button> */}
                            <button className="button is-rounded is-link is-outlined" id="submit-button" onClick={this.submitUpdate}>Update</button>
                    {/* </div> */}
                </div>
            </div>
        )
    }
}


export default UploadUpdateForm;