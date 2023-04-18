import '../css/common.css';
import '../css/03-feedback.css'
import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', onTextareaInput);
populateTextArea();



function onFormSubmit(evt) {
  evt.preventDefault();

  evt.currentTarget.reset();
}


function onTextareaInput(evt) {
  const message = evt.currentTarget.value;

  localStorage.setItem('feedback-form-state', message);
 }


function populateTextArea() {
  const savedMessage = localStorage.getItem('feedback-form-state');

  if (savedMessage) {
    // console.log(savedMessage);
    refs.textarea.value = savedMessage;
  }
 }


