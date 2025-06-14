const degreesInput = document.getElementById('degrees');
const typeSelect   = document.getElementById('type');
const resultDiv    = document.getElementById('result');
const btnConvert   = document.getElementById('convert');
const btnToggle    = document.getElementById('toggle');

btnConvert.addEventListener('click', () => {
  const v = parseFloat(degreesInput.value);
  if (isNaN(v)) {
    resultDiv.textContent = 'Please enter a number';
    return;
  }
  let res, unit;
  if (typeSelect.value === 'f2c') {
    res  = (v - 32) * 5 / 9;
    unit = '°C';
  } else {
    res  = v * 9 / 5 + 32;
    unit = '°F';
  }
  resultDiv.textContent = res.toFixed(4) + ' ' + unit;
});

btnToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
