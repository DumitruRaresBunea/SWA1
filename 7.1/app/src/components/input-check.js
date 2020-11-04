import React, { useState } from "react";

export default function CheckInput() {
  const [userName, setUserName] = useState("");
  return (
    <>
      <input
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      ></input>
      {!userName ? <h1>NothingProvided</h1> : <h2>{userName}</h2>}
    </>
  );
}
