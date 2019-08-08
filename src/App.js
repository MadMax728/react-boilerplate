import React, { Component } from 'react';
import './App.css';
import { createBrowserHistory } from 'history';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './Routes';
import Header from './components/common/Header';
import { Provider } from "react-redux";
import {configureStore} from './store';
let history = createBrowserHistory({});

const store = configureStore();
class  App extends Component {

  render () {

    return (
      <div className="containerWapper">
        <Provider store={store}>
          <Header></Header>
          <Router history={history}>
            <Routes></Routes>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
