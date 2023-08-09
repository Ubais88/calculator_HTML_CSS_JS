let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('.btn');
let expression  = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.value == '='){
            expression = eval(expression)
            input.value = expression;
        }
        else if(e.target.value == 'RESET'){
            expression = '';
            console.log('inside',expression)
            input.value = expression;
        }
        else if(e.target.value == 'DEL'){
            expression = expression.substring(0 , expression.length -1);
            input.value = expression;
        }
        else if(e.target.value == 'x'){
            expression += '*';
            input.value = expression;
        }
        else{
            console.log(expression)
            expression += e.target.value;
            input.value = expression;
        }
    })
})