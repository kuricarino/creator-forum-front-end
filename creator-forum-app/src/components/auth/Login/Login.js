import React from 'react';
// import UserApi from '../../api/UserApi';
// import { withRouter } from 'react-router-dom';

class Login extends React.Component {
    
    state = {
        username: '',
        password: ''
    }

// add field validation

handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
}

handleSubmit = (e) => {
    e.preventDefault();
    let user = {
        username: this.state.username,
        password: this.state.password
    }
    this.props.login(user);
}

render() {
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <label> Username:
                    <input
                        type="text"
                        name="username"
                        value={this.state.username}
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
                <button type="submit">Enter</button>
            </form>
        </div>
    )
}
}

export default Login;