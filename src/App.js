import React, { Component } from 'react';
import './App.css';
import UserTemplate from './components/Templates/UserTemplate/UserTemplate'


class App extends Component {
  loadRouter = () => {
    switch (window.location.pathname) {
      case '/': {
        return <UserTemplate />
      };
      default: {
        return <UserTemplate />
      }
    }
  }
  render() {
    return (
      <div className="App">
        {this.loadRouter()}
      </div>
    )
  }
}

export default App;
