import React from "react";

const Project1 = () => {
  return (
    <div className="App">
      {user ? (
        <h1>
          <b>CLICK ME GUYZZ!!</b>
        </h1>
      ) : (
        <h1></h1>
      )}
      <button onClick={""}>{user ? <>log out</> : <>login</>}</button>
    </div>
  );
};

export default Project1;
