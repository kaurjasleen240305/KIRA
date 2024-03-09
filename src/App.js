import './App.css';
import login from './screens/login';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router >
      <Routes>
        <Route path="/login" Component={login}/> 
      </Routes>
    </Router>
  );
}

export default App;
