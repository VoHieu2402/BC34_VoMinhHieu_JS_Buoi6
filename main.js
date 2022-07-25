// Task 1
function minCummulativeSum(threshold) {
    var total = 0;
    var count = 0;
    do {
        count = count + 1;
        total = total + count;
    } while(total<threshold);
    return count;
}
document.getElementById("num-t1").innerHTML = minCummulativeSum(10000);

// Task 2
function exp(num, power) {
    var count = 1;
    var result = num;
    while(count<power) {
        var result= result*num;
        count = count + 1;
    }
    return result;
}

function cummulativeExp(x,n) {
    var total = 0;
    for(var i=1;i<=n;i++) {
        total = total + exp(x,i);
    }
    return total;
}

document.getElementById("calculate-t2").onclick = function() {
    var numX = document.getElementById("numX-t2").value * 1;
    var numN = document.getElementById("numN-t2").value * 1;
    var result = cummulativeExp(numX,numN);
    document.getElementById("noti-t2").innerHTML = "<h3>Tổng: " + result.toString() + "</h3>";
}


// Task 3
function factorial(n) {
    var result = 1;
    for(var i = 1;i<=n;i++) {
        result = result * i;
    }
    return result;
}

document.getElementById("calculate-t3").onclick = function() {
    var num = document.getElementById("num-t3").value * 1;
    var result = factorial(num);
    document.getElementById("noti-t3").innerHTML = "<h3>Kết quả: " + result.toString() + "</h3>";
}

// Task 4
document.getElementById("createDiv").onclick = function() {
    for(i=1;i<=10;i++) {
        if(i%2 != 0) {
            var divItem = document.createElement("div");
            divItem.style.backgroundColor = "blue";
            divItem.innerHTML = "Div lẻ";
            document.getElementById("divContainer").appendChild(divItem);
        } else {
            var divItem = document.createElement("div");
            divItem.style.backgroundColor = "red";
            divItem.innerHTML = "Div chẵn";
            document.getElementById("divContainer").appendChild(divItem);
        }
    }
}

// Task 5
function checkPrimeNum(num) {
    var result = 0;
    if(num==2 || num==3 || num==5) {
        result =  1;
    } else if(num%2 == 0) {
        result = 0;
    } else {
        var i=3;
        while(i<=num/2) {
            if(num%i == 0) {
                result = 0;
                break;
            } else {
                result = 1;
            }
            i = i + 2;
        }
    }
    return result;
}

document.getElementById("printNum").onclick = function() {
    var statement = "Các số nguyên tố là: ";
    var num = document.getElementById("num-t5").value * 1;
    for(var i=2;i<=num;i++) {
        if(checkPrimeNum(i)==1) {
            statement += i.toString() + ", ";
        }
    }
    document.getElementById("noti-t5").innerHTML = statement;
}