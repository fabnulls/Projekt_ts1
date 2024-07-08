var zahl1Input = document.getElementById('zahl1');
var zahl2Input = document.getElementById('zahl2');
var submitBtn = document.getElementById('submitBtn');
var resultDiv = document.getElementById('result');
submitBtn.addEventListener('click', function () {
    var _a;
    var zahl1 = parseFloat(zahl1Input.value);
    var zahl2 = parseFloat(zahl2Input.value);
    var operation = (_a = document.querySelector('input[name="operation"]:checked')) === null || _a === void 0 ? void 0 : _a.value;
    var output = 0;
    var operator = ' ';
    console.log(zahl1);
    console.log(zahl2);
    switch (operation) {
        case 'Add': {
            output = zahl1 + zahl2;
            operator = '+';
            break;
        }
        case 'Sub': {
            output = zahl1 - zahl2;
            operator = '-';
            break;
        }
        case 'Mult': {
            output = zahl1 * zahl2;
            operator = '*';
            break;
        }
        case 'Div': {
            output = zahl1 / zahl2;
            operator = '/';
            break;
        }
    }
    resultDiv.innerHTML = "".concat(zahl1, " ").concat(operator, " ").concat(zahl2, " = ").concat(output);
});
;
