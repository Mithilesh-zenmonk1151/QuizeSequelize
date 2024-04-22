'use client'
import { FormEvent, useState } from 'react'
 
export default function Signup() {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [role,setRole]=useState("");
  console.log("dferwtgerwtrwetgr")
  async function handleOnSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)
    const name= formData.get("name")
    const email = formData.get("email")
    const password = formData.get('password')
    const role= formData.get("role"); 
    console.log("role",role)   
    const response = await fetch(' http://localhost:4000/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify({name,email,password,role}),
    })
    
 
    // Handle response if necessary
    const data = await response.json()
    // ...
  }
 
  return (
    <form onSubmit={handleOnSubmit}>
      <input type="text" name="name" placeholder='enter your name' value={name} onChange={(e)=>setName(e.target.value)}/>
      <input type="email" name="email" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
      <input type="password" name="password"  placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <input type="text" name="role" placeholder='role' value={role} onChange={(e)=>setRole(e.target.value)}/>
      <button type="submit">Submit</button>
    </form>
  )
}