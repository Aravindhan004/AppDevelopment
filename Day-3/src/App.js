import './App.css';
import Login from './components/login';
import Signup from './components/signup';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={Signup}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
