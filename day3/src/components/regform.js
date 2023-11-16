import React, { useState } from 'react'

export default function Regform() {
    const [name,setName]=useState('');
    const [num,setnum]=useState('');
    const [mail,setmail]=useState('');
    const [pass,setpass]=useState('');
    function ch(){
        let name=document.getElementById("name").value;
        setName(name);
        let pn=document.getElementById("num").value;
        setnum(pn);
        let m=document.getElementById("mail").value;
        setmail(m);
        let pas=document.getElementById("pass").value;
        setpass(pas);
           console.log(name)
           console.log(num)
           console.log(mail)
           console.log(pass)
           setName('');
           setmail('')
           setpass('')
           setnum('')
    }
  return (
    <div>
        <form>
            <label>UserName : </label>
            <input id="name" onChange={(event)=>{setName(event.target.value)}} value={name} type='text' placeholder='Enter your name'></input><br/>
            <label>PhoneNumber : </label>
            <input id="num" onChange={(event)=>{setnum(event.target.value)}} value={num} type='text' placeholder='Enter your PhoneNumber'></input><br/>
            <label>Email : </label>
            <input id="mail" onChange={(event)=>{setmail(event.target.value)}} value={mail} type='text' placeholder='Enter your Email'></input><br/>
            <label>Password : </label>
            <input id="pass" onChange={(event)=>{setpass(event.target.value)}} value={pass} type='password' placeholder='Enter your Password'></input><br/>
            <button type='button' onClick={ch}>Submit</button>
        </form>
    </div>
  )
}
