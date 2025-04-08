function calculate() {
            var a = document.getElementById('weight').value;
            var b = document.getElementById('height').value;
            var BMI = a / Math.pow(b,2);

            if (BMI < 18.5) {
                window.alert("Underweight");
            } else if (BMI >=18.5 && BMI <=24.9) {
                window.alert("Normal Weight");
            } else if (BMI >=25 && BMI <=29.9) {
                window.alert("Overweight");
            } else if (BMI >=30) {
                window.alert("Obese");
            } else { window.alert("ERROR")}
        }