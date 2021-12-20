// Router
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// Views
import HeroPage from './views/HeroPage';
import CellphoneReg from './views/cellphoneRegister';
// Component
import PrivateRoute from './componenets/privateRoute';
// Styles
import './index.css'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<HeroPage />} />
        <Route exact path='/phoneNum' element={<PrivateRoute component={CellphoneReg} />} />
      </Routes>
    </Router>
  );
}

export default App;
