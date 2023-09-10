const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '3b59f0d96dmshe61d538758a5e7bp13a48cjsn0939506353af',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  };
  
  const getWeather = (city) => {
    cityName.innerHTML = city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
      .then(response => response.json())
      .then((response) => {
        console.log(response);
        cloud_pct.innerHTML = response.cloud_pct;
        temp.innerHTML = response.temp;
        feels_like.innerHTML = response.feels_like;
        humidity.innerHTML = response.humidity;
        min_temp.innerHTML = response.min_temp;
        max_temp.innerHTML = response.max_temp;
        wind_speed.innerHTML = response.wind_speed;
        wind_degrees.innerHTML = response.wind_degrees;
        sunrise.innerHTML = response.sunrise;
        sunset.innerHTML = response.sunset;
      })
      .catch(err => console.error(err));
  }
  
  const submit = document.getElementById("submit");
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value);
  })
  
  getWeather("Chennai")
  
  const cities = [
    "Shanghai",
    "Boston",
    "Lucknow",
    "Kolkata",
    "Chennai",
    "Coimbatore"
  ];
  
  cities.forEach((city, index) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
      .then(response => response.json())
      .then((response) => {
        const row = document.getElementById(city);
        row.querySelector('.cloud_pct').textContent = response.cloud_pct;
        row.querySelector('.temp').textContent = response.temp;
        row.querySelector('.feels_like').textContent = response.feels_like;
        row.querySelector('.humidity').textContent = response.humidity;
        row.querySelector('.min_temp').textContent = response.min_temp;
        row.querySelector('.max_temp').textContent = response.max_temp;
        row.querySelector('.wind_speed').textContent = response.wind_speed;
        row.querySelector('.wind_degrees').textContent = response.wind_degrees;
        row.querySelector('.sunrise').textContent = response.sunrise;
        row.querySelector('.sunset').textContent = response.sunset;
      })
      .catch(err => console.error(err));
  });
  

  