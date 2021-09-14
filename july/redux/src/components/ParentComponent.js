import { Fragment } from "react";
// step 6
import { connect } from "react-redux";
import { changeName } from "../actions";
import ChildComponent from "./ChildeComponent";
const ParentComponent = (props) => {
  const { props, changeName } = props;
  return (
    <Fragment>
      <button onClick={() => changeName("hi")}>click me</button>
      <ChildComponent store={store}></ChildComponent>
    </Fragment>
  );
};

const mapStateToProps = (store) => {
  return {
    store,
  };
};
const mapDispatchToProps = { changeName };
export default connect(mapStateToProps, mapDispatchToProps)(ParentComponent);
