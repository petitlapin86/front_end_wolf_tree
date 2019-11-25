const first = document.getElementById('firstName');
const last = document.getElementById('lastName');
const facilitator = document.getElementById('facilitator');

first.addEventListener('input', e => {
  if (first.validity.typeMismatch) {
    first.setCustomValidity('Please only enter alphabet characters');
  } else {
    first.setCustomValidity('');
  }
});

last.addEventListener('input', e => {
  if (first.validity.rangeUnderflow) {
    first.setCustomValidity('Must be at least 2 characters long');
  } else {
    first.setCustomValidity('');
  }
});

facilitator.addEventListener('input', e => {
  if (facilitator.validity.patternMismatch) {
    facilitator.setCustomValidity('enter exactly Josh, Harsh or Laura');
  } else {
    facilitator.setCustomValidity('');
  }
})
