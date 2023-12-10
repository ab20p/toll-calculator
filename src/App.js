
import './App.css';
import UserGuide from './userGuide';
import TollCalculator from './tollCalculator';
import {BrowserRouter,Routes,Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <h1 className='header'>TollCost Calculator</h1>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserGuide />} />
         <Route path='/tollCalculator' element={<TollCalculator />} />
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
