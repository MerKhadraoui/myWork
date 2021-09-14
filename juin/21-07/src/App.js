import React, { useRef, useState } from "react";
const App = () => {
  const [countInp, setCountInp] = useState("");
  const userTextInput = useRef(null);
  const getMe = () => {
    userTextInput.current.focus();
    console.log(userTextInput);
  };
  const count = useRef(0);
  const changeBg = () => {
    userTextInput.current.style.backgroundColor = "red";
  };
  return (
    <React.Fragment>
      <input type="text" ref={userTextInput} />
      <button onClick={getMe}>Getme focused</button>
      <button onClick={changeBg}>change bg</button>
      <button onClick={() => setCountInp(countInp ++)}>{countInp} </button>
      <button onClick={() => count.current++}>{count.current} </button>
    </React.Fragment>
  );
};

export default App;
