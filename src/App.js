import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Footer from './component/Footer'
import Navbar from './component/Navbar'
import About from './Page/About'
import Contact from './Page/Contact'
import Error from './Page/Error'
import Home from './Page/Home'
import Lunch from './Page/Lunch'
import Pastry from './Page/Pastry'
import Seafood from './Page/Seafood'
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/lunch">
            <Lunch />
          </Route>
          <Route exact path="/pastry">
            <Pastry />
          </Route>
          <Route exact path="/seafood">
            <Seafood />
          </Route>
          <Route exact path="*">
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
