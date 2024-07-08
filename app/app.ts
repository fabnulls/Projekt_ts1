
const zahl1Input: HTMLInputElement = document.getElementById('zahl1') as HTMLInputElement;
const zahl2Input: HTMLInputElement = document.getElementById('zahl2') as HTMLInputElement;
const submitBtn: HTMLButtonElement = document.getElementById('submitBtn') as HTMLButtonElement;
const resultDiv: HTMLDivElement = document.getElementById('result') as HTMLDivElement;

submitBtn.addEventListener('click', () => {

    const zahl1: number = parseFloat(zahl1Input.value);
    const zahl2: number = parseFloat(zahl2Input.value);
    const operation: string = (document.querySelector('input[name="operation"]:checked') as HTMLInputElement)?.value;
    let output: number = 0;
    let operator: string = ' ';

    switch(operation){
        case 'Add':{
            output = zahl1+zahl2
            operator = '+'
            break;
        }
        case 'Sub':{
            output = zahl1-zahl2
            operator = '-'
            break;
        }
        case 'Mult':{
            output = zahl1*zahl2
            operator = '*'
            break;
        }
        case 'Div':{
            output = zahl1/zahl2
            operator = '/'
            break;
        }
    }
    resultDiv.innerHTML = `${zahl1} ${operator} ${zahl2} = ${output}`;


});
;
