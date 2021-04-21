function Www(){
    //Допиши код так, чтобы в переменной positive остались только положительные числа из массива
    const array = [22, 0, -45, 1001, 8, -6, -0.1, 101, 2.5, -55555];
    const positive = array.filter(item => item >= 0 );
    //Напиши фильтр, который пропустит только те элементы (объекты), у которых свойство error равно false. Выведи полученный результат в консоль.
    const messages = [
        {message: 'hello', error: true},  
        {message: 'javascript', error: false},  
        {message: 'intocode', error: true},  
        {message: 'react', error: true},  
        {message: 'angular', error: false}, 
        {message: 'es6', error: false}, 
    ];
    const messagesFalse = messages.filter(item => item.error == false);
    console.log(messagesFalse);
    //Используя метод .map создай новый массив, где слова короче пяти символов заменены на звездочку.
    const words= ['intocode', 'js', 'react', 'css', 'angular', 'bootstrap', 'html'];
    const wordsNew = words.map( function ( item ) {
        if (item.length < 5 ) {
            return "*"
        }
        return item
    });
    // function half(number) {
    //     return number / 2;
    // }
    const half = number => number / 2;
  
    // function showConsole() {
    //     console.log('intocode');
    // }
    const showConsole = () => console.log('intocode');
  
    // function concatWords(first, second) {
    //     return first + second;
    // }
    const concatWords = (first, second) => first + second;
  
    // const justText = () => 'intocode';
    function justText(){
        return 'intocode'
    };
    // const logging = text => console.log(text);
    function logging(text){
        console.log(text);
    };
    // const add = (x,y) => {
    // const z = 3;
    // return z * x * y;
    // }
    function add(x,y){
        const z = 3;
        return z * x * y;
    };
    // const onlyPositive = (number) => {
    // if(number < 0) {
    //     return false;
    // }
    // return true;
    // }
    function onlyPositive(number) {
        if (number < 0){
            return false;
        } else {
            return true;
        }     
    };
    return (
        <div>
           <div>
                {positive}
           </div>
           <div>
                {wordsNew}
           </div>
        </div>
    )  
  };
  export default Www;
  