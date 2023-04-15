import React, { useState } from 'react'

function Form() {
    const[userInfo,setUserInfo] = useState({name : "",email : "",password : "",confirmPassword : ""});

    function check(){
        let result=document.getElementById('res');
        if(userInfo.name && userInfo.email && userInfo.password && userInfo.confirmPassword){
            if(!userInfo.email.includes('@')){
                result.innerHTML="Provide valid Email address"
                result.classList.add('red')
                return;
            }
            if(userInfo.password!=userInfo.confirmPassword){
                result.innerHTML="Passwords and confirm Password does not matches"
                result.classList.add('red')
                return;
            }
            result.innerHTML="Successfully Signed Up!"
            result.classList.remove('red')
            result.classList.add('green')
        }
        else{
            result.innerHTML="Error : All the fields are mandatory"
            result.classList.add('red')
        }
    }

  return (
    <div className='component'>
        <h1>Signup</h1>
        <input placeholder='Full Name' required
        onChange= {(e)=>setUserInfo({...userInfo , name :e.target.value })}/>

        <input type='email' placeholder='Email' required
        onChange= {(e)=>setUserInfo({...userInfo , email :e.target.value })}/>

        <input placeholder='Password' required
        onChange= {(e)=>setUserInfo({...userInfo , password :e.target.value })}/>

        <input type='password' placeholder='Confirm Password' required
        onChange= {(e)=>setUserInfo({...userInfo , confirmPassword :e.target.value })}/>

        <p id='res'></p>
        <button onClick={check}>Signup</button>
    </div>
  )
}

export default Form
