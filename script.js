let display = document.getElementById("display");
let historyList = document.getElementById("history");

let history = JSON.parse(localStorage.getItem("history")) || [];
renderHistory();

let memory = 0;

function append(value) {
  display.value += value;
}

function calculate() {
  try {
    let result = eval(display.value);
    saveHistory(display.value + " = " + result);
    display.value = result;
  } catch {
    display.value = "Error";
  }
}

function clearDisplay() {
  display.value = "";
}

function scientific(type) {
  let value = parseFloat(display.value);

  if (isNaN(value)) return;

  let result;

  if (type === "sin") result = Math.sin(value);
  if (type === "cos") result = Math.cos(value);
  if (type === "log") result = Math.log10(value);

  saveHistory(`${type}(${value}) = ${result}`);
  display.value = result;
}

function saveHistory(item) {
  history.push(item);
  localStorage.setItem("history", JSON.stringify(history));
  renderHistory();
}

function renderHistory() {
  historyList.innerHTML = "";
  history.forEach(h => {
    let li = document.createElement("li");
    li.textContent = h;
    historyList.appendChild(li);
  });
}
function saveMemory() {
    let resultText = document.getElementById("result").innerText;

    if (resultText !== "") {
        memory = Number(resultText.replace("Result: ", ""));
    }
}

function showMemory() {
    document.getElementById("result").innerText =
        "Memory: " + memory;
}
  

function saveMemory() {
    memory = Number(display.value);
}

function showMemory() {
    display.value = memory;
}
function clearHistory() {
    history = [];
    localStorage.removeItem("history");
    renderHistory();
}