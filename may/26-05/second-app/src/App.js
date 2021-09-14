import { Text, Hallo } from "./components/Text";
let name = "Meriem";
let yourAge = 33;
const names = ["zayn", "olga", "Nancy"];
const ListItems = names.map((name, i) => <li key={i}>{name}</li>);
function App() {
  return (
    <div>
      <h1>Hi i'm React</h1>
      <h1>
        <Hallo userName={name} age={yourAge} namesArr={names} />
      </h1>
      <h1>
        <Text />1
      </h1>
      <h1>
        <Text />2
      </h1>
      <h1>
        <Text />3
      </h1>
      <h1>
        <Text />4
      </h1>
      <h1>
        <Text />5
      </h1>
      <h1>
        <Text />6
      </h1>
      <ul>{ListItems} </ul>
    </div>
  );
}
export default App;
