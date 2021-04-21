import Counter from "./Counter";
import Buttons from "./Buttons";
import { useState } from "react";
function Main(props){
    const [counter, setCounter] = useState(0);
    return(
        <div className="main">
            <Counter counter={counter} />
            <Buttons counter={counter} setCounter={setCounter} />
        </div>
    )
};
export default Main;