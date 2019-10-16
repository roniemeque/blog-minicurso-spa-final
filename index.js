import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './style.css';
import Nav from './layout/Nav';
import Footer from './layout/Footer';

import Lista from './pages/Lista';
import Novo from './pages/Novo';
import Post from './pages/Post';

const App = () =>  {
  return (
    <Router>
      <div className="layout">
        <Nav></Nav>
        <main className="main">
          <Switch>
            <Route exact path="/">
              <Lista/>
            </Route>
            <Route path="/novo">
              <Novo />
            </Route>
            <Route path="/posts/:postPath">
              <Post />
            </Route>
          </Switch>
        </main>
        <Footer></Footer>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

render(<App />, document.getElementById('root'));
