import React from 'react'
import axios from 'axios'
function Add() {
function handleSubmit()
{
    axios.post('https://mswd-sdp.onrender.com/newuser',{
        name:document.getElementById('un').value,
        email:document.getElementById('email1').value,
        password:document.getElementById('pwd').value,
        role:document.getElementById('role').value
      }).then((res)=>{
        console.log('Added Successfully')
      })
}
  return (
    <div>
      Name : <input type="text"  id='un'/>
      Email : <input type="email"  id='email1'/>
      Password : <input type="password"  id='pwd'/>
      <select placeholder='Select Role' id='role'>
      <option>admin</option>
      <option>user</option>
      <option>emp</option>
      </select>
      <button onClick={handleSubmit}>Add</button>
    </div>
  )
}

export default Add
