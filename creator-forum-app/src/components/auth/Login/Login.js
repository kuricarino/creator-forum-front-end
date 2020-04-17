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
        // <div className="container">
        // <div class="columns">
        // <div className="column is-narrow-mobile">
        // <div className="tile notification is-vertical">
        //     <form onSubmit={this.handleSubmit}>
        //         <label className="has-text-grey-dark"> Username:
        //             <input
        //                 type="text"
        //                 name="username"
        //                 value={this.state.username}
        //                 onChange={this.handleChange}>
        //             </input>
        //         </label>
        //         <label className="has-text-grey-dark">Password:
        //             <input
        //                 type="password"
        //                 name="password"
        //                 value={this.state.password}
        //                 onChange={this.handleChange}>
        //             </input>
        //         </label>
        //         <button className="button is-rounded is-link is-outlined" type="submit">Enter</button>
        //     </form>
        // </div>
        // </div>
        // </div>
        // </div>

        <div className="container">
        <div class="columns">
        <div className="column is-narrow-mobile">
        <div className="tile notification is-vertical">
            <div className="field">
                    <label className="label has-text-grey-dark">Username</label>
                    <div className="control">
                        <input 
                        className="input has-text-black" 
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