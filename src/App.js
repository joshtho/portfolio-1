import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import NavBar from './components/NavBar';
import Info from './components/Info';
import Bio from './components/Bio';

function App() {
  return (
    <div >
      <>
        {/* <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>  */}
        <Router>
          <NavBar />
          <Routes>
            <Route path='/links' element={<Info />} />
            <Route path='/' element={<MainPage />} />
            <Route path='/bio' element={<Bio />} />
          </Routes>
        </Router>
      
    </>
    </div>
  );
}

export default App;
