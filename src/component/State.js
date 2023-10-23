import React, { useState } from "react";
const State = () => {
  const [user, setUser] = useState(true);
  const updateUser = () => {
    setUser(!user);
  };

  return (
    <div className="App">
      {user ? <h1>user exist</h1> : <h1>user not exist</h1>}
      <button onClick={updateUser}>{user ? <>log out</> : <>login</>}</button>
    </div>
  );
};

export default State;
