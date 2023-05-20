const form = document.getElementById('form');
const email = document.getElementById('email');
const nameInput = document.getElementById('name');
const message = document.getElementById('message');
const formError = document.querySelector('.form-error');

let formData = window.localStorage.getItem('contact');
if (formData) {
  formData = JSON.parse(formData);
  nameInput.value = formData.name;
  email.value = formData.email;
}

function showError() {
  if (email.validity.valueMissing) {
    formError.innerHTML = 'You need to enter an e-mail address.';
  } else if (email.validity.typeMismatch) {
    formError.innerHTML = 'Entered value needs to be an e-mail address.';
  } else if (email.validity.patternMismatch) {
    formError.innerHTML = 'Entered value needs to be lowercase characters';
  }
  formError.className = 'form-error';
}

function saveFormData() {
  const data = { name: nameInput.value, email: email.value, message: message.value };
  window.localStorage.setItem('contact', JSON.stringify(data));
}

email.addEventListener('input', () => {
  if (email.validity.valid) {
    formError.innerHTML = '';
    formError.className = '';
    saveFormData();
  } else {
    showError();
  }
});

nameInput.addEventListener('input', () => {
  saveFormData();
});

message.addEventListener('input', () => {
  saveFormData();
});

form.addEventListener('submit', (event) => {
  if (nameInput.validity.valueMissing || message.validity.valueMissing
    || email.validity.valueMissing) {
    formError.innerHTML = 'You need to fill all the fields.';
    formError.className = 'form-error';
    event.preventDefault();
  }
  if (!email.validity.valid) {
    showError();
    event.preventDefault();
  }
});
