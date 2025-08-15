// import React from 'react'
// import { useNavigate,Link } from 'react-router-dom'
// import "./home.css"
// import log from './utils/login.jpg'; 
// const Header = () => {
//   const navigate=useNavigate()


//   return (
//     <header style={{width:"100%"}}>
//       <div className="header-content">
//       {/* <div className='logo'>
//           <div className='logom'>
//           <img src={log} alt="Tank" />
//           </div>
//           {/*</div>
//           <div className='logotext'>
//           <div className="buttons">
//             <button onClick={()=>{
//               navigate("/login")
//             }} className="btn">Login</button>
//             <button className="btn" onClick={()=>{
//               navigate("/signup")
//             }}>Sign up</button>
//           </div>
        
//         <nav className="navbar">
//           <a href="/">Home</a>
//           <a href="#about">About Us</a>
//           <a href="#updates">Updates</a>
//           <a href="#jobs">Apply</a>
//           <a href="#contect">Contact</a>
//         </nav>
//         </div>*/}
//         <section className="left">
//           <div className="scroll-con">
//             <div className='im'>
//           <img src={log} alt="Tank" />
//           </div>
//           </div>
//         </section>

//         <section className="rigth">
//           <div className="r-con">
//           <div className='logotext'>
//             <div className='te'>
//               <p>tanktou</p>
//             </div>
          
//           <div className="buttons">
//             <button  className="btn" onClick={()=>{
//               navigate("/login")
//             }}>Login</button>
//             <button className="btn" onClick={()=>{
//               navigate("/signup")
//             }}>Sign up</button>
//           </div>
         
//           </div>
        
//         <nav className="navbar">
//           <a href="/">Home</a>
//           <a href="#about">About Us</a>
//           <a href="#updates">Updates</a>
//           <a href="#jobs">Apply</a>
//           <a href="#contect">Contact</a>
//         </nav>
//           </div>
//         </section>
//       </div>
//           {/*<div className="logo-container" id="logo-container">
//             <img src="sih1.jpg" alt="Four Lions Symbol" className="logo" />
//             <img src="asd.jpg" alt="DRDO Logo" className="logo" />
//           </div>
          
//           <div className="buttons">
//             <button onClick={()=>{
//               navigate("/login")
//             }} className="btn">Login</button>
//             <button className="btn" onClick={()=>{
//               navigate("/signup")
//             }}>Sign up</button>
//           </div>
//         </div>

//         <nav className="navbar">
//           <a href="/">Home</a>
//           <a href="#about">About Us</a>
//           <a href="#updates">Updates</a>
//           <a href="#jobs">Apply</a>
//           <a href="#contect">Contact</a>
//         </nav>
//       */}
//         <div className="marquee">
//           <marquee className="blink">Latest News: DRDO launches new research programs...</marquee>
//         </div>
//     </header>
//   )
// }

// export default Header


import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css'; // Assuming the original styles are here
import log from './utils/RE.png';
import ksd from './utils/LO.png';
import sd from './utils/LP.png';
// Button component with hover animation
const AnimatedButton = ({ text, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      <div className='bu'>
      <span>{text}</span>
      </div>
    </button>
  );
};

const Header = () => {
  const navigate = useNavigate();

  return (
    <header style={{ width: '100%' }}>
      <div className="header-content">
        <section className="left">
          <div className="scroll-con">
            <div className="im">
            <img className='s2'src={log} alt="Tank" />
            </div>
            <img  className='s3'src={ksd} alt="Tank" />
          </div>
        </section>

        <section className="rigth">
          <div className="r-con">
            <div className="logotext">
            {/* <img  className='s4'src={sd} alt="Tank" /> */}
              <div className="te">
                <p style={{fontSize:"20px" , marginTop:"10px" , width:"100%"}}>welcome to RAC</p>
              </div>

              <div className="buttons">
                {/* Using the animated button */}
                <AnimatedButton
                  text="Login"
                  onClick={() => {
                    navigate('/login');
                  }}
                />
                <AnimatedButton
                  text="Signup"
                  onClick={() => {
                    navigate('/signup');
                  }}
                />
              </div>
            </div>

            <nav className="navbar">
              <a href="/">Home</a>
              <a href="#updates">Updates</a>
              <a href="#jobs">Apply</a>
              <a href="#about">About Us</a>
              <a href="#contect">Contact Us</a>
            </nav>
          </div>
        </section>
      </div>

      <div className="marquee">
        <marquee className="blink">
          Latest News: DRDO launches new research programs...
        </marquee>
      </div>
    </header>
  );
};

export default Header;
