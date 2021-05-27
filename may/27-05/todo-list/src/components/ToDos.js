const ToDo = (props) => {
  const userTodos = props.list.map((toDo, i) => (
    <li key={i}>
      <input
        type="checkbox"
        defaultChecked={toDo.done}
        onChange={() => props(toDo.id)}
      />
      {ToDo.title}
      <i onClick={() => props.check(toDo.id)}> </i>
    </li>
  ));

  return <ul>{userTodos} </ul>;
};
export default ToDo;
