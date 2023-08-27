import './App.css';
import MainPage from './components/MainPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Info from './components/Info';
function App() {
  return (
    <div  >
      <>
        {/* <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>  */}
        <Router>
          <Routes>
            <Route path='/links' element={<Info />} />
            <Route path='/' element={<MainPage />} />
          </Routes>
        </Router>
      
    </>
    </div>
  );
}

export default App;
