import react from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route 
} from 'react-router-dom';
import Home from '../Pages/Home/Home.js';
import Login from '../Pages/Login/Login.js';
import SignUp from '../Pages/SignUp/SignUp.js';

const RoutesComponent =()=>{
    return(
        <Routes>
            
            <Route exact path ="/Login" element={<Login/>}/>
            <Route exact path="/SignUp" element={ <SignUp/> }/>
            <Route exact path="/" element={<Home/>} />
            
        </Routes>
    )
}

export default RoutesComponent;