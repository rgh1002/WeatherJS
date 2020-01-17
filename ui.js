class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.humidity = document.getElementById('w-humidity');
    this.icon = document.getElementById('w-icon');
    this.feelsLike = document.getElementById('w-feels-like');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather) {
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].description;
    this.string.textContent = weather.main.temp + String.fromCharCode(176) + " F";
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
    this.icon.setAttribute('src', `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
    this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like}${String.fromCharCode(176)} F`;
    this.wind.textContent = `Wind Speed: ${weather.wind.speed}mph`;
  }
}