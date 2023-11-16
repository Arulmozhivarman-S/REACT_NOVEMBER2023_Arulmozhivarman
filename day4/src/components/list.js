import React, { useState } from 'react'
import { Border } from 'react-bootstrap-icons'
export default function List() {
    const [students]=useState([
            {   
                id:101,
                name:"Arul",
                age:19
            },
            {   
                id:102,
                name:"Arun",
                age:18
            }]
      )
  return (
    <div>
      <h1>List Item</h1>
      <table >
      {students.map((students) => (
           <tr key={students.id}>
                <th>ID {students.id}</th>
                <td>Name {students.name}</td>
                <td>Age {students.age}</td>
           </tr>
      ))}
      </table>
    </div>
  )
}
