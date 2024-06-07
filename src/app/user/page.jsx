"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

function Page() {
//https://jsonplaceholder.typicode.com/users/3

 
 


  useEffect( ()=>{
    const getData = async() => {
      const d = await axios.get("https://jsonplaceholder.typicode.com/users/3");
      console.log(d);
    }
    getData();

  },[]);

  

  return (
    <div></div>
  )
}

export default Page