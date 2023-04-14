import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('[type="email"]');
const messageInput = document.querySelector('[name="message"]');
const btn = document.querySelector('[type="submit"]');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const obj = {
  email: '',
  message: '',
};

const dataInLocalStorage = () => {
  obj.email = emailInput.value;
  obj.message = messageInput.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(obj));
  localStorage.getItem(LOCALSTORAGE_KEY);
};

const throttled = throttle(dataInLocalStorage, 500);

const clearLocalStorage = () => {
  localStorage.clear();
};

const logLocalStorage = () => {
  console.log(obj);
};

form.addEventListener('input', throttled);
btn.addEventListener('click', logLocalStorage);
form.addEventListener('submit', clearLocalStorage);
