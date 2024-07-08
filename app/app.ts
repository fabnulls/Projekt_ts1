
const zahl1Input: HTMLInputElement = document.getElementById('zahl1') as HTMLInputElement;
const zahl2Input: HTMLInputElement = document.getElementById('zahl2') as HTMLInputElement;
const submitBtn: HTMLButtonElement = document.getElementById('submitBtn') as HTMLButtonElement;
const resultDiv: HTMLDivElement = document.getElementById('result') as HTMLDivElement;

submitBtn.addEventListener('click', () => {

    const zahl1: number = parseFloat(zahl1Input.value);
    const zahl2: number = parseFloat(zahl2Input.value);

    console.log(zahl1);
    console.log(zahl2);

    resultDiv.innerHTML = `Zahl 1: ${zahl1} Zahl 2: ${zahl2}`;

});
;
