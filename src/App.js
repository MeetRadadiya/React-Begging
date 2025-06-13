import "./App.css";
import Headers from "./components/Headers";
import HomePage from "./components/HomePage";
import Footers from "./components/Footers";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Headers />
      <HomePage />
      <Footers />
    </Fragment>
  );
}

export default App;
