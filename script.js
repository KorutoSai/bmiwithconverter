

function bmiCalc() {

    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;
    let heightCm = height/100

    let bmi = (weight / (heightCm ** 2 )).toFixed(2);

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





