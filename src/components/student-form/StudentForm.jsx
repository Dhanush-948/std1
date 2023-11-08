import React,{useState} from 'react';
import axios from 'axios';

function StudentForm() {
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[phonenumber,setphonenumber]=useState("");
    const[branch,setbranch]=useState("");
    const[sem,setsem]=useState("");
    const[id,setid]=useState("");

    const handleSubmit = async(e) =>{
      e.preventDefault();
      const data ={
      id:id,
      name:name,
      email:email,
      phonenumber:phonenumber ,
      branch:branch,
      sem:sem,
     }
     try{
      const response = await axios.post("http://localhost:5000/student",data);
      alert("student created");
     }catch(error){
      console.log(error);
     }
      
  };

    // Arrow function 
    //const funcName =() =>{
        //code
   // };
  return (
    <div>
        <h1>Registration Form</h1>
        <form onSubmit={handleSubmit}> 
        <input type="text" placeholder="enter your id" value={id}
        onChange={(e)=>setid(e.target.value)}/>
        <br/>
            <input type="text" placeholder="enter your name" value={name} 
            onChange={(e)=>setName(e.target.value)}/>
           <br />
            <input type="text" placeholder="enter your email" value={email}
            onChange={(e)=>setEmail(e.target.value)}/>
            <br />
            <input type="text"placeholder="enter your phonenumber"value={phonenumber}
            onChange={(e)=>setphonenumber(e.target.value)}/>
            <br />
            <input type="text"placeholder="enter your branch"value={branch}
            onChange={(e)=>setbranch(e.target.value)}/>
            <br />
            <input type="text"placeholder="enter your sem"value={sem}
            onChange={(e)=>setsem(e.target.value)}/>
            <br/>
            <button>submit</button>
           
            <p>
               
            </p>
        </form>
    </div>
  );
}

export default StudentForm