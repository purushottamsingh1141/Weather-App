let container = document.querySelector('.container');
let searchBox = document.querySelector('.search-box button');
let weatherDetails = document.querySelector('.weather-details');
let weatherBox  = document.querySelector('.weather-box ');

searchBox.addEventListener('click', () => {
  let APIKey ='6ffc97715aecf7e9c890f2c10af03984';
  let city = document.querySelector('.search-box input ').value;

  if(city == '')
  return;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then(response => response.json()).then(json => {
    let image = document.querySelector('.weather-box img');
    let temperature = document.querySelector('.weather-box .temperature');
    let description = document.querySelector('.weather-box .description');
    let humidity = document.querySelector('.weather-details .humidity span');
    let wind = document.querySelector('.weather-details .wind span');

    switch (json.weather[0].main) {
      case 'Clear':
        image.src = 'image/normal.png';
        break;

      case 'Clouds':
        image.src = 'image/cool.png';
        break;

      case 'Rain':
        image.src = 'image/Rain.png';
        break;

      case 'Snow':
        image.src = 'image/Thunder.png';
        break;

      case 'Mist':
        image.src = 'image/cool.jpg';
        break;
    
      default:
        image.src = 'image/normal.png';
        break;
    }

    temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
    description.innerHTML = `${json.weather[0].description}`;
    humidity.innerHTML = `${json.main.humidity}%`;
    wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;
  });

});