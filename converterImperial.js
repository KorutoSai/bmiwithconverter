function calcMetHeight() {

    let heightCm = document.getElementById('heightCm').value;



    let calcInch = (heightCm / 30.48).toFixed(2);
   

    let calcInchSplitDec = (calcInch.split(".")[1])/100;
    let calcInchSplitWho = calcInch.split(".")[0];
    let calcInchSplitDecCon = (calcInchSplitDec*12).toFixed(2);;


    
    
    
    
    document.getElementById("heading-height").innerHTML = "*Your height in Feet-inch is: ";
    document.getElementById("height-output").innerHTML = calcInchSplitWho +" Feet and " + calcInchSplitDecCon + " Inches";
   

}

function calcMetWeight() {

    let weightKilo = document.getElementById('weightKilo').value;
  
    let calcPound = (weightKilo * 2.20462).toFixed(2);

    document.getElementById("heading-weight").innerHTML = "*Your weight in Pounds is: ";
    document.getElementById("weight-output").innerHTML = calcPound
   

}


function reload() {
    window.location.reload();

}