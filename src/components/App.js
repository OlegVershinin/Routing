import React from 'react';
import s from './App.module.scss';
import About from './Pages/About';
import Shop from './Pages/Shop';
import Nav from './Pages/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ItemDetail from './ItemDetail';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className={s.App}>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/shop" exact component={Shop} />
            <Route path="/shop/:id" component={ItemDetail} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
