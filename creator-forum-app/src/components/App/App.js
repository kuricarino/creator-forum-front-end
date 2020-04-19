import React from 'react';
import jwt_decode from 'jwt-decode';
import setAuthHeader from '../../utils/setAuthHeader';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import Routes from '../../config/routes';
import UserApi from '../../api/UserApi';
import './App.css';
// import 'bulma/css/bulma.css';

class App extends React.Component {
  state = {
    user: {},
  }

componentDidMount() {
  if (localStorage.jwtToken) {
    setAuthHeader(localStorage.jwtToken);
    const decoded = jwt_decode(localStorage.getItem('jwtToken'));

    this.setState({
      user: 
      {
        firstName: decoded.firstName,
        lastName: decoded.lastName,
        username: decoded.username,
        email: decoded.email,
        id: decoded._id 
      },
    })
  }
}

register = (user) => {
  UserApi.register(user)
    .then(res => {
      if (res.status === 200) {
        const token = res.data.token;
        localStorage.setItem('jwtToken', token);

        setAuthHeader(token);
        const decoded = jwt_decode(token);

        this.setState({
          user: 
          {
            firstName: decoded.firstName,
            lastName: decoded.lastName,
            username: decoded.username,
            email: decoded.email,
            id: decoded._id
          },
        })
      }
    })
    .catch(err => console.log(err));
}

login = (user) => {
  UserApi.login(user)
  .then(res => {
    if (res.status === 200) {
      const token = res.data.token;
      localStorage.setItem('jwtToken', token);

      setAuthHeader(token);
      const decoded = jwt_decode(token);

      this.setState({
        user: 
        {
          firstName: decoded.firstName,
          lastName: decoded.lastName,
          username: decoded.username,
          email: decoded.email,
          id: decoded._id
        },
      })
    }
  })
  .catch(err => console.log(err));
}

logout = () => {
  console.log(`${this.state.user.username} has logged out`);
  localStorage.removeItem('jwtToken');
  //remove header by passing no value 
  setAuthHeader();

  this.setState({
    user:'',
  })
}

render() {
  return (
    <section className="hero is-primary is-fullheight">
      <Header 
        logout={this.logout}
        user={this.state.user}
      />
      <Routes 
        user={this.state.user}
        login={this.login}
        register={this.register}
        logout={this.logout}
      />
      <Footer />
    </section>
  );
  }
}

export default App;
