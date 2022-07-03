
import './App.css';
import RoutesComponent from './Components/RoutesComponent.js';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar, { RespNavBar } from './Components/NavBar/NavBar.js';
function App() {
  return (
    <div className="App-Wrapper">
       <Router>
      <div className='NavDiv-InApp'>
     <NavBar />
     <RespNavBar />
     </div>
     <div className='Content-InApp'>
     
     <RoutesComponent/>
    
     </div>
     </Router>
    </div>
  );
}

export default App;
