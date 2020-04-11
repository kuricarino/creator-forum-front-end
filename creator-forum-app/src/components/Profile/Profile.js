import React from 'react';

class Profile extends React.Component {
    state = {
        user: {

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

    render() {
        return (
            <>
            <div>
            <h1>Hi there, {this.state.user.firstName}</h1>
                <div className="field">
                    <label className="label">First name</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="e.g {this.props.firstName}"/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Last name</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="e.g. {this.props.lastName}"/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Username</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="e.g. {this.props.username}"/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input className="input" type="email" placeholder="e.g. {this.props.email}"/>
                    </div>
                </div>
            </div>
            {/* <UploadContainer id={this.state.user._id}/> */}
            </>
        )
    }
}

export default Profile;