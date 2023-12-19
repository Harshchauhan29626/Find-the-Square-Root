function Square(){
    let number = document.getElementById("number").value;
    let Square = Math.sqrt(number);

    document.getElementById("p1").innerHTML  = "The square root of " +number + " is: " +Square;
}