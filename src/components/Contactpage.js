import React, { useState } from 'react'
import "./contactpage.css";

export default function Contactpage() {

const [mail,setmail]=useState('')
const [passwd,setpasswd]=useState('')
const [fnme,setfnme]=useState('')
const [lnme,setlnme]=useState('')
const [errors,setErrors] = useState([])

const handleSubmit = (event)=>{
    event.preventDefault();
    const errors = validate();
    setErrors(errors);
    if(Object.keys(errors).length === 0){
        alert("Done")
    }
}

const validate =() =>{
    const error = {};

    if(!fnme){
        error.fnme="first name is required";
    }
    else {
        error.fnme="";
    }


    if(!lnme){
        error.lnme="last name is required";
    }
    else {
        error.lnme="";
    }



    if(!mail){
        error.mail= "email is required";
        }
        else if(!/\S+@\S+\.\S+/.test(mail)){
            error.mail="email not match";
        }
        else{
            error.mail="";
        }




        if(!passwd){
            error.passwd= "password is required";
            }
            else if(passwd.length < 8){
                error.passwd="password not match";
            }
            else{
                error.passwd="";
            }

            return error;
    
}



  return (

    
    <div className='fullcontainer'> 
        <div className="topic">Log In</div>
        <div className="opacity">
        <form onSubmit={handleSubmit}>
        <div className="fnamecontainer">
            <div className="lab">
                <lable className="lab">First name</lable></div>
           <div className="inputf"> 
           <input className="inpt" type='text' placeholder='enter first name'onChange={(e)=>setfnme(e.target.value)}></input></div>
            {<div className="err">{errors.fnme}</div>}
        </div>

        <div className="lnamecontainer">
           <div className="lab"><lable className="lab">Last name</lable></div>
           <div className="inputf">
            <input type='text' className="inpt" placeholder='enter last name'onChange={(e)=>setlnme(e.target.value)}></input>
            </div>
            { <div className="err">{errors.lnme}</div>}
            
        </div>

        <div className="emailcontainer">
            <div className="lab"><lable className="lab">Email</lable></div>
            <div className="inputf">
            <input type='text' className="inpt" placeholder='enter email address' onChange={(e)=>setmail(e.target.value)}></input>
       </div> 
       {<div className="err">{errors.mail}</div>}
       </div>
        

        <div className="passwordcontainer">
            <div className="lab"><lable className="lab">Password</lable></div>
            <div className="inputf">
                <input type='password' className="inpt"placeholder='enter password' onChange={(e)=>setpasswd(e.target.value)}></input>
        </div>
        {<div className="err">{errors.passwd}</div>}
        </div>
        

          <div className='submitbut'><br></br>
            <button className='submi'>Submit</button>
          </div>
        </form>
        </div>
    </div>
  )
}
