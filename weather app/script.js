

console.log(window.innerWidth)
console.log(window.innerHeight);


const api_key = "c139b709688fece2b3ae3377a25d2057";
// getting img icon
const weather_data = document.getElementById("weather-data");
// getting input city
const city_input = document.getElementById("city-input");
// selecting submit

const formel = document.querySelector("form");

formel.addEventListener("submit", (event) => {
  event.preventDefault();
  const cityvalue = city_input.value;
  // console.log(cityvalue);

  getweatherdata(cityvalue);
});

async function getweatherdata(cityvalue) {
  try {
    // creating a request to api
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityvalue}&appid=${api_key}&units=metric`);

    if (!response.ok) {
      throw new Error("Netwok response was not ok");
    }
    // convert the fetched data into an object
    const data = await response.json();
    console.log(data);
    // extracting data from data fetched
    const temperature = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;
    
        console.log(temperature);
        console.log(description);

    const details = [
      `Feels like: ${data.main.feels_like}`,
      `Humidity: ${data.main.humidity} %`,
      `Wind speed: ${data.wind.speed} m/s`,
    ];
    // const details = [
    //     `Feels like: ${Math.round(data.main.feels_like)}`,
    //     `Humidity: ${data.main.humidity}%`,
    //     `Wind speed: ${data.wind.speed} m/s`,
    //   ];

    console.log(details);

    weather_data.querySelector(".icon").innerHTML = `<img
        src="http://openweathermap.org/img/wn/${icon}.png"
        alt="weather icon"
      />`;

    weather_data.querySelector(
      ".temperature"
    ).textContent = `${temperature} °C`;

    weather_data.querySelector(".description").textContent = description;

    weather_data.querySelector(".details").innerHTML = details
      .map((det) => `<div>${det}</div>`)
      .join("");
      
      // document.body.style.backgroundImage = "url('https://source.unsplash.com/random/800x700/?fruit')";

  } catch (error) {
    weather_data.querySelector(".icon").innerHTML = "";

    weather_data.querySelector(".temperature").textContent = "";

    weather_data.querySelector(".description").textContent =
      "An error happened, please try again later";

    weather_data.querySelector(".details").innerHTML = "";
  }
}



// const apikey = "46f80a02ecae410460d59960ded6e1c6";

// const weatherDataEl = document.getElementById("weather-data");

// const cityInputEl = document.getElementById("city-input");

// const formEl = document.querySelector("form");

// formEl.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const cityValue = cityInputEl.value;
//   getWeatherData(cityValue);
// });

// async function getWeatherData(cityValue) {
//   try {
//     const response = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`
//     );

//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }

//     const data = await response.json();

//     const temperature = Math.round(data.main.temp);

//     const description = data.weather[0].description;

//     const icon = data.weather[0].icon;

//     const details = [
//       `Feels like: ${Math.round(data.main.feels_like)}`,
//       `Humidity: ${data.main.humidity}%`,
//       `Wind speed: ${data.wind.speed} m/s`,
//     ];

//     weatherDataEl.querySelector(
//       ".icon"
//     ).innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`;
//     weatherDataEl.querySelector(
//       ".temperature"
//     ).textContent = `${temperature}°C`;
//     weatherDataEl.querySelector(".description").textContent = description;

//     weatherDataEl.querySelector(".details").innerHTML = details
//       .map((detail) => `<div>${detail}</div>`)
//       .join("");
//   } catch (error) {
//     weatherDataEl.querySelector(".icon").innerHTML = "";
//     weatherDataEl.querySelector(".temperature").textContent = "";
//     weatherDataEl.querySelector(".description").textContent =
//       "An error happened, please try again later";

//     weatherDataEl.querySelector(".details").innerHTML = "";
//   }
// }