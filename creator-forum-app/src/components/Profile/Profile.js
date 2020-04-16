import React from 'react';
import './Profile.css';
import UserApi from '../../api/UserApi';
import UploadContainer from '../../containers/UploadContainer/UploadContainer';

class Profile extends React.Component {
    state = {
        user: {},
    }

    //handleValidation?
    handleValidation = () => {
        // Puts state keys in keys array
        let inputIds = ['firstName','lastName','username']
        let valid = true
        inputIds.map(inputId => {
            let input = document.getElementById(inputId);
            input.classList.remove('is-danger');
            if (input.value === '') {
                valid = false;
                // add bulma class is-danger to fields
                input.classList.add('is-danger');
                // let divField = document.getElementsByClassName('field');
                // let p = document.createElement('p');
                // p.classList.add('help');
                // p.classList.add('is-danger');
                // let errorMessage = document.createTextNode('field cannot be empty');
                // p.appendChild(errorMessage);
                // divField.appendChild(p);
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
            console.log('api call for user show');
            this.setState({
                user: res.data
            })
        })
    }

    submitUpdate = (event) => {
        event.preventDefault();
        console.log('submit button clicked')
        // need form validation
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
            console.log('profile updated');
            this.setState({ user: res.data });
        })
    }

    // not sure if componentDidUpdate is running
    componentDidUpdate(prevProps, prevState) {
        // console.log('componentDidUpdate');
        if (prevProps.user.id !== this.props.user.id) {
            this.setState({
                user: this.props.user
            });

            UserApi.show(this.props.user.id)
            .then(res => {
                // console.log('componentDidUpate api call for UPDATED user');
                this.setState({
                    user: res.data
                })
            })
        }
    }

    render() {
        return (
            <div className="container">
                <div class="columns">
                <div className="column is-narrow-mobile">
                    <div className=""> 
                        <div className="tile notification is-vertical">
                            {/* <div> */}
                            <h1 className="title has-text-grey-dark">Hi there, {this.state.user.username}</h1>
                                <figure className="container image is-128x128" id="profile-photo">
                                    <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" alt="default profile"/>
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
                                {/* <div className="field">
                                    <label className="label has-text-grey-dark">Email</label>
                                    <div className="control">
                                        <input className="input has-text-black" id="email" type="email" defaultValue={this.props.user. email} />
                                    </div>
                                </div> */}
                                <div className="field email">
                                        <p className="has-text-grey-dark"><i className="fas fa-envelope has-text-grey-dark"></i> {this.props.user.email}</p>
                                </div>
                                {/* </div> */}
                                <button className="button is-rounded is-link is-outlined" id="submit-button" onClick={this.submitUpdate}>Save Changes</button>
                            </div>
                    </div> 
                </div>
                    <div className="column is-7">
                        <UploadContainer id={this.state.user._id}/>
                    </div>
                </div>
                {/* <div className="tile is-parent is-8 notification">  
                <UploadContainer id={this.state.user._id}/>
                </div>   */}
            </div>
        )
    }
}

export default Profile;

