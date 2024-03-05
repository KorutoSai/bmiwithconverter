function calcMetHeight() {

    let heightCm = document.getElementById('heightCm').value;



    let calcInch = (heightCm / 30.48).toFixed(2);
   

    let calcInchSplitDec = (calcInch.split(".")[1])/100;
    let calcInchSplitWho = calcInch.split(".")[0];
    let calcInchSplitDecCon = calcInchSplitDec*12;


    
    
    
    
    document.getElementById("heading").innerHTML = "Your height in Feet-inch is: ";
    document.getElementById("bmi-output").innerHTML = calcInchSplitWho +" Feet and " + calcInchSplitDecCon + " Inches";
   

}

function calcMetWeight() {

    let weightKilo = document.getElementById('weightKilo').value;
  
    let calcPound = (weightKilo * 2.20462).toFixed(2);

    document.getElementById("heading").innerHTML = "Your weight in Pounds is: ";
    document.getElementById("bmi-output").innerHTML = calcPound
   

}


function reload() {
    window.location.reload();

}