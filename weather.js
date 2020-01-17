class Weather {
  constructor(city) {
    this.apiKey = 'e7e1119424f385f239d0354d79e3339a';
    this.city = city;

  }

  //Fetch weather from API
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=imperial&appid=${this.apiKey}`);
    const responseData = await response.json();
    return responseData;
  }

  //Change weather location

  changeLocation(city) {
    this.city = city;
  }
}

