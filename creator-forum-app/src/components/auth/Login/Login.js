import React from 'react';

class Login extends React.Component {
    
    state = {
        username: '',
        password: ''
    }

handleValidation = () => {
    let inputIds = ['login-username','login-password']
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

handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
}

handleSubmit = (e) => {
    e.preventDefault();
    if (this.handleValidation())
    this.props.login({
        username: this.state.username,
        password: this.state.password
    });
}

render() {
    return (
        <div className="container">
        <div className="columns">
        <div className="column is-narrow-mobile">
        <div className="tile notification is-vertical">
            <div className="field">
                    <label className="label has-text-grey-dark">Username</label>
                    <div className="control">
                        <input 
                        className="input has-text-black" 
                        id="login-username"
                        name="username"
                        type="text" 
                        value={this.state.username} 
                        onChange={this.handleChange}
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label has-text-grey-dark">Password</label>
                    <div className="control">
                        <input 
                        className="input has-text-black" 
                        id="login-password"
                        name="password"
                        type="password" 
                        value={this.state.password} 
                        onChange={this.handleChange}
                        />
                    </div>
                </div>
            <button className="button is-rounded is-link is-outlined" type="submit" onClick={this.handleSubmit}>Enter</button>
        </div>
        </div>
        </div>
        </div>
    )
    }
}

export default Login;