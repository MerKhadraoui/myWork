import React from "react";
import { add, display } from "./helpers";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [],
      isLogged: false,
      data: { name: "meriem", age: 33 },
    };
    this.handelSub = this.handelSub.bind(this);
    this.sum = function () {
      console.log("i'am function built in constraction");
    };
  }
  print = () => console.log("Hi im print");
  handelSub() {
    console.log("i need to be bind");
  }
  render() {
    this.newUser = () => console.log("hi i'm inside render");
    return (
      <div>
        {this.print()}
        {this.handelSub()}
        {this.newUser()}
        {this.sum()}
        <h1>
          Hi this is react classe {this.state.data.name},{add(4, 6)}
        </h1>
      </div>
    );
  }
}
export default App;
