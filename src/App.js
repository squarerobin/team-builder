import React, {useState} from 'react';
import './App.css';
import Form from './Form'

function App() {

  const [members, setMembers] = useState([
    {
      id: "0",
      name: "Asterix",
      email: "asterix@gmail.com",
      role: "Front-End Developer"
    },
    {
      id: "1",
      name: "Obelix",
      email: "obelix@gmail.com",
      role: "Back-End Developer"
    },
    {
      id: "2",
      name: "Asuranceturix",
      email: "asuranceturix@gmail.com",
      role: "SEO expert"
    },
    {
      id: "3",
      name: "Panoramix",
      email: "panoramix@gmail.com",
      role: "Designer"
    },
    {
      id: "4",
      name: "Ideafix",
      email: "ideafix@gmail.com",
      role: "UX Specialist"
    }
  ]);
 
  const [memberToEdit, setMemberToEdit] = useState('')
  

  const editMember = (member) => {

    //debugger;
    setMemberToEdit(member)
    console.log("Member added to memberToEdit", memberToEdit)
    document.querySelector('#name').value = member.name
    document.querySelector("#email").value = member.email
    

    //Custom function that changes a select element's option.
    function select(selectId, optionValToSelect) {
      //Get the select element by it's unique ID.
      const selectElement = document.getElementById('roles');
      //Get the options.
      var selectOptions = selectElement.options;
      //Loop through these options using a for loop.
      for (var opt, j = 0; (opt = selectOptions[j]); j++) {
        //If the option of value is equal to the option we want to select.
        if (opt.value === optionValToSelect) {
          //Select the option and break out of the for loop.
          selectElement.selectedIndex = j;
          break;
        }
      }
    }

      
    select('role', member.role)
    

  }

// ['Asterix', 'Obelix', 'Asuranceturix', 'Panoramix', 'Ideafix']


  return (
    <div className="App">
    
    
      <div className="membersAndEditButtons">
        
        
        {
          
          members.map(member => {
            return (
              <div>
                <button
                  key={`${member.id}-button`}
                  onClick={e => {
                    e.preventDefault();
                   
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
              
          
      </div>
      <Form></Form>

    </div>
  );
}

export default App;
