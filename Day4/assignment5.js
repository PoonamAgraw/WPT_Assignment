

function Table() {
    let d = document.getElementById("n").value;
    let output = "<table border='2'>";

    for (let i = 1; i <= 10; i++) {
        output += `<tr><td>${d} * ${i} = ${d * i}</td></tr>`;
    }

    output =output+ "</table>";
    document.getElementById("d1").innerHTML = output;
}
