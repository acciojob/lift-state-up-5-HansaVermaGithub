import React from "react";

function Login({setIsLoggedIn}){
    const handleSubmit=(e)=>{
      e.preventDefault();
      setIsLoggedIn(true);
    };
    return(
        <>
           <h3>Login Form</h3>
           
           <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" required />
            <br/><br/>
            <input type="Password" placeholder="Password" required/>
            <br/><br/>
            <button type="submit">Login</button>
           </form>
        </>
    )
}
 
export default Login;