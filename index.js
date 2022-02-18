window.addEventListener("DOMContentLoaded", (e) =>{
    console.log(`DOM Loaded`)
    const solve = document.getElementById("add");
    const switchRoles = document.getElementById("reverse")
    const input = document.getElementById("number1")
    const output = document.getElementById("number2")
    const type1 = document.getElementById("input")
    const type2 = document.getElementById("output")
    let result;
    input.value = ""
    output.value = ""
    const convert = () => {
        output.value = ""
        if(type1.value === "cm" &&type2.value === "in"){
            let firstNumber = input.value;
            result = firstNumber / 2.54;
            result.toFixed(1);
            output.value += result;

        }else if(type1.value === "in" &&type2.value === "cm"){
            let firstNumber = input.value;
            result = firstNumber * 2.54;
            result.toFixed(1);
            output.value += result;
        }

        if(type1.value === "mm" &&type2.value === "in"){
            let firstNumber = input.value;
            result = firstNumber / 25.4 ;
            output.value += result.toFixed(4);
        }else if(type1.value === "in" &&type2.value === "mm"){
            let firstNumber = input.value;
            result = firstNumber * 25.4;
            output.value += result.toFixed(4);
        }

        if(type1.value === "m" &&type2.value === "ft"){
            let firstNumber = input.value;
            result = firstNumber * 3.2808;
            output.value += result;

        }else if(type1.value === "ft" &&type2.value === "m"){
            let firstNumber = input.value;
            result = firstNumber / 3.2808;
            output.value += result;
        }


        if(type1.value === "km" &&type2.value === "mi"){
            let firstNumber = input.value;
            result = firstNumber * 0.62137;
            output.value += result;
        }else if(type1.value === "mi" &&type2.value === "km"){
            let firstNumber = input.value;
            result = firstNumber / 0.62137;
            output.value += result;
        }


        if(type1.value === "cm" &&type2.value === "ft"){
            let firstNumber = input.value;
            result = firstNumber * 0.032808;
            output.value += result;

        }else if(type1.value === "ft" &&type2.value === "cm"){
            let firstNumber = input.value;
            result = firstNumber /  0.032808;
            output.value += result;

        }

        if(type1.value === "in" &&type2.value === "ft"){
            let firstNumber = input.value;
            result = firstNumber * 0.083333;
            output.value += result;

        }else if(type1.value === "ft" &&type2.value === "in"){
            let firstNumber = input.value;
            result = firstNumber * 0.083333;
            output.value += result;

        }

        if(type1.value === "m" &&type2.value === "yd"){
            let firstNumber = input.value;
            result = firstNumber * 1.0936;
            output.value += result;

        }else if(type1.value === "yd" &&type2.value === "m"){
            let firstNumber = input.value;
            result = firstNumber / 1.0936;
            output.value += result;

        }

        if(type1.value === "mm" &&type2.value === "cm"){
            let firstNumber = input.value;
            result = firstNumber / 10;
            output.value += result;
        }else if(type1.value === "cm" &&type2.value === "mm"){
            let firstNumber = input.value;
            result = firstNumber * 10;
            output.value += result;
        }

        if(type1.value === "cm" &&type2.value === "m"){
            let firstNumber = input.value;
            result = firstNumber / 100;
            output.value += result;

        }else if(type1.value === "m" &&type2.value === "cm"){
            let firstNumber = input.value;
            result = firstNumber * 100;
            output.value += result;

        }

        if(type1.value === "cm" &&type2.value === "km"){
            let firstNumber = input.value;
            result = firstNumber / 100000;
            output.value += result;

        }else if(type1.value === "km" &&type2.value === "cm"){
            let firstNumber = input.value;
            result = firstNumber * 100000;
            output.value += result;

        }

        if(type1.value === "mm" &&type2.value === "ft"){
            let firstNumber = input.value;
            result = firstNumber * 0.0032808;
            output.value += result;

        }else if(type1.value === "ft" &&type2.value === "mm"){
            let firstNumber = input.value;
            result = firstNumber / 0.0032808;
            output.value += result;

        }

        if(type1.value === "m" &&type2.value === "mi"){
            let firstNumber = input.value;
            result = firstNumber * 0.00062137;
            output.value += result;

        }else  if(type1.value === "m" &&type2.value === "mi"){
            let firstNumber = input.value;
            result = firstNumber / 0.00062137;
            output.value += result;

        }

        if(type1.value === "ft" &&type2.value === "mi"){
            let firstNumber = input.value;
            result = firstNumber * 0.00018939;
            output.value += result;

        }else if(type1.value === "mi" &&type2.value === "ft"){
            let firstNumber = input.value;
            result = firstNumber / 0.00018939;
            output.value += result;

        }

        if(type1.value === "yd" &&type2.value === "ft"){
            let firstNumber = input.value;
            result = firstNumber * 3;
            output.value += result;

        }else  if(type1.value === "ft" &&type2.value === "yd"){
            let firstNumber = input.value;
            result = firstNumber / 3;
            output.value += result;

        }

        if(type1.value === "in" &&type2.value === "m"){
            let firstNumber = input.value;
            result = firstNumber / 39.370;
            output.value += result;

        }else if(type1.value === "m" &&type2.value === "in"){
            let firstNumber = input.value;
            result = firstNumber * 39.370;
            output.value += result;

        }

        if(type1.value === "mm" &&type2.value === "m"){
            let firstNumber = input.value;
            result = firstNumber / 1000;
            output.value += result;

        }else if(type1.value === "m" &&type2.value === "mm"){
            let firstNumber = input.value;
            result = firstNumber * 1000;
            output.value += result;

        }

        if(type1.value === "km" &&type2.value === "m"){
            let firstNumber = input.value;
            result = firstNumber * 0.62137;
            output.value += result;

        }else if(type1.value === "m" &&type2.value === "km"){
            let firstNumber = input.value;
            result = firstNumber / 0.62137;
            output.value += result;

        }

        if(type1.value === "in" &&type2.value === "yd"){
            let firstNumber = input.value;
            result = firstNumber * 0.027778;
            output.value += result;

        }else if(type1.value === "yd" &&type2.value === "in"){
            let firstNumber = input.value;
            result = firstNumber / 0.027778;
            output.value += result;

        }

        if(type1.value === "yd" &&type2.value === "mi"){
            let firstNumber = input.value;
            result = firstNumber * 0.00056818;
            output.value += result;

        }else if(type1.value === "mi" &&type2.value === "yd"){
            let firstNumber = input.value;
            result = firstNumber / 0.00056818;
            output.value += result;

        }

    }

    const vice = () =>{
        let temp = type1.value;
        type1.value = type2.value;
        type2.value = temp;
    }
    solve.addEventListener("click", convert);
    switchRoles.addEventListener("click", vice);
})
