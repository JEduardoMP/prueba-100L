import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './index.css'
import './App.css'

import HeroPage from './views/HeroPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<HeroPage />} />
      </Routes>
    </Router>
  );
}

export default App;
