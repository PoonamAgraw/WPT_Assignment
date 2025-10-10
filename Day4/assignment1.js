
function add(...a) {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += a[i];
    }
    console.log("Addition is:" + sum)
    //console.log(sum);
}

function oddNumber(...n) {
    for (let i = 0; i < n.length; i++) {
        if (n[i] % 2 != 0) {
            console.log("The odd number are:" + n[i]);
        }
    }
}

add(10, 2, 3, 4);
oddNumber(15, 14, 22, 11, 99, 101, 8, 6, 4);
