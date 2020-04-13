import React from 'react';
import './Profile.css';
import UserApi from '../../api/UserApi';

class Profile extends React.Component {
    state = {
        user: {},
    }

    //handleValidation?
 
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
        console.log('submit profile update')
        // need form validation
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
            console.log('submit profile update');
            this.setState({ user: res.data });
        })
    }

    render() {
        return (
            <div className="container">
                <div className="tile is-ancestor"> 
                    <div className="tile is-parent is-vertical is-6 notification">
                        {/* <div> */}
                        <h1 className="title has-text-grey-dark">Hi there, {this.state.user.username}</h1>
                            <figure className="container image is-128x128" id="profile-photo">
                                <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" alt="default profile image"/>
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
                            <div className="field">
                                    <p className="has-text-grey-dark"><i className="fas fa-envelope has-text-grey-dark"></i> {this.props.user.email}</p>
                            </div>
                            {/* </div> */}
                            <button className="button is-rounded is-link is-outlined" onClick={this.submitUpdate}>Save Changes</button>
                    </div>
                {/* another tile for upload container */}
                {/* <UploadContainer id={this.state.user._id}/> */}
                    <div className="tile is-parent is-8 notification">
                        <h1 className="title has-text-grey-dark">Your Uploads</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;






// -------------- update profile

// set state with form toggle
// validate profile form fields



// toggleBodyForm = () => {
//     this.state.formStyle.display === 'block'
//     ? this.setState({ formStyle: {display: 'none' } })
//     : this.setState({ formStyle: {display: 'block'} });
// }

// toggleFormMessage = () => {
//     this.state.messageStyle.display === 'block'
//     ? this.setState({ messageStyle: {display: 'none' } })
//     : this.setState({ messageStyle: {display: 'block'} });
// }

// changeField = (event) => {
//     if (this.state.formStyle.display === "none") {
//         this.toggleBodyForm()
//         if (this.state.messageStyle.display === "block")
//             this.toggleFormMessage();
//     }
// }

// submit = (event) => {
//     event.preventDefault();
//     if (this.validateFields())
//         this.updateProfile({
//             _id: this.state.user._id,
//             firstName: document.getElementById('firstName').value,
//             lastName: document.getElementById('lastName').value,
//             city: document.getElementById('city').value
//         })
// }

// update user with component did update or updateprofile below?
// componentDidUpdate(prevProps, prevState) {
//     if (prevProps.currentUser._id !== this.props.currentUser._id) {
//         this.setState({
//             user: this.props.currentUser
//         });

//         UserApi.show(this.props.currentUser._id)
//         .then(res => {
//             this.setState({
//                 user: res.data
//             })
//         })
//     }
// }

// OR
// updateProfile = user => {
//     UserApi.update(user)
//         .then((res) => {
//             this.toggleBodyForm();
//             this.toggleFormMessage();
//             this.props.loggedIn(res.data);
//             this.setState({ user : res.data});
//         })
// }

