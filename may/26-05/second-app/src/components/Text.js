function Text() {
  return <div>Hi i'm component</div>;
}
function Hallo(props) {
  return (
    <div>
      Welcome {props.userName} to React , you are {props.age}
    </div>
  );
}
export { Text, Hallo };
