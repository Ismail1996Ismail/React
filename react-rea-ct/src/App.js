function App(props) {
    const isDay = props.hours < 18;
    return(isDay ? "сейчас день": "сейчас вечер");
        // Как его нужно вызвать, чтобы он вывел текст “сейчас вечер”?
    // Для этого нужно чтобы props.hourse был меньше 18(т.е если условие true)
};
export default App;