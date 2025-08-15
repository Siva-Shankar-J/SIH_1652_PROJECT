import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import './form.css'
import Cookies from 'js-cookie';
const Form = () => {
    const [count,setCount] = useState(0);
   
    const [formData, setFormData] = useState({
        name: '',
        dob:'',
        email: '',
        phone:'',
        address:'',
        aadhar:'',
        cast:'',
        marks10th:'',
        passedYear10th:'',
        collegeName10th:'',
        gender:'',
        educationType:'',
        collegeName12th:'',
        group12th:'',
        marks12th:'',
        passedYear12th:'',
        branchDiploma:'',
        passedYearDiploma:'',
        collegeNameDiploma:'',
        marksDiploma:'',
        graduation:'',
        collegeNamegraduation:'',
        marks:'',
        group12th:'',
        exam:'',
        exampaper:'',
        score:'',
        va:'',
        paper:'',
       slcaste:'',
       pwd:'',
       passedyear:''

    });
    const navigate=useNavigate()

    const [loading, setLoading] = useState(false);
    const [verified, setVerified] = useState(false);
    const [loading1, setLoading1] = useState(false);
    const [verified1, setVerified1] = useState(false);
    const [loading2, setLoading2] = useState(false);
    const [verified2, setVerified2] = useState(false);
    const [loading3, setLoading3] = useState(false);
    const [verified3, setVerified3] = useState(false);
    const [loading4, setLoading4] = useState(false);
    const [verified4, setVerified4] = useState(false);
    const [loading5, setLoading5] = useState(false);
    const [verified5, setVerified5] = useState(false);
    const [loading6, setLoading6] = useState(false);
    const [verified6, setVerified6] = useState(false);
  
    const verify = async () => {
      setLoading(true); 
      const response = await fetch('http://localhost:4000/get');
      const data = await response.json();
  
      await new Promise((resolve) => setTimeout(resolve, 4000));
  
      if (formData.name === data[0].name) {
        setCount(count + 1);
        setVerified(true); 
      }
     else{
      alert('incorrect upload');
     }
      setLoading(false); 
    };
    const verify1 = async () => {
      setLoading1(true); 
      const response = await fetch('http://localhost:4000/get');
      const data = await response.json();
  
      await new Promise((resolve) => setTimeout(resolve, 4000));
      setLoading1(false); 
      if ((formData.name === data[0].name && formData.marks12th === data[0].marks12th) ||(formData.name === data[0].name && formData.dob === data[0].dob && formData.marksDiploma===data[0].marksDiploma)){
        setCount(count + 1);
        setVerified1(true); 
      }
     else{
      alert('incorrect upload');
     }
      
    };
    const verify2 = async () => {
      setLoading2(true); 
      const response = await fetch('http://localhost:4000/get');
      const data = await response.json();
  
      await new Promise((resolve) => setTimeout(resolve, 4000));
  
      if (formData.name === data[0].name && formData.passedyear === data[0].passedyear) {
        setCount(count + 1);
        setVerified2(true); 
      }
     else{
      alert('incorrect upload');
     }
      setLoading2(false); 
    };
    const verify3 = async () => {
      setLoading3(true); 
      const response = await fetch('http://localhost:4000/get');
      const data = await response.json();
  
      await new Promise((resolve) => setTimeout(resolve, 4000));
  
      if (formData.name === data[0].name && formData.score === data[0].score) {
        setCount(count + 1);
        setVerified3(true); 
      }
     else{
      alert('incorrect upload');
     }
      setLoading3(false); 
    };
    const verify4 = async () => {
      setLoading4(true); 
      const response = await fetch('http://localhost:4000/get');
      const data = await response.json();
  
      await new Promise((resolve) => setTimeout(resolve, 4000));
  
      if (formData.name === data[0].name && formData.aadhar === data[0].aadhar) {
        setCount(count + 1);
        setVerified4(true); 
      }
     else{
      alert('incorrect upload');
     }
      setLoading4(false); 
    };
    const verify5 = async () => {
      setLoading5(true); 
      const response = await fetch('http://localhost:4000/get');
      const data = await response.json();
  
      await new Promise((resolve) => setTimeout(resolve, 4000));
  
      if (formData.name === data[0].name && formData.slcaste === data[0].slcaste) {
        setCount(count + 1);
        setVerified5(true); 
      }
     else{
      alert('incorrect upload');
     }
      setLoading5(false); 
    };
    const verify6 = async () => {
      setLoading6(true); 
      const response = await fetch('http://localhost:4000/get');
      const data = await response.json();
  
      await new Promise((resolve) => setTimeout(resolve, 4000));
  
      if (formData.name === data[0].name && formData.pwd === data[0].pwd) {
        setCount(count + 1);
        setVerified6(true); 
      }
     else{
      alert('incorrect upload');
     }
      setLoading6(false); 
    };
    console.log(count)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData, 
            [name]: value   
        });
    };
    const handleRadioChange = (e) => {
      const { name, value } = e.target;
      setFormData({
          ...formData, 
          [name]: value   
      });
  };
    const handleBtnSubmit=(e)=>{
        e.preventDefault()
        if (count >=5){
          console.log(formData)
          Cookies.set('data', JSON.stringify(formData),{expires:1})
          alert("Submitted Successfully!")
          navigate("/loginper")
        }
       else{
        alert('please upload all the documentes')
       }
        
    }



  return (
  
    <div className='far'>
    <main className='hjy' >
    <div>
    <header class="head" style={{width:"100%"}}>
    <button type='button'  onClick={() => {
                   navigate('/loginper');
                 }} style={{width:"59px" , height:"40px",fontSize:'15px',color:"white", backgroundColor:' #ae3c33',marginRight:"120px"}}>Back</button>
    <h1 style={{color:"white"}}>Application Form</h1>
    <p style={{color:"white"}}>(Please fill out your information below.)</p>
    </header></div>
    
  <section class="form-container">
      <form onSubmit={handleBtnSubmit} action="#"className='dia' method="POST">
        <div className='sai-con'>
      <div className='sai'>
          <h1>Personal Details</h1>
          <br />
          </div>
          <div class="form-group">
          <label htmlFor="name">Full Name:</label>
            <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required
            />

          </div>
        
          <div class="form-group">
          <label htmlFor="dob">Date of Birth:</label>
            <input 
                type="date" 
                id="dob" 
                name="dob" 
                value={formData.dob} 
                onChange={handleChange} 
                required
            />
          </div>
          <div class="form-group">
              <label for="gender">Gender</label>
              <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required> <option value="">Select a option</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
              </select>
          </div>
          <div class="form-group">
          <label htmlFor="email">Email:</label>
            <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required
            />
              
          </div>

          <div class="form-group">
          <label htmlFor="phone">Phone number:</label>
            <input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                required
            />
            
          </div>

          <div class="form-group">
          <label htmlFor="address">Address:</label>
            <textarea 

                id="address" 
                name="address"
                rows={3} 
                value={formData.address} 
                onChange={handleChange} 
                required
            />
             
          </div>
          </div>
          <div className='sai-con'>
      <div className='sai'>
          <h1>Education</h1>
          </div>
          <div className='sai2'>
          <h2>10th Details</h2>
          <br />
          </div>
          <div class="form-group">
          <label htmlFor="collegeName10th">School Name</label>
            <input 
                type="text" 
                id="collegeName10th" 
                name="collegeName10th" 
                value={formData.collegeName10th} 
                onChange={handleChange} 
                required
            />
            </div>
            <div class="form-group">
          <label htmlFor="passedYear10th">Year of Passing</label>
            <input 
                type="number" 
                id="passedYear10th" 
                name="passedYear10th" 
                value={formData.passedYear10th} 
                onChange={handleChange} 
                required
            />
            </div>
          
            <div class="form-group">
          <label htmlFor="marks10th">Marks Obtained</label>
            <input 
                type="number" 
                id="marks10th" 
                name="marks10th" 
                value={formData.marks10th} 
                onChange={handleChange} 
                required
            />
            </div>
            <div class="main-upload1">
              <div class="upload-form1">
               <label htmlFor="file" class="custum-file-upload">
                   <div class="icon">
                       <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                           <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                           <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                           <g id="SVGRepo_iconCarrier"> 
                               <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"></path> 
                           </g>
                       </svg>
                   </div>
                   <div class="text">
                       <p>10th marks sheet</p>
                   </div>
                   
               </label>
               <input id="file" type="file" className='file'
                   required />
              </div>
              <div className="form-group">
        
          {loading ? (
            <button type="button" className="upload-submit" disabled>
              Verifying...
            </button>
          ) : verified ? (
            <button type="button" className="upload-submit verified" disabled>
              ✓ Verified
            </button>)
           : (
            <button onClick={verify} type="button" className="upload-submit">
              Verify
            </button>
          )}
        </div>
            
              </div>   
            <div className='sai2'>
          <h2>12th or Diploma Details</h2>
          <br />
          </div>
          <div class="form-group">
              <label for="educationType">Select Education Type:</label>
              <select id="educationType" name="educationType" value={formData.educationType} onChange={handleChange}>
                  <option value="">Select an option</option>
                  <option value="12th">12th Grade</option>
                  <option value="diploma">Diploma</option>
              </select>
          </div>

          {formData.educationType === "12th" && 
          <div id="12thDetailsForm"           >

              <div class="form-group">
          <label htmlFor="collegeName12th">College Name</label>
            <input 
                type="text" 
                id="collegeName12th" 
                name="collegeName12th" 
                value={formData.collegeName12th} 
                onChange={handleChange} 
            />
            </div>

            <div class="form-group">
          <label htmlFor="passedYear12th">Year of Passing</label>
            <input 
                type="number" 
                id="passedYear12th" 
                name="passedYear12th" 
                value={formData.passedYear12th} 
                onChange={handleChange} 
            />
            </div>

            <div class="form-group">
          <label htmlFor="marks12th">Marks Obtained</label>
            <input 
                type="number" 
                id="marks12th" 
                name="marks12th" 
                value={formData.marks12th} 
                onChange={handleChange} 
            />
            </div>

            <div class="form-group">
          <label htmlFor="group12th">Group</label>
            <input 
                type="text" 
                id="group12th" 
                name="group12th" 
                value={formData.group12th} 
                onChange={handleChange} 
            />
            </div>
            <div class="main-upload1">
              <div class="upload-form1">
               <label for="file" class="custum-file-upload">
                   <div class="icon">
                       <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                           <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                           <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                           <g id="SVGRepo_iconCarrier"> 
                               <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"></path> 
                           </g>
                       </svg>
                   </div>
                   <div class="text">
                   <p>12th marks sheet</p>
                   </div>
                   </label>
                   <input id="file" type="file" className='file' 
                   required />
              
              </div>
              <div className="form-group">
        
          {loading1 ? (
            <button type="button" className="upload-submit" disabled>
              Verifying...
            </button>
          ) : verified1 ? (
            <button type="button" className="upload-submit verified" disabled>
              ✓ Verified
            </button>
          ) : (
            <button onClick={verify1} type="button" className="upload-submit">
              Verify
            </button>
          )}
        </div>        
              </div>   
              
          </div>
          
}

         {formData.educationType === 'diploma' &&
          <div id="diplomaDetailsForm" >
              <h3>Diploma Details</h3>

              <div class="form-group">
          <label htmlFor="collegeNameDiploma">College Name</label>
            <input 
                type="text" 
                id="collegeNameDiploma" 
                name="collegeNameDiploma" 
                value={formData.collegeNameDiploma} 
                onChange={handleChange} 
            />
            </div>

            <div class="form-group">
          <label htmlFor="passedYearDiploma">Year of Passing</label>
            <input 
                type="number" 
                id="passedYearDiploma" 
                name="passedYearDiploma" 
                value={formData.passedYearDiploma} 
                onChange={handleChange} 
            />
            </div>

            <div class="form-group">
          <label htmlFor="marksDiploma">Marks Obtained</label>
            <input 
                type="number" 
                id="marksDiploma" 
                name="marksDiploma" 
                value={formData.marksDiploma} 
                onChange={handleChange} 
            />
            </div>
            
              
            <div class="form-group">
          <label htmlFor="branchDiploma">Branch</label>
            <input 
                type="text" 
                id="branchDiploma" 
                name="branchDiploma" 
                value={formData.branchDiploma} 
                onChange={handleChange} 
            />
            </div>
            <div class="main-upload1">
              <div class="upload-form1">
               <label for="file" class="custum-file-upload">
                   <div class="icon">
                       <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                           <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                           <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                           <g id="SVGRepo_iconCarrier"> 
                               <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"></path> 
                           </g>
                       </svg>
                   </div>
                   <div class="text">
                   <p>Diploma marks sheet</p>
                   </div>
                   </label>
                   <input id="file" type="file" className='file' required />
            
              </div>
              <div className="form-group">
        
          {loading1 ? (
            <button type="button" className="upload-submit" disabled>
              Verifying...
            </button>
          ) : verified1 ? (
            <button type="button" className="upload-submit verified" disabled>
              ✓ Verified
            </button>
          ) : (
            <button onClick={verify1} type="button" className="upload-submit">
              Verify
            </button>
          )}
        </div>
            
              </div>     
          </div>
          }
            <div className='sai2'>
          <h2>Graduation complete or not</h2>
          </div>
          <div className='rad'>
          <div class="for">
        
          <input 
            type="radio" 
            id="graduation" 
            name="graduation" 
            value="completed"
            checked={formData.graduation === 'completed'} 
            onChange={handleRadioChange}
          />
          <label htmlFor="graduation">completed</label>
          
          </div>
          <div class="for">
       
          <input 
            type="radio" 
            id="graduation" 
            name="graduation" 
            value="notcompleted"
            checked={formData.graduation === 'notcompleted'} 
            onChange={handleRadioChange}
          />
          <label htmlFor="graduation">not completed</label>
          
          </div>

        </div> 
        {formData.graduation === "completed" && 
          <div id="gradutiondetails"  >
              <div class="form-group">
          <label htmlFor="collegeNamegraduation">College Name</label>
            <input 
                type="text" 
                id="collegeNamegraduation" 
                name="collegeNamegraduation" 
                value={formData.collegeNamegraduation} 
                onChange={handleChange} 
            />
            </div>

            <div class="form-group">
          <label htmlFor="passedyear">Year of Passing</label>
            <input 
                type="number" 
                id="passedyear" 
                name="passedyear" 
                value={formData.passedyear} 
                onChange={handleChange} 
            />
            </div>

            <div class="form-group">
          <label htmlFor="marks">Marks Obtained</label>
            <input 
                type="number" 
                id="marks" 
                name="marks" 
                value={formData.marks} 
                onChange={handleChange} 
            />
            </div>

            <div class="form-group">
          <label htmlFor="group">Group</label>
            <input 
                type="text" 
                id="group" 
                name="group" 
                value={formData.group} 
                onChange={handleChange} 
            />
            </div>
            <div class="main-upload1">
              <div class="upload-form1">
               <label for="file" class="custum-file-upload">
                   <div class="icon">
                       <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                           <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                           <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                           <g id="SVGRepo_iconCarrier"> 
                               <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"></path> 
                           </g>
                       </svg>
                   </div>
                   <div class="text">
                   <p>Graduation marks sheet</p>
                   </div>
                   </label>
                   <input id="file" type="file" className='file' required />
             
              </div>
              <div className="form-group">
        
          {loading2 ? (
            <button type="button" className="upload-submit" disabled>
              Verifying...
            </button>
          ) : verified2 ? (
            <button type="button" className="upload-submit verified" disabled>
              ✓ Verified
            </button>
          ) : (
            <button onClick={verify2} type="button" className="upload-submit">
              Verify
            </button>
          )}
        </div>
            
              </div>   
              <div class="form-group">
              <label for="exam">Select exam:</label>
              <select id="exam" name="exam" value={formData.exam} onChange={handleChange}>
                  <option value="">Select an option</option>
                  <option value="GATE">GATE</option>
                  <option value="NET">NET</option>
                  <option value="other">other</option>
                  <option value="none">none</option>
              </select>

          </div> 
          {formData.exam === "GATE" && 
          <div id="gatedetails"           >


            <div class="form-group">
          <label htmlFor="exampaper">Exam Paper</label>
            <input 
                type="text" 
                id="exampaper" 
                name="exampaper" 
                value={formData.exampaper} 
                onChange={handleChange} 
            />
            </div>

            <div class="form-group">
          <label htmlFor="score">Score</label>
            <input 
                type="number" 
                id="score" 
                name="score" 
                value={formData.score} 
                onChange={handleChange} 
            />
            </div>

            <div class="form-group">
          <label htmlFor="va">Valid Date</label>
            <input 
                type="date" 
                id="va" 
                name="va" 
                value={formData.va} 
                onChange={handleChange} 
            />
            </div>
            <div class="main-upload1">
              <div class="upload-form1">
               <label for="file" class="custum-file-upload">
                   <div class="icon">
                       <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                           <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                           <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                           <g id="SVGRepo_iconCarrier"> 
                               <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"></path> 
                           </g>
                       </svg>
                   </div>
                   <div class="text">
                   <p>Gate score card</p>
                   </div>
                   </label>
                   <input id="file" type="file" className='file' required />
              
              </div>
              <div className="form-group">
        
          {loading3 ? (
            <button type="button" className="upload-submit" disabled>
              Verifying...
            </button>
          ) : verified3 ? (
            <button type="button" className="upload-submit verified" disabled>
              ✓ Verified
            </button>
          ) : (
            <button onClick={verify3} type="button" className="upload-submit">
              Verify
            </button>
          )}
        </div>
            
              </div>   
              
          </div>
          
} 
{formData.exam === "NET" && 
          <div id="netdetails"           >


            <div class="form-group">
          <label htmlFor="exampaper">Exam Paper</label>
            <input 
                type="text" 
                id="exampaper" 
                name="exampaper" 
                value={formData.exampaper} 
                onChange={handleChange} 
            />
            </div>

            <div class="form-group">
          <label htmlFor="score">Score</label>
            <input 
                type="number" 
                id="score" 
                name="score" 
                value={formData.score} 
                onChange={handleChange} 
            />
            </div>

            <div class="form-group">
          <label htmlFor="va">Valid Date</label>
            <input 
                type="date" 
                id="va" 
                name="va" 
                value={formData.VA} 
                onChange={handleChange} 
            />
            </div>
            <div class="main-upload1">
              <div class="upload-form1">
               <label for="file" class="custum-file-upload">
                   <div class="icon">
                       <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                           <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                           <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                           <g id="SVGRepo_iconCarrier"> 
                               <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"></path> 
                           </g>
                       </svg>
                   </div>
                   <div class="text">
                   <p>Nat score card</p>
                   </div>
                   </label>
                   <input id="file" type="file" className='file' required />    
              </div>
              <div className="form-group">
        
          {loading3 ? (
            <button type="button" className="upload-submit" disabled>
              Verifying...
            </button>
          ) : verified3 ? (
            <button type="button" className="upload-submit verified" disabled>
              ✓ Verified
            </button>
          ) : (
            <button onClick={verify3} type="button" className="upload-submit">
              Verify
            </button>
          )}
        </div>
            
              </div>   
              
          </div>
          
} 
{formData.exam === "other" && 
          <div id="gatedetails"           >

<div class="form-group">
          <label htmlFor="paper"> Paper name</label>
            <input 
                type="text" 
                id="paper" 
                name="paper" 
                value={formData.paper} 
                onChange={handleChange} 
            />
            </div>
            <div class="form-group">
          <label htmlFor="exampaper">Exam Paper</label>
            <input 
                type="text" 
                id="exampaper" 
                name="exampaper" 
                value={formData.exampaper} 
                onChange={handleChange} 
            />
            </div>

            <div class="form-group">
          <label htmlFor="score">Score</label>
            <input 
                type="number" 
                id="score" 
                name="score" 
                value={formData.score} 
                onChange={handleChange} 
            />
            </div>

            <div class="form-group">
          <label htmlFor="va">Valid Date</label>
            <input 
                type="date" 
                id="va" 
                name="va" 
                value={formData.va} 
                onChange={handleChange} 
            />
            </div>
            <div class="main-upload1">
              <div class="upload-form1">
               <label for="file" class="custum-file-upload">
                   <div class="icon">
                       <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                           <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                           <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                           <g id="SVGRepo_iconCarrier"> 
                               <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"></path> 
                           </g>
                       </svg>
                   </div>
                   <div class="text">
                   <p>Score card</p>
                   </div>
                   </label>
                   <input id="file" type="file" className='file' required />
              </div>
              <div className="form-group">
        
          {loading3 ? (
            <button type="button" className="upload-submit" disabled>
              Verifying...
            </button>
          ) : verified3 ? (
            <button type="button" className="upload-submit verified" disabled>
              ✓ Verified
            </button>
          ) : (
            <button onClick={verify3} type="button" className="upload-submit">
              Verify
            </button>
          )}
        </div>
            
              </div>   
              
          </div>
          
} 
          </div>}
        
</div>
<div className='sai-co'>
      <div className='sai'>
          <h1>Aditional Details</h1>
          <br />
          </div>
          <div class="form-group">
          <label htmlFor="aadhar">Aadhar Number(Enter Only 12 Digits):</label>
            <input 
                type="number" 
                id="aadhar" 
                name="aadhar" 
                value={formData.aadhar} 
                onChange={handleChange} 
            />   
          </div>
          <div class="main-upload1">
              <div class="upload-form1">
               <label for="file" class="custum-file-upload">
                   <div class="icon">
                       <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                           <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                           <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                           <g id="SVGRepo_iconCarrier"> 
                               <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"></path> 
                           </g>
                       </svg>
                   </div>
                   <div class="text">
                   <p>Aadhar card</p>
                   </div>
                   </label>
                   <input id="file" type="file" className='file' required />
              </div>
              <div className="form-group">
        
          {loading4 ? (
            <button type="button" className="upload-submit" disabled>
              Verifying...
            </button>
          ) : verified4 ? (
            <button type="button" className="upload-submit verified" disabled>
              ✓ Verified
            </button>
          ) : (
            <button onClick={verify4} type="button" className="upload-submit">
              Verify
            </button>
          )}        
        </div>
          </div>
          <div class="form-group">
              <label for="slcaste">caste</label>
              <select id="slcaste" name="slcaste" value={formData.slcaste} onChange={handleChange}>
                  <option value="">Select an option</option>
                  <option value="oc">OC</option>
                  <option value="other">other</option>
              </select>

          </div> 
          {formData.slcaste === "oc" && 
          <div className='ra'>
             <div className='sai2'>
          <h2>EWS or not</h2>
          </div>
          <div className='rad'>
          <div class="for">
        
          <input 
            type="radio" 
            id="cast" 
            name="cast" 
            value="yes"
            checked={formData.cast === 'yes'} 
            onChange={handleRadioChange}
          />
          <label htmlFor="cast">yes</label>
          
          </div>
          <div class="for">
       
          <input 
            type="radio" 
            id="cast" 
            name="cast" 
            value="no"
            checked={formData.cast === 'no'} 
            onChange={handleRadioChange}
          />
          <label htmlFor="cast">no</label>
          
          </div>
         
        </div> 
        {formData.cast === "yes" && 
        <div className='fr'>
            <div class="main-upload1">
              <div class="upload-form1">
               <label for="file" class="custum-file-upload">
                   <div class="icon">
                       <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                           <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                           <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                           <g id="SVGRepo_iconCarrier"> 
                               <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"></path> 
                           </g>
                       </svg>
                   </div>
                   <div class="text">
                   <p>EWS Certificate</p>
                   </div>
                   </label>
                   <input id="file" type="file" className='file' required/>
              </div>
              <div className="form-group">
        
          {loading5 ? (
            <button type="button" className="upload-submit" disabled>
              Verifying...
            </button>
          ) : verified5 ? (
            <button type="button" className="upload-submit verified" disabled>
              ✓ Verified
            </button>
          ) : (
            <button onClick={verify5} type="button" className="upload-submit">
              Verify
            </button>
          )}
          
        </div>         
          </div>
          </div>}
        </div>}
        {formData.slcaste==='other'&&
        <div className='fr'>
           <div class="form-group">
          <label htmlFor="cast">Caste(Sub Caste) :</label>
            <input 
                type="text" 
                id="cast" 
                name="cast" 
                value={formData.cast} 
                onChange={handleChange} 
            />
              
          </div>
          <div class="main-upload1">
              <div class="upload-form1">
               <label for="file" class="custum-file-upload">
                   <div class="icon">
                       <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                           <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                           <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                           <g id="SVGRepo_iconCarrier"> 
                               <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"></path> 
                           </g>
                       </svg>
                   </div>
                   <div class="text">
                   <p>Caste Certificate</p>
                   </div>
                   </label>
                   <input id="file" type="file" className='file' required />
              </div>
              <div className="form-group">
        
          {loading5 ? (
            <button type="button" className="upload-submit" disabled>
              Verifying...
            </button>
          ) : verified5 ? (
            <button type="button" className="upload-submit verified" disabled>
              ✓ Verified
            </button>
          ) : (
            <button onClick={verify5} type="button" className="upload-submit">
              Verify
            </button>
          )}
          
        </div>
          
          </div>
  
          </div>
        }
          <div className='sai2'>
          <h2>Physicaly handy caped</h2>
          </div>
          <div className='rad'>
          <div class="for">
        
          <input 
            type="radio" 
            id="pwd" 
            name="pwd" 
            value="yes"
            checked={formData.pwd === 'yes'} 
            onChange={handleRadioChange}
          />
          <label htmlFor="ped">yes</label>  
          </div>
          <div class="for">
          <input 
            type="radio" 
            id="pwd" 
            name="pwd" 
            value="no"
            checked={formData.pwd === 'no'} 
            onChange={handleRadioChange}
          />
          <label htmlFor="pwd">no</label>  
          </div>  
        </div> 
        {formData.pwd === "yes" && 
        <div className='fr'>
            <div class="main-upload1">
              <div class="upload-form1">
               <label for="file" class="custum-file-upload">
                   <div class="icon">
                       <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                           <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                           <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                           <g id="SVGRepo_iconCarrier"> 
                               <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"></path> 
                           </g>
                       </svg>
                   </div>
                   <div class="text">
                   <p>PWD Certificate</p>
                   </div>
                   </label>
                   <input id="file" type="file" className='file' required/>
      
              </div>
              <div className="form-group">
          {loading6 ? (
            <button type="button" className="upload-submit" disabled>
              Verifying...
            </button>
          ) : verified6 ? (
            <button type="button" className="upload-submit verified" disabled>
              ✓ Verified
            </button>
          ) : (
            <button onClick={verify6} type="button" className="upload-submit">
              Verify
            </button>
          )}
          
        </div>
          
          </div>
  
          </div>}
        </div>  
        
        <div class="form-group">
              <button type="submit" class="submit-button" >Submit</button>
          </div>
      </form>
  </section>
</main>
</div>
  )
}

export default Form
