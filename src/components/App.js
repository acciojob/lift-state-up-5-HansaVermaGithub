import Login from "./Login.jsx"
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  return (
    <div>
      
        {isLoggedIn ? (<p> you are logged in </p>) : 
          (<Login setIsLoggedIn={setIsLoggedIn}/>)
        }
         
        
    </div>
  )
}

export default App
