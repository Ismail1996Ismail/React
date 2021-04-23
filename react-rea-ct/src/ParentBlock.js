import Small from "./Small";
import Large from "./Large";
function ParentBlock() {
    const number44 = 44;
    return (<div>
        {number44 < 50 ? <Small /> : <Large />}
    </div>)
};
// Задача 4

// Напиши компонент с названием `ParentBlock`, который содержит переменную с любоым числовым значением от 0 до 100.

// Если значение переменной меньше 50, то компонент должен вывести дочерный компонент с названием `Small`, иначе компонент с названием `Large`.
export default ParentBlock;