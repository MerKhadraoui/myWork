import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";
import ToDo from "./components/ToDos";
function App() {
  const [list, setList] = useState([]);
  const remove = (itemToRemove) => {
    const newArr = list.filter((item) => item.id !== itemToRemove);
    setList(newArr);
  };
  const check = (itemToCheck) => {
    list.filter((item) => {
      if (item.id == itemToCheck) {
        item.done = !item.done;
      }
      return item;
    });
  };
  return (
    <React.Fragment>
      <Header />
      <List setList={setList} />
      <ToDo list={list} remove={remove} checkTodo={check} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
