
const valueOne = document.getElementById("value1");
const valueTwo = document.getElementById("value2");

function buttonClick() {

    const val1 = valueOne.value;
    const val2 = valueTwo.value;

    const num1 = Number(val1);
    const num2 = Number(val2);

    const sum = num1 + num2;

    document.getElementById("result").value = sum;

    console.log(`"The sum of ${val1} + ${val2} = "`, sum);
}