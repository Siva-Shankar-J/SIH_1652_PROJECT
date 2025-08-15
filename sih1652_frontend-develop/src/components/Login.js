import React,{useEffect, useState} from 'react'
import Cookies from 'js-cookie'
import "./login.css"
import { useNavigate,Link } from 'react-router-dom'

const Login = () => {
  const navigate=useNavigate()
  const [loginDetails,setLoginDetails]=useState({email:'',password:''})
  const [validData,setValidData]=useState({})

  useEffect(()=>{
    const c=Cookies.get('data')
    setValidData(JSON.parse(c))
  },[])


  const handleInput=(e)=>{
    const {name,value}=e.target
    setLoginDetails({...loginDetails,[name]:value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    // console.log(loginDetails.email,typeof(loginDetails.email))
    // console.log(validData.email,typeof(validData.email))
    if(loginDetails.email===validData.email && loginDetails.password===validData.password){
      // console.log('khsfsjflfj')
    alert("success")
    navigate("/loginper")
    }
  else{
    alert("please check your email and password")
  }
  }

  return (
    <div style={{height:"100%",width:"100%"}}>
	<body>

<div class="wrapper" >
  <div class="inner">
    <form onSubmit={handleSubmit} className='form-containe' action="#">
      <button type='button'  onClick={() => {
                   navigate('/');
                 }} style={{width:"59px" , height:"40px",fontSize:'15px',color:"white", backgroundColor:' #ae3c33'}}>Back</button>
      <h3>Login Form</h3>
   
      <div class="form-wrapper">
        <label htmlFor="email">Email</label>
        <input name='email' onChange={handleInput} type="text" className="form-control" required />
      </div>
      <div class="form-wrapper">
        <label htmlFor="password">Password</label>
        <input name='password' onChange={handleInput} type="password" className="form-control" required />
      </div>
      <div class="checkbox">
        <label>
          <input  type="checkbox" required /> I accept the Terms of Use & Privacy Policy.
          <span class="checkmark"></span>
        </label>
      </div>
      <button  type='submit' className='d'
      //  onClick={handleSubmit}
      //onClick={() => {
      //    navigate('/login');
      //  }}
      >login</button>
      <div className='sd'>
      <p>Don't have an account?</p>
      <a   onClick={() => {
                        navigate('/Signup');
                      }}>Sign up</a>
      </div>
    </form>
  </div>
</div>

</body>    </div>
  );
}

export default Login
