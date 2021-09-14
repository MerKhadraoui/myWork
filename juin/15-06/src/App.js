import React from "React";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Data from "./data.json";
import Menu from "./components/Menu";
import Soon from "./components/Soon";
import About from "./components/About";
// import Product from "./components/Product";
// import ProductInfo from "./components/ProductInfo";
const App = () => {
  return (
    <Router>
      <Menu />
      <h1 className="jumbotron">onlinr Store</h1>
      <switch>
        <Route path={process.env.PUBLIC_URL + "/"} exact component={Home} />
        <Route path="/" exact component={Soon} />
        <Route path="/" exact component={About} />
      </switch>
    </Router>
  );
};

export default App;
