import React, { useState } from 'react'

export default function Goku() {
    let c=0;
    const [url,setUrl]=useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRBRuN5P2JsYzXavhSgnoxXLo8CijJVQIk5A&usqp=CAU")
    const ch=()=>{
        c++;
        if(c==4)
        setUrl("https://i.imgur.com/jQAcIXM.png")
    }
  return (
    <div>
        <img src={url}></img>
        <button onClick={(ch)}>Transform</button>
    </div>
  )
}
