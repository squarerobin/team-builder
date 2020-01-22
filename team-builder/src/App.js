import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [members, setMembers] = useState(['Asterix', 'Obelix', 'Asuranceturix', 'Panoramix', 'Ideafix'])


  return (
    <div className="App">
     <ul>
     
      {
        members.map(member => {
          return(
            <div className="members">
              <li>{member}</li>
            </div>
          )
        })
      }


     </ul>
    </div>
  );
}

export default App;
