import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form'

function App() {

  const [members, setMembers] = useState(
    [
     {
      id : "0",
      name: "Asterix"
     },
     {
      id : "1",
      name: "Obelix"
     },
     {
      id : "2",
      name: "Asuranceturix"
     },
     {
      id : "3",
      name: "Panoramix"
     },
     {
      id : "4",
      name: "Ideafix"
     }

    ]
  )



// ['Asterix', 'Obelix', 'Asuranceturix', 'Panoramix', 'Ideafix']

  return (
    <div className="App">
     <ul>
     
      {
        members.map(member => {
          return(
            <div className="members">
              <li key={member.id}>{member.name}</li>
              
            </div>
          )
        })
      }
      
      <Form></Form>

     </ul>
    </div>
  );
}

export default App;
