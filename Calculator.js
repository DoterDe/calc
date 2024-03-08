// const one  =document.querySelector('1')
// const two =document.querySelector('2')
// const three =document.querySelector("3")
// const four =document.querySelector("4")
// const five =document.querySelector("5")
// const six =document.querySelector("6")
// const seven =document.querySelector("7")
// const eight =document.querySelector("8")
// const nine =document.querySelector("9")
// const zero =document.querySelector("0")
// const time =document.querySelector("*")
// const d =document.querySelector("/")
// const pluse =document.querySelector("+")
// const minuse =document.querySelector("-")
// const eq =document.querySelector("=")
// const C =document.querySelector("C")
// const Del =document.querySelector("Del")
// const dot  =document.querySelector(".")

let operator = '';
let operand1 = '';
let operand2 = '';
let result = '';

const display = document.querySelector('.answer');

const buttons = Array.from(document.querySelectorAll('button'));
buttons.map(button => {
    button.addEventListener('click', (e) => {
        const btnValue = e.target.id;

        if (btnValue === 'C') {
            operator = '';
            operand1 = '';
            operand2 = '';
            result = '';
            display.textContent = '';
        } else if (btnValue === '+' || btnValue === '-' || btnValue === '*' || btnValue === '/') {
            operator = btnValue;
            display.textContent = '';
        } else if (btnValue === '=') {
            operand2 = parseFloat(display.textContent);
            switch (operator) {
                case '+':
                    result = operand1 + operand2;
                    break;
                case '-':
                    result = operand1 - operand2;
                    break;
                case '*':
                    result = operand1 * operand2;
                    break;
                case '/':
                    if (operand2 !== 0) {
                        result = operand1 / operand2;
                    } else {
                        alert('Деление на ноль невозможно');
                        return;
                    }
                    break;
                default:
                    return;
            }
            display.textContent = result.toString();
            console.log(result);
            operand1 = result;
            console.log(operand1);
            operand2 = '';
        } else if (btnValue === 'Del') {
            let str = display.textContent;
            str = str.substr(0, str.length - 1);
            display.textContent = str;
        } else {
            if (!operator) {
                operand1 += btnValue;
            } else {
                operand2 += btnValue;
            }
            display.textContent += btnValue;
        }
    });
});