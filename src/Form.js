import React, {useState} from 'react'


const Form = (props) => {
    console.log(props)
    const  [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [role, setRole] = useState("");

       


    return (
      <div className="form">
        <form
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <label htmlFor="name" id="name">
            Name:{" "}
          </label>
          <input
            type="text"
            name="name"
            onChange={e => {
              setName(e.target.value);
              console.log("name: ", name);
            }}
          ></input>
          <label htmlFor="email" id="email">
            Email:{" "}
          </label>
          <input
            type="email"
            name="email"
            onChange={e => {
              setEmail(e.target.value);
              console.log("email: ", email);
            }}
          ></input>
          <select
            onChange={e => {
              //debugger;
              setRole(e.target.value);
              console.log("selected: ", role);
            }}
          >
            <option>Choose a role:</option>
            <option>Front-End Developer</option>
            <option>Back-End Developer</option>
            <option>Designer</option>
            <option>UX Specialist</option>
            <option>SEO expert</option>
          </select>
          <button
            type="submit"
            onChange={e => {
              //debugger;
            }}
          >
            Send
          </button>
        </form>
      </div>
    );

}



export default Form