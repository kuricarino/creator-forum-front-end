import React from 'react';

class Register extends React.Component {
    state ={
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (e) => {
        // console.log('do you work?')
        e.preventDefault();
        let newUser = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.register(newUser)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>First Name:
                        <input
                        type="text"
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleChange}>
                        </input>
                    </label>
                    <label>Last Name:
                        <input
                        type="text"
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.handleChange}>
                        </input>
                    </label>
                    <label>Username:
                        <input
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}>
                        </input>
                    </label>
                    <label>Email:
                        <input
                        type="text"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}>
                        </input>
                    </label>
                    <label>Password:
                        <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}>
                        </input>
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}


export default Register;