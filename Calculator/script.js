let inputBox = document.getElementById("inputBox");
let buttons = document.querySelectorAll(".button");

let str = '';

const operators = ['+', '-', '*', '/', '%'];

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {

        let buttonText = e.target.innerText;
        let lastChar = str[str.length - 1];

        if (buttonText === "AC") {
            str = '';
            inputBox.value = str;

        } else if (buttonText === "DEL") {
            str = str.substring(0, str.length - 1);
            inputBox.value = str;

        } else if (buttonText === "=") {
            try {
                str = eval(str).toString();
                inputBox.value = str;
            } catch {
                inputBox.value = "Error";
                str = '';
            }

        } else if (operators.includes(buttonText)) {
            // prevent two operators in a row
            if (str === '' || operators.includes(lastChar)) return;

            str += buttonText;
            inputBox.value = str;

        } else {
            // numbers and dot
            str += buttonText;
            inputBox.value = str;
        }
    });
});











// let inputBox = document.getElementById("inputBox");

// let buttons = document.querySelectorAll(".button");

// let str = '';


// buttons.forEach((button) => {
//     button.addEventListener("click", (e) => {
//         console.log(inputBox);
        
//         let buttonText = e.target.innerText;
//         if(buttonText === "AC"){
//             str = '';
//             inputBox.value = str;
//         }else if(buttonText === "DEL"){
//             str = str.substring(0, str.length - 1);
//             inputBox.value = str;
//         }else if(buttonText === "="){
//             str = eval(str);
//             inputBox.value = str;
//         }else{
//             str += buttonText;
//             inputBox.value = str;
//         }
//     })

// })
