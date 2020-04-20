import React from 'react';
import UserApi from '../../api/UserApi';
import UploadContainer from '../../containers/UploadContainer/UploadContainer';
import defaultpic from '../../images/default-profile-pic.png';
import './Profile.css';

class Profile extends React.Component {
    state = {
        user: {},
    }

    handleValidation = () => {
        let inputIds = ['firstName','lastName','username']
        let valid = true
        inputIds.map(inputId => {
            let input = document.getElementById(inputId);
            input.classList.remove('is-danger');
            if (input.value === '') {
                valid = false;
                input.classList.add('is-danger');
            }
        })
        return valid;
    }
 
    componentDidMount() {
        this.setState({
            user: this.props.user
        });
        UserApi.show(this.props.user.id) // user object has id, not _id
        .then(res => {
            this.setState({
                user: res.data
            })
        })
    }

    submitUpdate = (event) => {
        event.preventDefault();
        if (this.handleValidation())
            this.userUpdate({
                _id: this.state.user._id,
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                username: document.getElementById('username').value
            })
    }

    userUpdate = user => {
        UserApi.update(user) 
        .then((res) => {
            this.setState({ 
                user: res.data,
            });
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.user.id !== this.props.user.id) {
            this.setState({
                user: this.props.user
            });

            UserApi.show(this.props.user.id)
            .then(res => {
                this.setState({
                    user: res.data,
                })
            })
        }
    }

    render() {
        return (
            <div className="container">
                <div className="columns">
                <div className="column is-narrow-mobile">
                        <div className="tile notification is-vertical">
                            <h1 className="title has-text-grey-dark">Hi there, {this.state.user.username}</h1>
                                <figure className="container image is-128x128" id="profile-photo">
                                    <img className="is-rounded" src={defaultpic} alt="default profile"/>
                                </figure>
                                <div className="field">
                                    <label className="label has-text-grey-dark">First name</label>
                                    <div className="control">
                                        <input className="input has-text-black" name="firstName" id="firstName" type="text" defaultValue={this.state.user.firstName} />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label has-text-grey-dark">Last name</label>
                                    <div className="control">
                                        <input className="input has-text-black" name="lastName" id="lastName" type="text" defaultValue={this.state.user.lastName} />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label has-text-grey-dark">Username</label>
                                    <div className="control">
                                        <input className="input has-text-black" name="username" id="username" type="text" defaultValue={this.state.user.username} />
                                    </div>
                                </div>
                                <div className="field email">
                                    <p className="has-text-grey-dark"><i className="fas fa-envelope has-text-grey-dark"></i> {this.props.user.email}</p>
                                </div>
                            <button className="button is-rounded is-link is-outlined" id="submit-button" onClick={this.submitUpdate}>Save Changes</button>
                        </div>
                </div>
                <div className="column is-7">
                    <UploadContainer id={this.state.user._id}/>
                </div>
                </div>
            </div>
        )
    }
}

export default Profile;

