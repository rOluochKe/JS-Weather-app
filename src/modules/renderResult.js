const list = document.querySelector('.ajax-section .cities');

// eslint-disable-next-line no-unused-vars
const changeTemperature = (element) => {
  element.classList.toggle('celc');
  element.classList.toggle('faren');
};

const toggleUnit = () => {
  const toggleMe = document.querySelectorAll('.toggle-me');
  toggleMe.forEach(tempBTN => {
    tempBTN.addEventListener('click', (e) => {
      const tile = e.target.parentNode;
      const celsius = tile.querySelector('.celc');
      const farenheit = tile.querySelector('.faren');

      if (celsius.classList.contains('d-none')) {
        celsius.classList.remove('d-none');
        celsius.classList.add('d-block');
        farenheit.classList.remove('d-block');
        farenheit.classList.add('d-none');
      } else if (farenheit.classList.contains('d-none')) {
        celsius.classList.remove('d-block');
        celsius.classList.add('d-none');
        farenheit.classList.remove('d-none');
        farenheit.classList.add('d-block');
      }
    });
  });
};

const renderResult = (main, name, sys, weather, icon, newTemp, getFahrenheit) => {
  const li = document.createElement('li');
  li.classList.add('city');

  const markup = `
    <h2 class="city-name" data-name="${name},${sys.country}">
      <span>${name}</span>
      <sup>${sys.country}</sup>
    </h2>
    <div class="city-temp celc">${Math.round(main.temp)}<sup>°C</sup></div>
    <div class="city-temp faren d-none">${getFahrenheit}<sup>°F</sup></div>
    <button class="toggle-me">°C - °F</button>
    <figure>
      <img class="city-icon" src="${icon}" alt="${weather[0].description}">
      <figcaption>${weather[0].description}</figcaption>
    </figure>
  `;
  li.innerHTML = markup;
  list.appendChild(li);
  toggleUnit();
};

export default renderResult;