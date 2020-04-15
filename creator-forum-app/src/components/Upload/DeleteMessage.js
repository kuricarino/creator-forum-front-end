import React from 'react';
import UploadApi from '../../api/UploadApi';

class DeleteMessage extends React.Component {

    onClose = (event) => {
        this.props.onClose && this.props.onClose(event);
    };

    confirmDelete = (event) => {
        console.log(`upload deleted`);
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
            <article className="message is-normal is-danger">
                <div className="message-header">
                    <p className="has-text-white">
                    {/* <span className="icon has-text-white">
                        <i className="fas fa-exclamation circle"></i>
                    </span> */}
                    Are you sure you want to delete this upload?
                    </p>
                    <button className="delete is-small" onClick={() => this.onClose()} aria-label="delete"></button>
                </div>
                <div className="message-body">
                    <span className="icon is-medium has-text-black" onClick={this.confirmDelete} >
                        {/* <i className="fas fa-check-square"></i> */}
                        {/* <p className="has-text-black">YES</p> */}
                        <i className="fas fa-thumbs-up fa-lg"></i>
                    </span>
                </div>
            </article>
        )
    }

}

export default DeleteMessage;