import React, { useState, useEffect } from "react";
import axios from 'axios'



const Form = (props) => {
    console.log("props is: ", props)
    const  [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [role, setRole] = useState('');
/* useEffect((e) =>  {
    const onSubmitHandler = () => {
   debugger;

  
    setMember(...members, member)
    axios.post("/", { name, email, role });

    }
}, [email,name, role, onSubmitHandler])
   
  */

      console.log('members: ', props.members)

    return (
      <div className="form">
        <form
          onClick={(e) =>  e.preventDefault}>
        
    
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={e => {
              setName(e.target.value);
              console.log("name: ", name);
            }}
          ></input>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={e => {
              setEmail(e.target.value);
              console.log("email: ", email);
            }}
          ></input>
          <select
            id="roles"
            onChange={e => {
              //debugger;
              setRole(e.target.value);
              console.log("selected: ", role);
            }}
          >
            <option>Choose a role:</option>
            <option value="Front-End Developer">Front-End Developer</option>
            <option value="Back-End Developer">Back-End Developer</option>
            <option value="Designer">Designer</option>
            <option value="UX Specialist">UX Specialist</option>
            <option value="SEO expert">SEO expert</option>
          </select>
          <button
            type="submit"
            onClick={e => {
              //debugger;
              //axios.post("/", { name, email, role });
            }}
          >
            Send
          </button>
        </form>
      </div>
    );

}



export default Form