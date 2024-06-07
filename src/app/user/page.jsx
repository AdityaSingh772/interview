"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Page() {
  const [data, setdata] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users/3");
        setdata(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    getData();
  }, []);

  const { name, username, email } = data || {};

  return (
    <div>
     
        <div>
          <p>Name: {name}</p>
          <p>Username: {username}</p>
          <p>Email: {email}</p>
        </div>
      
        
     
    </div>
  );
}

export default Page;
