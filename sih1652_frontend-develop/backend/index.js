const express=require('express');

const cors=require('cors');

const app=express();
app.use(cors())
app.use(express.json())
const port=4000

app.get("/get",(req,res)=>{
  return res.json([{id:1,name:"koppineedi venkata durga kartheek",
    aadhar: "733078074158", dob:"31-07-1995", email: 'kartheekkoppinedi@gmail.com', phone:'9347666999',address:'bhimavaram',cast:'oc',
        marks10th:'',
        passedYear10th:'',
        collegeName10th:'',
        gender:'',
        educationType:'',
        collegeName12th:'',
        group12th:'',
        marks12th:"920",
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
        score:'592',
        va:'',
        paper:'',
        passedyear:"2017",
       slcaste:'oc',
       pwd:'no'}])
})

app.listen(port,()=>{
  console.log(`SERVER RUNNING AT ${port}`)
})

// http://localhost:4000/get
// cd backend
// node index.js
// D:\trail\backend