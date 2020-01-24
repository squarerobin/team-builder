import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form'

function App() {

  const [members, setMembers] = useState([
    {
      id: "0",
      name: "Asterix",
      email: "asterix@gmail.com"
    },
    {
      id: "1",
      name: "Obelix",
      email: "obelix@gmail.com"
    },
    {
      id: "2",
      name: "Asuranceturix",
      email: "asuranceturix@gmail.com"
    },
    {
      id: "3",
      name: "Panoramix",
      email: "panoramix@gmail.com"
    },
    {
      id: "4",
      name: "Ideafix",
      email: "ideafix@gmail.com"
    }
  ]);
 
  const [memberToEdit, setMemberToEdit] = useState('')

  const editMember = (member) => {

    //debugger;
    setMemberToEdit(member)
    console.log("Member added to memberToEdit", memberToEdit)
  }



// ['Asterix', 'Obelix', 'Asuranceturix', 'Panoramix', 'Ideafix']


  return (
    <div className="App">
    
    
    <div className="membersAndEditButtons">
    <ul>
    
    {
      
      members.map(member => {
        return (
          <div>
            <button
              key={`${member}-button`}
              onClick={e => {
                e.preventDefault();
                //debugger;
                console.log("the edit button : ", member.id);
                editMember(member);
              }}
            >
              edit
            </button>
            <li key={member.id}>{member.name}</li>
          </div>
        );
              
            })
          }
          
          </ul>
          </div>
    <Form></Form>

    </div>
  );
}

export default App;
