/* eslint-disable linebreak-style */
/* eslint-disable no-useless-escape */
const form = document.getElementById('form');
const email = document.getElementById('email');
const name = document.getElementById('name');
const message = document.getElementById('message');
const formError = document.querySelector('.form-error');

window.onload = () => {
  const formData = window.localStorage.getItem('contact');
  if (formData) {
    const { name: localName, email: localEmail } = JSON.parse(formData);
    name.value = localName;
    email.value = localEmail;
  }
};
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

email.addEventListener('input', () => {
  if (email.validity.valid) {
    formError.innerHTML = '';
    formError.className = '';
  } else {
    showError();
  }
});

form.addEventListener('submit', (event) => {
  if (name.validity.valueMissing || message.validity.valueMissing || email.validity.valueMissing) {
    formError.innerHTML = 'You need to fill all the fields.';
    formError.className = 'form-error';
    event.preventDefault();
  }
  if (!email.validity.valid) {
    showError();
    event.preventDefault();
  }
  const formData = { name: name.value, email: email.value };
  window.localStorage.setItem('contact', JSON.stringify(formData));
});
