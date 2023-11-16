const enter = document.getElementById("enter");
enter.addEventListener("click", evaluate)

function evaluate() {
    const screen = document.getElementById("screen");
    let equation = screen.innerHTML;
    var symbols = ["-", "+", "*", "/"];
    let equation_array = [];
    let temp = "";
    for (i in equation) {
        console.log(i);
        if (equation[1] in symbols) {
            console.log("hi");
            alert("Error try again");
        }
    }
    // screen.innerHTML = result;

}