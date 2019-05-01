import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import './App.css';

// Theme
import theme from './theme'

// Components
import UserTemplate from './components/Templates/UserTemplate/UserTemplate'

import './components/common/scss/common.scss'

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={UserTemplate} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    )
  }
}

export default App;
