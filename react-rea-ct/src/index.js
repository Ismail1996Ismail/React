import ReactDOM from "react-dom";
import App from "./App";
import BadComponent from "./BadComponent";
import SomeBlock from "./SomeBlock";
import ParentBlock from "./ParentBlock";
import "./styles.css";
const hours = 22;
ReactDOM.render(
  <>
    <App hours = {hours} />
    <BadComponent />
    <SomeBlock />
    <ParentBlock />
  </>,
  document.getElementById("root")
);
