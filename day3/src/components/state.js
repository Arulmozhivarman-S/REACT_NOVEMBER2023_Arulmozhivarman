import React,{useState} from 'react'

export default function State() {
    const [name,setName]=useState("John")
    const [num,setNum]=useState("12")
    const [stud,setStud]=useState({name:"Mike",num:23})

    const numdec=()=>{
        let val=num;
        setNum(--val);
    }
    const cn=()=>{
        setName("Mike")
    }
    const numhandler=()=>{
         let val=num;
         setNum(++val);
    }

  return (
    <div>
      <h1>State and Props</h1>
      <hr></hr>
      <h3>Hi {name}</h3>
      <h3>Number is {num}</h3>
      <h3>Student name {stud.name} and Age {stud.num}</h3>
      <button onClick={cn}>Change Name </button>
      <button onClick={numhandler}>Increment </button>
      <button onClick={numdec}>Decrement</button>
    </div>
  )
}
