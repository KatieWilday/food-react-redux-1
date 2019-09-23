import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
// import Counter from './components/Counter'
import RestaurantsListContainer from './containers/RestaurantsListContainer'
import RestaurantsNameContainer from './containers/RestaurantsNameContainer'
import RestaurantsTypeContainer from './containers/RestaurantsTypeContainer'
import RestaurantsReviewContainer from './containers/RestaurantsReviewContainer'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/restaurants" component={RestaurantsListContainer}/>
        <Route path="/random_restaurant" component={RestaurantsNameContainer}/>
        <Route path="/random_type" component={RestaurantsTypeContainer}/>
        <Route path="/review_form" component={RestaurantsReviewContainer}/>
      </div>
    </Router>

  );
}

export default App;
