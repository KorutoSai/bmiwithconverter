function calcImpHeight() {

    let heightInch = document.getElementById('heightInch').value;
    let heightFeet = (document.getElementById('heightFeet').value) * 12;



    let totalInch = heightFeet + (parseInt(heightInch));


    let calcCm = (totalInch * 2.54).toFixed(2);

    document.getElementById("heading").innerHTML = "Your height in Centimeter is: ";
    document.getElementById("bmi-output").innerHTML = calcCm
   

}

function calcImpWeight() {

    let weightPounds = document.getElementById('weightPound').value;
  
    let calcKg = (weightPounds / 2.20462).toFixed(2);

    document.getElementById("heading").innerHTML = "Your weight in Kilograms is: ";
    document.getElementById("bmi-output").innerHTML = calcKg
   

}


function reload() {
    window.location.reload();

}