document.getElementById('calculateBtn').addEventListener('click', function () {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
  
    if (!height || !weight || height <= 0 || weight <= 0) {
      alert('Please enter valid height and weight!');
      return;
    }
  
    // BMI Formula
    const bmi = (weight / ((height / 100) ** 2)).toFixed(1);
  
    // Determine BMI category
    let category = '';
    if (bmi < 18.5) {
      category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
      category = 'Overweight';
    } else {
      category = 'Obesity';
    }
  
    // Display results
    document.getElementById('bmiResult').textContent = bmi;
    document.getElementById('bmiCategory').textContent = `Category: ${category}`;
  });
  