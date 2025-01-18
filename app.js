const btn = document.querySelectorAll('button');
const result = document.getElementById('result');


function addInputValue(text) {
    if(result.value == 'Error') {
        result.value = text;
    } else {
        result.value += text
    }
}

function deleteFunc() {
    result.value = result.value.slice(0, result.value.length - 1)
}

function clearFunc() {
    result.value = '';
}

function getResult() {
    try{
        result.value = eval(result.value)
    } 
    catch(error) {
        result.value = 'Error';
    }
}