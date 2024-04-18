"use client";
import Buttons from "@/app/componenet/buttons/Buttons";
import TextFieldCompo from "@/app/componenet/textField/TextFieldCompo";
import React, { useState } from "react";
import { Box } from "@mui/material";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleOnSubmit=(event: React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    console.log(name,email,password,confirmPassword)
    
    
  }

  return (
    <>
      <Box>
        <form onSubmit={handleOnSubmit}>
          <TextFieldCompo
            Label="Name"
            placeholder="enter your name here"
            Type="text"
            value={name}
            setValue={setName}
          />
          <TextFieldCompo
            Label="Email"
            placeholder="enter your email here"
            Type="email"
            value={email}
            setValue={setEmail}
          />
          <TextFieldCompo
            Label="Password"
            placeholder="enter password"
            Type="password"
            value={password}
            setValue={setPassword}
          />
          <TextFieldCompo
            Label="Confirmpassword"
            placeholder="enter confirmpassword"
            Type="password"
            value={confirmPassword}
            setValue={setConfirmPassword}
          />
          <Buttons text="submit" type="submit" />
        </form>
      </Box>
    </>
  );
};

export default Signup;
