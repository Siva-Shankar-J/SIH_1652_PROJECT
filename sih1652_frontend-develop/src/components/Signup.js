import React, { useEffect, useState} from 'react'
import "./signup.css"
import Cookies from 'js-cookie';
import { useNavigate,Link } from 'react-router-dom'
const Login = () => {
  const navigate=useNavigate()
    const [signup,setSignUp]=useState({name:"",email:'',phoneNo:'',password:''})



    const handleEvent=(e)=>{
      const {name,value}=e.target
      setSignUp({...signup,[name]:value})
    }

    const handleSubmit=(e)=>{
      e.preventDefault()
      Cookies.set('data', JSON.stringify(signup),{expires:1})
      console.log(signup)
      alert("successfully signed up")
      navigate('/login')
    }

  return (
    <div style={{height:"100%",width:"100%"}}>
	<body>

<div class="wrapper" >
  <div class="inner">
    <form onSubmit={handleSubmit} className='form-containe' action="">
    <button type='button'  onClick={() => {
                   navigate('/');
                 }} style={{width:"59px" , height:"30px",fontSize:'10px',color:"white", backgroundColor:' #ae3c33'}}>Back</button>
      <h3>SignUp Form</h3>
      
      <div class="form-wrapper">
      <label for="name">Name</label>
      <input name="name" onChange={handleEvent}  type="text" class="form-control" required/>
      </div>
      <div class="form-wrapper">
        <label for="">Email</label>
        <input name='email' onChange={handleEvent} type="text" class="form-control" required/>
      </div>
      <div class="form-wrapper">
        <label for="">Password</label>
        <input type="password" class="form-control" required/>
      </div>
      <div class="form-wrapper">
        <label for="">Confirm Password</label>
        <input name='password' onChange={handleEvent} type="password" class="form-control" required/>
      </div>
      <div class="checkbox">
        <label>
          <input  type="checkbox" required/> I accept the Terms of Use & Privacy Policy.
          <span class="checkmark"></span>
        </label>
      </div>
      <button className='button-s' >Register</button>
    </form>
  </div>
</div>

</body>    </div>
  )
}

export default Login
