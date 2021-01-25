import './App.css';
import Contact from './Contact';
import Header from './Header';
import Home from './Home';
import About from './About';
import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';


function App() {
  
  const location = useLocation()
  return (
    <div className="App">
      <Header />
          <Switch location={location} key={location.key}>
            <Route exact path="/" component={Home} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Contact" component={Contact} />
          </Switch>
    </div>
  );
}

export default App;