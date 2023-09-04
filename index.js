let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('.btn');
let expression  = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.value == '='){
            expression = eval(expression)
            if(isNaN(expression)){
                expression =''; 
                input.value = expression;
            }
            else
                input.value = expression;   
        }
        else if(expression === "" && e.target.value === "0"){
                expression='';
                input.value = expression;
        }
        else if(expression === '' && e.target.value === "."){
            expression = '0.'
            input.value = expression;
        }
        else if(e.target.value == 'RESET'){
            expression = '';
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