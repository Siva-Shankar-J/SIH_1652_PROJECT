import React, {useState,useEffect}from 'react';
import { useNavigate } from 'react-router-dom';
import './view.css';
import { Carousel } from "react-responsive-carousel";
import DownloadButton from './download.js';
// import log from './utils/RE.png';
// import ksd from './utils/LO.png';
// import sd from './utils/LP.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { height } from '@mui/system';
import Cookies from 'js-cookie'
const View= () => {
    //  const[gange,setgange]=useState(0)
    const [validData,setValidData]=useState({})
    // const [name,setName]=useState('')
    const navigate = useNavigate();
    useEffect(()=>{
      const c=Cookies.get('data')
      setValidData(JSON.parse(c))
    
    },[])
    console.log(validData.name)
    



  return (
  
    <div className='far'>
    <main className='hjy' >
    <div>
    <header class="head" style={{width:"100%"}}>
    <button type='button'  onClick={() => {
                   navigate('/loginper');
                 }} style={{width:"59px" , height:"40px",fontSize:'15px',color:"white", backgroundColor:' #ae3c33'}}>Back</button>
    <h1 style={{color:"white"}}>Your Details</h1>

    </header></div>
    
  <section class="form-container">
    <div class="siva">
      <h1>Persional Details</h1>
     <div class="kar">
      <div class="kartext">
        <h3>NAME : </h3>
      </div>
      <div class="karvalue">
      {validData?.name}
        </div>    
         </div>

         <div class="kar">
      <div class="kartext">
        <h3> Date Of Birth : </h3>
      </div>
      <div class="karvalue">
      {validData?.dob}
        </div>    
         </div>

         <div class="kar">
      <div class="kartext">
        <h3>Email : </h3>
      </div>
      <div class="karvalue">
      {validData?.email}
        </div>    
         </div>

         <div class="kar">
      <div class="kartext">
        <h3> Phone No : </h3>
      </div>
      <div class="karvalue">
      {validData?.phone}
        </div>    
         </div>

         <div class="kar">
      <div class="kartext">
        <h3>Address : </h3>
      </div>
      <div class="karvalue">
      {validData?.address}
        </div>    
         </div>

         <div class="kar">
      <div class="kartext">
        <h3> Gender : </h3>
      </div>
      <div class="karvalue">
      {validData?.gender}
        </div>    
         </div>
         </div>
<div class="siva">
  <h1>Educational Details</h1>
         <div class="kar">
      <div class="kartext">
        <h3>School Name : </h3>
      </div>
      <div class="karvalue">
      {validData?.collegeName10th}
        </div>    
         </div>

         <div class="kar">
      <div class="kartext">
        <h3>Year of Passing: </h3>
      </div>
      <div class="karvalue">
      {validData?.passedYear10th}
        </div>    
         </div>
        
         <div class="kar">
      <div class="kartext">
        <h3>Marks Obtained: </h3>
      </div>
      <div class="karvalue">
      {validData?.marks10th}
        </div>    
         </div>

         <div class="kar">
      <div class="kartext">
        <h3>College Name : </h3>
      </div>
      <div class="karvalue">
      {validData?.collegeName12th}
        </div>    
         </div>

         <div class="kar">
      <div class="kartext">
        <h3>Year of Passing : </h3>
      </div>
      <div class="karvalue">
      {validData?.passedYear12th}
        </div>    
         </div>

         <div class="kar">
      <div class="kartext">
        <h3>Marks Obtained : </h3>
      </div>
      <div class="karvalue">
      {validData?.marks12th}
        </div>    
         </div>

         <div class="kar">
      <div class="kartext">
        <h3>Group : </h3>
      </div>
      <div class="karvalue">
      {validData?.group12th}
        </div>    
         </div>

         <div class="kar">
      <div class="kartext">
        <h3> Graduation College Name: </h3>
      </div>
      <div class="karvalue">
      {validData?.collegeNamegraduation}
        </div>    
         </div>

         <div class="kar">
      <div class="kartext">
        <h3>Year of Passing : </h3>
      </div>
      <div class="karvalue">
      {validData?.passedyear}
        </div>    
         </div>

         <div class="kar">
      <div class="kartext">
        <h3>Marks Obtained : </h3>
      </div>
      <div class="karvalue">
      {validData?.marks}
        </div>    
         </div>

         <div class="kar">
      <div class="kartext">
        <h3>Steam of Graduation : </h3>
      </div>
      <div class="karvalue">
      {validData?.group}
        </div>    
         </div>


         <div class="kar">
      <div class="kartext">
        <h3>Computative Exma Name : </h3>
      </div>
      <div class="karvalue">
     <p>GATE</p>
        </div>    
         </div>

         <div class="kar">
      <div class="kartext">
        <h3>Score : </h3>
      </div>
      <div class="karvalue">
      {validData?.score}
        </div>    
         </div>

         <div class="kar">
      <div class="kartext">
        <h3>Exam Stream : </h3>
      </div>
      <div class="karvalue">
      {validData?.exampaper}
        </div>    
         </div>

         <div class="kar">
      <div class="kartext">
        <h3>Valid Date : </h3>
      </div>
      <div class="karvalue">
      {validData?.va}
        </div>    
         </div>
         </div>
<div class="siv">
  <h1>Additional Details</h1>
         <div class="kar">
      <div class="kartext">
        <h3>Aadhar : </h3>
      </div>
      <div class="karvalue">
      {validData?.aadhar}
        </div>    
         </div>

         <div class="kar">
      <div class="kartext">
        <h3>Caste : </h3>
      </div>
      <div class="karvalue">
      {validData?.slcaste}
        </div>    
         </div>

         <div class="kar">
      <div class="kartext">
        <h3>EWS : </h3>
      </div>
      <div class="karvalue">
      {validData?.cast}
        </div>    
         </div>

         <div class="kar">
      <div class="kartext">
        <h3>PwD : </h3>
      </div>
      <div class="karvalue">
      {validData?.pwd}
        </div>    
         </div>
</div>
        
  </section>
</main>
</div>
  )
}

export default View
