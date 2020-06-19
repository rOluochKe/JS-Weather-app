const list = document.querySelector('.ajax-section .cities');

const renderResult = (main, name, sys, weather, icon) => {
  const li = document.createElement('li');
  li.classList.add('city');
  const markup = `
    <h2 class="city-name" data-name="${name},${sys.country}">
      <span>${name}</span>
      <sup>${sys.country}</sup>
    </h2>
    <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
    <figure>
      <img class="city-icon" src="${icon}" alt="${weather[0].description}">
      <figcaption>${weather[0].description}</figcaption>
    </figure>
  `;
  li.innerHTML = markup;
  list.appendChild(li);
};

export default renderResult;