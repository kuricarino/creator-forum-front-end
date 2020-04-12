import React from 'react';
import './Profile.css';
import UserApi from '../../api/UserApi';

class Profile extends React.Component {
    state = {
        user: {
            // firstName: this.props.firstName,
            // lastName: this.props.lastName,
            // username: this.props.username,
            // email: this.props.email,
        }
    }

    // not doing anything...
    // fieldValidation = () => {
    //     let profileInputs = ['firstName', 'lastName', 'username', 'email']
    //     let valid = true
    //     profileInputs.map(profileInput => {
    //         let field = document.getElementById(profileInput);
    //         field.classList.remove('is-danger');
    //         if (field.value === '') {
    //             valid = false;
    //             field.classList.add('is-danger');
    //         }
    //     })
    //     return valid;
    // }

    // componentDidMount is where you would want to make an API call,
    // but might need to try an ARROW FUNCTION
        // PROPS showing up in Profile React Component in DevTools
    // do you need to do an API call if you have props of user?
    // componentDidMount() {
    //     console.log('hello')
    //     console.log(this.props)
    //     // console.log(this.state.user)
    //     // console.log(res.data)
    //     this.setState({
    //         user: this.props.user
    //     });
    //     console.log(this.props.user);
    //     UserApi.show(this.props.user._id)
    //     .then(res => {
    //         // console.log(res)
    //         this.setState({
    //             user: res.data
    //         })
    //     })
    // }

    render() {
        return (
            <div className="container">
                <div className="tile is-ancestor"> 
                    <div className="tile is-parent is-vertical is-6 notification">
                        {/* <div> */}
                        <h1 className="title has-text-grey-dark">Hi there, {this.props.user.username}</h1>
                            <figure className="container image is-128x128" id="profile-photo">
                                <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"/>
                            </figure>
                            <div className="field">
                                <label className="label has-text-grey-dark">First name</label>
                                <div className="control">
                                    <input className="input has-text-black" type="text" placeholder={this.props.user.firstName} />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label has-text-grey-dark">Last name</label>
                                <div className="control">
                                    <input className="input has-text-black" type="text" placeholder={this.props.user.lastName} />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label has-text-grey-dark">Username</label>
                                <div className="control">
                                    <input className="input has-text-black" type="text" placeholder={this.props.user.username} />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label has-text-grey-dark">Email</label>
                                <div className="control">
                                    <input className="input has-text-black" type="email" placeholder={this.props.user. email} />
                                </div>
                            </div>
                        {/* </div> */}
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
