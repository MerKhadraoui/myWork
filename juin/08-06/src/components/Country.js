import React from "react";
const Country = ({ result }) => {
  const lands = result.map((obj, i) => {
    console.log(obj);
    const { name, flag, capital, population } = obj;
    return (
      <div key={i}>
        <h2>name</h2>
        <h2>capital: {capital} </h2>
        <h3>Population : {population}</h3>
        <img src={flag} alt={name} />
      </div>
    );
  });

  return <React.Fragment>{lands} </React.Fragment>;
};
export default Country;
