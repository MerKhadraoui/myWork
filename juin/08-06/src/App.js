import React, { useState, useEffect } from "react";
import Loding from "./components/Loding";
import axios from "axios";
import Country from "./components/Country";
function App() {
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState([]);
  const [loding, setLoding] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoding(false);
    }, 1000);
  }, []);
  function changeHandle(e) {
    setUserInput(e.target.value);
  }
  function submitHandle(e) {
    e.preventDefault();
    let textToUrl = encodeURIComponent(userInput);
    console.log(textToUrl);
    let endPoint = `https://restcountries.eu/rest/v2/name/${textToUrl}`;
    axios(endPoint)
      .then(({ data }) => setResult(data))
      .catch((err) => console.log(`You had an ${err}`));
    // an other method
    // fetch(endPoint)
    //   .then((res) => res.json())
    //   .then((data) => setResult(data));
  }
  if (loding) return <Loding />;
  return (
    <React.Fragment>
      <form onSubmit={submitHandle}>
        <input
          type="text"
          value={userInput}
          onChange={changeHandle}
          placeholder=" Enter country name:"
        />
        <button type="submit">Search</button>
      </form>
      <Country result={result} />
    </React.Fragment>
  );
}
export default App;
