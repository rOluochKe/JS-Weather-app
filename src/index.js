import renderResult from './modules/dom';

/* eslint-disable prefer-destructuring */
const form = document.querySelector('.top-banner form');
const input = document.querySelector('.top-banner input');
const msg = document.querySelector('.top-banner .msg');
const list = document.querySelector('.ajax-section .cities');

const apiKey = 'b9d786489eff73f5cec702d51ff7bba6';

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let inputVal = input.value;

  const listItems = list.querySelectorAll('.ajax-section .city');
  const listItemsArray = Array.from(listItems);

  if (listItemsArray.length > 0) {
    const filteredArray = listItemsArray.filter((el) => {
      let content = '';
      if (inputVal.includes(',')) {
        if (inputVal.split(',')[1].length > 2) {
          inputVal = inputVal.split(',')[0];
          content = el
            .querySelector('.city-name span')
            .textContent.toLowerCase();
        } else {
          content = el.querySelector('.city-name').dataset.name.toLowerCase();
        }
      } else {
        content = el.querySelector('.city-name span').textContent.toLowerCase();
      }
      return content === inputVal.toLowerCase();
    });

    if (filteredArray.length > 0) {
      msg.textContent = `You already know the weather for ${
        filteredArray[0].querySelector('.city-name span').textContent
      } ...otherwise be more specific by providing the country code as well 😉`;
      form.reset();
      input.focus();
      return;
    }
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const {
        main, name, sys, weather,
      } = data;
      const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`;

      renderResult(main, name, sys, weather, icon);
    })
    .catch(() => {
      msg.textContent = 'Please search for a valid city 😩';
    });

  msg.textContent = '';
  form.reset();
  input.focus();
});
