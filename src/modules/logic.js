import renderResult from './renderResult';

const msg = document.querySelector('.top-banner .msg');

const apiKey = 'b9d786489eff73f5cec702d51ff7bba6';

const fetchData = (inputVal) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const {
        main, name, sys, weather,
      } = data;
      const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`;

      const newTemp = main.temp;

      const getFahrenheit = () => `${Math.round((newTemp * 1.8) + 32)}`;

      renderResult(main, name, sys, weather, icon, newTemp, getFahrenheit());
    })
    .catch(() => {
      msg.textContent = 'Please search for a valid city 😩';
    });
};

export default fetchData;
