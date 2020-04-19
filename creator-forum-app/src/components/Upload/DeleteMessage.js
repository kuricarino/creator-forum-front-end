import React from 'react';
import UploadApi from '../../api/UploadApi';
import './DeleteMessage.css';

class DeleteMessage extends React.Component {

    onClose = (event) => {
        this.props.onClose && this.props.onClose(event);
    };

    confirmDelete = (event) => {
        event.preventDefault();

        UploadApi.uploadDelete(this.props.upload)
        .then(res => {
            this.props.updateUploadContainer();
            this.onClose();
        })
    }

    render() {
        if (!this.props.showDeleteState) {
            return null;
        }
        return (
            <article className="message is-normal is-danger" id="delete-message-profile">
                <div className="message-header">
                    <p className="has-text-white">
                    Delete this upload?
                    </p>
                </div>
                <div className="message-body">
                    <span className="icon is-medium has-text-black" onClick={this.confirmDelete} >
                        <i className="fas fa-check fa-lg"></i>
                    </span>
                    <span className="icon is-medium has-text-black" onClick={() => this.onClose()} >
                        <i className="fas fa-times fa-lg"></i>
                    </span>
                </div>
            </article>
        )
    }

}

export default DeleteMessage;