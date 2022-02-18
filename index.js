window.addEventListener("DOMContentLoaded", (e) =>{
    console.log(`DOM Loaded`)
    const button = document.getElementById("add");
    const input = document.getElementById("number1")
    const output = document.getElementById("number2")
    const type1 = document.getElementById("input")
    const type2 = document.getElementById("output")
    let result;
    const convert = () => {
        output.value = ""
        if(type1.value === "cm" &&type2.value === "in"){
            let firstNumber = input.value;
            result = firstNumber / 2.54;
            result.toFixed(2);
            output.value += result;

        }else if(type1.value === "mm" &&type2.value === "in"){
            let firstNumber = input.value;
            result = firstNumber * 0.039370;
            output.value += result.toFixed(4);

        }
        if(type1.value === "m" &&type2.value === "ft"){
            let firstNumber = input.value;
            result = firstNumber * 3.2808;
            output.value += result;

        }else if(type1.value === "cm" &&type2.value === "in"){
            let firstNumber = input.value;
            result = firstNumber / 2.54;
            output.value += result;

        }
        if(type1.value === "cm" &&type2.value === "in"){
            let firstNumber = input.value;
            result = firstNumber / 2.54;
            output.value += result;

        }
        if(type1.value === "cm" &&type2.value === "in"){
            let firstNumber = input.value;
            result = firstNumber / 2.54;
            output.value += result;

        }
        if(type1.value === "cm" &&type2.value === "in"){
            let firstNumber = input.value;
            result = firstNumber / 2.54;
            output.value += result;

        }
        if(type1.value === "cm" &&type2.value === "in"){
            let firstNumber = input.value;
            result = firstNumber / 2.54;
            output.value += result;

        }
        if(type1.value === "cm" &&type2.value === "in"){
            let firstNumber = input.value;
            result = firstNumber / 2.54;
            output.value += result;

        }
        if(type1.value === "cm" &&type2.value === "in"){
            let firstNumber = input.value;
            result = firstNumber / 2.54;
            output.value += result;

        }
        if(type1.value === "cm" &&type2.value === "in"){
            let firstNumber = input.value;
            result = firstNumber / 2.54;
            output.value += result;

        }
        if(type1.value === "cm" &&type2.value === "in"){
            let firstNumber = input.value;
            result = firstNumber / 2.54;
            output.value += result;

        }
        if(type1.value === "cm" &&type2.value === "in"){
            let firstNumber = input.value;
            result = firstNumber / 2.54;
            output.value += result;

        }
        if(type1.value === "cm" &&type2.value === "in"){
            let firstNumber = input.value;
            result = firstNumber / 2.54;
            output.value += result;

        }
        if(type1.value === "cm" &&type2.value === "in"){
            let firstNumber = input.value;
            result = firstNumber / 2.54;
            output.value += result;

        }
        if(type1.value === "cm" &&type2.value === "in"){
            let firstNumber = input.value;
            result = firstNumber / 2.54;
            output.value += result;

        }
        if(type1.value === "cm" &&type2.value === "in"){
            let firstNumber = input.value;
            result = firstNumber / 2.54;
            output.value += result;

        }
        if(type1.value === "cm" &&type2.value === "in"){
            let firstNumber = input.value;
            result = firstNumber / 2.54;
            output.value += result;

        }
        if(type1.value === "cm" &&type2.value === "in"){
            let firstNumber = input.value;
            result = firstNumber / 2.54;
            output.value += result;

        }

    }
    button.addEventListener("click", convert)

})
