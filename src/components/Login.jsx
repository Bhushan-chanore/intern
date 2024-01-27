// Login.js
import React, { useState } from 'react';
import { IoAdd, IoClose } from 'react-icons/io5';

const Login = ({ onClose }) => {

  const [info , setinfo] = useState({
    topic:"",
    message:""
  });

  const handlechange =(e)=>{

    const {name , value} = e.target;

    setinfo((previnfo) =>({
      ...previnfo,
      [name]:value,
    }))
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:5000/api/submit-info", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
      });
  
      const data = await response.json();
      const url = "http://localhost:5000/api/submit-info";

      fetch(url)
        .then(res => res.json())
        .then(result => {
          console.log(result);
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
      
      if (data.success) {
        console.log("Success:", data.message);
  
        alert("Your Topic Added");
  
        setinfo({
          topic: "",
          message: "",
        });
  
        console.log("Form Cleared:", info);
      } else {
        alert("Some error. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting data. Please try again.");
    }
  };
  


  return (
    <div className="login-popup ">
      {/* Your login form goes here */}
      <form onSubmit={handleSubmit}>

        <div className='log'>
          <h4>Add Content</h4>
          <button onClick={onClose} className='log2'><IoClose /></button>
        </div>

        <div>
          <label>Topic Name</label><br />
          <input placeholder='Topic Name' type='text' name='topic' value={info.topic} onChange={handlechange}/>
        </div>

        <div className='log3' >
          <textarea className='log4' type='text' placeholder='text enter' name='message' value={info.message} onChange={handlechange} />
          <input type='file' accept=".pdf" className='log4' />
        </div>

        <div className='log5'>
          <button className='log6'>close</button>
          <button className='log7' type='submit'><IoAdd />Add Content</button>
        </div>

      </form>
    </div>
  );
};

export default Login;
