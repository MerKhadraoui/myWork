// step 2
const allReducers = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    case "INCREMENT":
      return { ...state, userName: action.payload };
    default:
      return state;
  }
};
export default allReducers;
