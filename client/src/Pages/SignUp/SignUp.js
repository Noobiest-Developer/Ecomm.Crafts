import react from 'react';
import '../Login/Login.css';
import '../../Components/common.css';
import '../../Components/common.scss';
import { useNavigate }  from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { IoMdDisc } from "react-icons/io";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";
import Button from '@mui/material/Button';

const SignUp = () => {
const history = useNavigate();
 

const  verifyCredentials =() =>{
    var username = document.getElementById("LoginTextInput-Username");
    var password  = document.getElementById("LoginTextInput-Password");
    var helper= document.getElementById("LoginHelperText");
    if(username){
      username=username.value;
      if(username.length<3 || username.length>=20) helper.innerHTML="UserName must be greater than 3 Characters and less than 20 Characters"
      else{
        password=password.value;
        history('/')
       
       
      }
    }
}

   return(
    <div className='Login-Wrapper'>
        <div className='ImageAndLogin'>
         <img className='ImageWithLoginBox' alt="err" 
         src="https://cdn.shopify.com/s/files/1/0030/9759/1872/products/EL-002-151_A_800x.jpg?v=1581072510" />
         <div className='LoginBox'>
           
            <div className='LoginCredentials'>
            <div className='LoginTextFieldsWrapper'>
            <TextField id="LoginTextInput-Username" label="UserName" variant="outlined" 
            
            sx={{
                boxShadow:4
            }}
            />
            <TextField id="LoginTextInput-Password" label="Password" variant="outlined" 
            sx={{
                boxShadow:4
            }}
            />
            </div>
            <div className='OtherLoginOptions'>
            <FcGoogle className="LoginOption-Icons" />
               <SiFacebook className="LoginOption-Icons" />
               <AiOutlineMail className="LoginOption-Icons" />
            </div>
            </div>
          
            <p id="LoginHelperText" style={{color:'red'}} ></p>

            <Button variant="contained" sx={{
                    width:'66%'
                }} 
                onClick={(e)=>{
                   verifyCredentials();
                }}
                >
                    SignUp
                </Button>
            </div>
        </div>
        <div className='ImageOnlyNoLogin'>
            <img src="" alt="err"/>
        </div>
    </div>
   )

}


export default SignUp;