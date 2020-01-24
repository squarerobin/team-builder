import React, {useState} from 'react'


const Form = (props) => {
    console.log("props is: ", props)
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