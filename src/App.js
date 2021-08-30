import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Navbar, Footer } from './components';

import Home from './pages/Home'
import Orders from './pages/Orders';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/orders" component={Orders} />
      </Switch>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
