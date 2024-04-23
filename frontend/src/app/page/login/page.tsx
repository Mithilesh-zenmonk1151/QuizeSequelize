'use client'
import { FormEvent, useState } from 'react'
 
export default function Signup() {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [role,setRole]=useState("");
  console.log("dferwtgerwtrwetgr")
  async function handleOnSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get('password') as string;
    const role = formData.get("role") as string;
    console.log("role", role);
    const data = { name, email, password, role };
    console.log("Sending data:", data);
    try {
      const response = await fetch('http://localhost:4000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Failed to sign up');
      }
      const responseData = await response.json();
      console.log('Response from server:', responseData);
    } catch (error) {
      console.error('Error signing up:', error);
    }
  }
 
  return (
    <form onSubmit={handleOnSubmit}>
      <input type="email" name="email" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
      <input type="password" name="password"  placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button type="submit">Submit</button>
    </form>
  )
}