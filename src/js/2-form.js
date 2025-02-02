const feedbackForm = document.querySelector('form.feedback-form');
const localStorageKey = 'feedback-form-state';
feedbackForm.elements.email.autocomplete = 'off';
feedbackForm.elements.message.autocomplete = 'off';
let formData = {
  email: '',
  message: '',
};
const savedData = localStorage.getItem(localStorageKey) ?? '';
if (savedData !== '') {
  formData = JSON.parse(savedData);
  feedbackForm.elements.email.value = formData.email;
  feedbackForm.elements.message.value = formData.message;
}

feedbackForm.addEventListener('input', event => {
  const form = event.currentTarget;
  formData.email = form.elements.email.value;
  formData.message = form.elements.message.value;

  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  if (email === '' || message === '') {
    return alert('Fill please all fields');
  }

  console.log(formData);
  formData = {
    email: '',
    message: '',
  };
  localStorage.removeItem(localStorageKey);
  form.reset();
});
