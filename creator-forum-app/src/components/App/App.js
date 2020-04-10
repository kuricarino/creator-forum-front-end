import React from 'react';
import jwt_decode from 'jwt-decode';
import setAuthHeader from '../../utils/setAuthHeader';
import Header from '../../layout/Header/Header';
import Routes from '../../config/routes';
import UserApi from '../../api/UserApi';
import './App.css';

class App extends React.Component {
  state = {
    user: '',
    id: ''
  }

  componentDidMount() {
    if (localStorage.jwtToken) {
      setAuthHeader(localStorage.jwtToken);
      const decoded = jwt_decode(localStorage.getItem('jwtToken'));

      this.setState({
        user: decoded.username,
        id: decoded._id
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
          user: decoded.username,
          id: decoded._id
        })
      }
    })
    .cath(err => console.log(err));
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
        user: decoded.username,
        id: decoded._id
      })
    }
  })
  .catch(err => console.log(err));
}

logout = () => {
  localStorage.removeItem('jwtToken');
  //remove header by passing no value 
  setAuthHeader();

  this.setState({
    user:'',
    id:''
  })
}

render() {
  return (
    <div className="App">
      <Header 
        logout={this.logout}
        user={this.state.user}
      />
      <Routes 
        user={this.state.user}
        login={this.login}
        register={this.register}
      />
      {/* <Footer /> */}
    </div>
  );
  }
}

export default App;
