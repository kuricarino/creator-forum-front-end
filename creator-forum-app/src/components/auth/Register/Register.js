import React from 'react';

class Register extends React.Component {
    state =
    {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
    }

    handleValidation = () => {
        // Puts state keys in keys array
        let inputIds = ['firstName-register','lastName-register','username-register','email-register','password-register']
        let valid = true
        inputIds.map(inputId => {
            let input = document.getElementById(inputId);
            input.classList.remove('is-danger');
            if (input.value === '') {
                valid = false;
                // add bulma class is-danger to fields
                input.classList.add('is-danger');
            }
        })
        return valid;
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     let newUser = {
    //         firstName: this.state.firstName,
    //         lastName: this.state.lastName,
    //         username: this.state.username,
    //         email: this.state.email, 
    //         password: this.state.password
    //     }
    //     this.props.register(newUser)
    // }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.handleValidation())
        this.props.register({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            username: this.state.username,
            email: this.state.email, 
            password: this.state.password
        })
    }

    render() {
        return (
            <div className="container">
            <div class="columns">
            <div className="column is-narrow-mobile">
            <div className="tile notification is-vertical">
                    <div className="field">
                    <label className="label has-text-grey-dark">First Name</label>
                        <div className="control">
                            <input
                                className="input has-text-black"
                                id="firstName-register"
                                type="text"
                                name="firstName"
                                value={this.state.firstName}
                                onChange={this.handleChange}>
                            </input>
                        </div>
                    </div>
                    <div className="field">
                    <label className="label has-text-grey-dark">Last Name</label>
                        <div className="control">
                            <input
                                className="input has-text-black"
                                id="lastName-register"
                                type="text"
                                name="lastName"
                                value={this.state.lastName}
                                onChange={this.handleChange}>
                            </input>
                        </div>
                    </div>
                    <div className="field">
                    <label className="label has-text-grey-dark">Username</label>
                        <div className="control">
                            <input
                                className="input has-text-black"
                                id="username-register"
                                type="text"
                                name="username"
                                value={this.state.username}
                                onChange={this.handleChange}>
                            </input>
                        </div>
                    </div>
                    <div className="field">
                    <label className="label has-text-grey-dark">Email</label>
                        <div className="control">
                            <input 
                                className="input has-text-black"
                                id="email-register"
                                type="text"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}>
                            </input>
                        </div>
                    </div>
                    <div className="field">
                    <label className="label has-text-grey-dark">Password</label>
                        <div className="control">
                            <input 
                                className="input has-text-black"
                                id="password-register"
                                type="password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange}>
                            </input>
                        </div>
                    </div>
                    <button className="button is-rounded is-link is-outlined" type="submit" onClick={this.handleSubmit}>Submit</button>
            </div>
            </div>
            </div>
            </div>
        )
    }
}


export default Register;