function bmiCalcImp() {

    let heightInch = document.getElementById('heightInch').value;
    let heightFeet = (document.getElementById('heightFeet').value) * 12;
    let weight = document.getElementById('weight').value;
    
  
    let totalInch = heightFeet + parseInt(heightInch);
    

    let bmi = (703 * ( (weight / (totalInch ** 2 )))).toFixed(2);

    document.getElementById("heading").innerHTML = "Your BMI is: ";
    document.getElementById("bmi-output").innerHTML = bmi



    if (bmi < 18.5) {

        document.getElementById("message").innerHTML = "Your BMI is " + bmi + " , so you are underweight.";

    }

    else if (bmi >= 18.5 && bmi <= 24.9) {

        document.getElementById("message").innerHTML ="Your BMI is " + bmi + " , so you are normal weight.";

    }
    else if (bmi >= 24.9 && bmi <= 30) {

        document.getElementById("message").innerHTML ="Your BMI is " + bmi + " , so you are overweight.";

    }

    else {
        document.getElementById("message").innerHTML = "Your BMI is " + bmi + " , so you are obese.";
    }

}


function reload(){
    window.location.reload();
    
    }