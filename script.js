 function add() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let sum = num1 + num2;

    document.getElementById("result").innerText = "Result: " + sum;
}

function toggleTheme() {
    document.body.classList.toggle("dark");
}

function subtract() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    document.getElementById("result").innerText =
        "Result: " + (num1 - num2);
}
function multiply() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    document.getElementById("result").innerText =
        "Result: " + (num1 * num2);
}
function divide() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    document.getElementById("result").innerText =
        "Result: " + (num1 / num2);
}
function clearData() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").innerText = "";
}