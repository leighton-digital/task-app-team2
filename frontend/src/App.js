import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <h1>Task Management</h1>work experience
      <form>
  <label for="fname">First name:</label><br/>
  <input type="text" id="fname" name="fname"/><br/>
  <label for="lname">Last name:</label><br/>
  <input type="text" id="lname" name="lname"/>
  <input type="submit" value="Submit"/>
</form>
  
    </div>
  );
};

export default App;
