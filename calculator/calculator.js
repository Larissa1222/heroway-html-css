// Implemente as funções de uma calculadora. ok
// Não permitir divisões por zero.  OK
// Não permitir strings como valores (notificar o usuário) ok

const clear = document.getElementById('btn-clear');     //CLEAR BUTTON
const add = document.getElementById('btn-add');         //ADD BUTTON
const sub = document.getElementById('btn-sub');         //SUBTRACTION BUTTON
const mult = document.getElementById('btn-mult');       //MULTIPLICATION BUTTON
const div = document.getElementById('btn-div');         //DIVIDED BUTTON
const perc = document.getElementById('btn-perc');       //PERCENT BUTTON
const elev = document.getElementById('btn-elev')        //ELEV BUTTON

let result = document.getElementById('result');         //RESULT



clear.addEventListener('click', () => {     //CLEAR BUTTON
    let firstInput = document.getElementById('first-input').value = '';
    let secondInput = document.getElementById('second-input').value = '';

    result.innerText = '0';
});

add.addEventListener('click', () => {       //ADDICION BUTTON
    let firstInput = document.getElementById('first-input').value;      //RECEIVE INPUTS VALUES

    let secondInput = document.getElementById('second-input').value;      //RECEIVE INPUTS VALUES
    
    if (isNaN(firstInput) || isNaN(secondInput)) {  //CHECK IF INPUT VALUES ARE NUMBERS
        alert('ONLY NUMBERS PLEASE!');      //ALERT THE USER TO TYPE ONLY NUMBERS
        //CLEAN INPUTS    
        let firstInput = document.getElementById('first-input').value = '';
        let secondInput = document.getElementById('second-input').value = '';
    }
    else{   //IF THE VALUES ARE NUMBERS THE OPERATION WILL OCCUR
        result.innerText =  parseInt(firstInput) + parseInt(secondInput);
    }

});

sub.addEventListener('click', () => {       //SUBTRACTION OPERATION
    let firstInput = document.getElementById('first-input').value;      //RECEIVE INPUTS VALUES

    let secondInput = document.getElementById('second-input').value;    //RECEIVE INPUTS VALUES
    
    if (isNaN(firstInput) || isNaN(secondInput)) {  //CHECK IF INPUT VALUES ARE NUMBERS
        alert('ONLY NUMBERS PLEASE!');      //ALERT THE USER TO TYPE ONLY NUMBERS
        //CLEAN INPUTS 
        let firstInput = document.getElementById('first-input').value = '';
        let secondInput = document.getElementById('second-input').value = '';
    }
    else{   //IF THE VALUES ARE NUMBERS THE OPERATION WILL OCCUR
        result.innerText =  firstInput - secondInput;
    }
});

mult.addEventListener('click', () =>{       //MULTIPLICATION OPERATION
    let firstInput = document.getElementById('first-input').value;      //RECEIVE INPUTS VALUES

    let secondInput = document.getElementById('second-input').value;      //RECEIVE INPUTS VALUES

    if (isNaN(firstInput) || isNaN(secondInput)) {  //CHECK IF INPUT VALUES ARE NUMBERS
        alert('ONLY NUMBERS PLEASE!');      //ALERT THE USER TO TYPE ONLY NUMBERS
        //CLEAN INPUTS 
        let firstInput = document.getElementById('first-input').value = '';
        let secondInput = document.getElementById('second-input').value = '';
    }
    else{   //IF THE VALUES ARE NUMBERS THE OPERATION WILL OCCUR
        result.innerText =  firstInput * secondInput;
    }
});

div.addEventListener('click', () =>{        //DIVISION OPERATION
    let firstInput = document.getElementById('first-input').value;      //RECEIVE INPUTS VALUES

    let secondInput = document.getElementById('second-input').value;      //RECEIVE INPUTS VALUES
    parseInt(firstInput);     //CONVERT STRING TO INT
    parseInt(secondInput);    //CONVERT STRING TO INT

        if (isNaN(firstInput) || isNaN(secondInput) || firstInput == 0 || secondInput == 0) {  //CHECK IF INPUT VALUES ARE NUMBERS
        alert('ONLY NUMBERS OR CANNOT DIVIDE BY ZERO');      //ALERT THE USER TO TYPE ONLY NUMBERS
        //CLEAN INPUTS 
        let firstInput = document.getElementById('first-input').value = '';
        let secondInput = document.getElementById('second-input').value = '';
    }
    else{   //IF THE VALUES ARE NUMBERS THE OPERATION WILL OCCUR
        result.innerText =  firstInput / secondInput;
    }

});

perc.addEventListener('click', () =>{       //PERCENT OPERATION
    let firstInput = document.getElementById('first-input').value;      //RECEIVE INPUTS VALUES

    let secondInput = document.getElementById('second-input').value;      //RECEIVE INPUTS VALUES

    if (isNaN(firstInput) || isNaN(secondInput)) {  //CHECK IF INPUT VALUES ARE NUMBERS
        alert('ONLY NUMBERS PLEASE!');      //ALERT THE USER TO TYPE ONLY NUMBERS
        //CLEAN INPUTS 
        let firstInput = document.getElementById('first-input').value = '';
        let secondInput = document.getElementById('second-input').value = '';
    }
    else{   //IF THE VALUES ARE NUMBERS THE OPERATION WILL OCCUR
        result.innerText =  firstInput * (secondInput / 100);
    }
});

elev.addEventListener('click', () =>{       //ELEV OPERATION
    let firstInput = document.getElementById('first-input').value;      //RECEIVE INPUTS VALUES

    let secondInput = document.getElementById('second-input').value;      //RECEIVE INPUTS VALUES

    if (isNaN(firstInput) || isNaN(secondInput)) {  //CHECK IF INPUT VALUES ARE NUMBERS
        alert('ONLY NUMBERS PLEASE!');      //ALERT THE USER TO TYPE ONLY NUMBERS
        //CLEAN INPUTS 
        let firstInput = document.getElementById('first-input').value = '';
        let secondInput = document.getElementById('second-input').value = '';
    }
    else{   //IF THE VALUES ARE NUMBERS THE OPERATION WILL OCCUR
        result.innerText =  Math.pow(firstInput, secondInput);
    }
});
