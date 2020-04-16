import React from 'react';
import './Forum.css'
import UploadApi from '../../api/UploadApi';
import UploadContainer from '../../containers/UploadContainer/UploadContainer';

class Forum extends React.Component {
    state = {
        uploads: {},
        user: this.props.user,
        // show: false,
        // buttonStyle: true,
    }

    componentDidMount() {
        console.log('UploadContainer rendered');
        UploadApi.uploadIndex()
        .then(res => {
                let allUploads = res.data;
                allUploads.reverse();
                this.setState({
                    uploads: allUploads,
            })}
        );
    }

    // updateUploadContainer = () => {
    //     console.log('UploadContainer rendered');
    //     UploadApi.uploadIndex()
    //     .then(res => {
    //             let allUploads = res.data;
    //             allUploads.reverse();
    //             this.setState({
    //                 uploads: allUploads,
    //         })}
    //     );
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(`shouldComponentUpdate invoked`)
        if (nextProps.uploads && nextProps.uploads.length !== this.props.uploads.length) {
            return false;
        }
        return true;
    }

    render() {
        return (

            <div className="container">
                <div class="columns">
                <div className="column is-narrow-mobile">
                    <div className="has-text-centered">
                        <h1 className="title is-size-1 has-text-white has-text-left has-text-justified is-uppercase" id="forum">
                            Forum
                        </h1>
                        <h2 className="subtitle is-size-3 has-text-white has-text-left has-text-justified has-text-weight-semibold">
                            share here
                        </h2>
                    </div>
                </div>
                <div className="column" id="scroll">
                    {/* <UploadContainer id={this.state.user._id}/> */}
                    <UploadContainer userId={this.props.user.id} />
                </div>
                </div>
                {/* <div className="tile is-parent is-8 notification">  
                <UploadContainer id={this.state.user._id}/>
                </div>   */}
            </div>
        )
    }

}

export default Forum;


