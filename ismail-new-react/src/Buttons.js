function Buttons(props){
    function plus(){
        const x = props.counter + 1;
        props.setCounter(x);
    };
    function minus(){
        const x = props.counter - 1;
        props.setCounter(x);
    };
    function zero(){
        props.setCounter(0);
    };
    return(
        <div className="buttons">
            <button className="Enlarge" onClick={plus}>
                Увеличить
            </button>
            <button className="Reduce" onClick={minus}>
             Уменьшить
            </button>
            <button className="Reset" onClick={zero}>
             Сбросить
            </button>   
        </div>
    )
}
export default Buttons