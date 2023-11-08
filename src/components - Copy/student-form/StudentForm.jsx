import React,{useState} from 'react';

function StudentForm() {
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[phonenumber,setphonenumber]=useState("");
    const[branch,setbranch]=useState("");
    const[sem,setsem]=useState("");

    // Arrow function 
    //const funcName =() =>{
        //code
   // };
  return (
    <div>
        <h1>Registration Form</h1>
        <form> 
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
           
            <p>
               
            </p>
        </form>
    </div>
  );
}

export default StudentForm