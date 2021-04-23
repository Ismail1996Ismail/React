function SomeBlock() {
    const dark = true;
    return(
      <div className={dark===true ? "dark" : "light"}>
        Hello, ternary operator!
      </div>
    );
    //Допиши код компонента так, чтобы в зависимости от значения переменной dark блок выводился либо темным либо светлым:
};
export default SomeBlock;