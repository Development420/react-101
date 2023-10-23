import React, { useState } from "react";
const Example = () => {
  const [user, setUser] = useState(true);
  const updateUser = () => {
    setUser(!user);
  };

  return (
    <div className="App">
      {user ? (
        <h1>
          <h1>Hola,Monika</h1>
          <h2>Age:19</h2>
          <h2>Phone:00000</h2>
          <h2>E-mail: monikasingh33713@gmail.com</h2>
        </h1>
      ) : (
        <h1>user not exist</h1>
      )}
      <button onClick={updateUser}>{user ? <>log out</> : <>login</>}</button>
    </div>
  );
};

export default Example;
