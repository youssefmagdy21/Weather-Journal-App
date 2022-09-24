// Client Side

// Personal API Key for OpenWeatherMap API
const keyAPI = "3a50cfa972ed39e31888b5f156213458";
const baseURL = "https://api.openweathermap.org/data/2.5/weather";
let codeZIP = "";
let country = "";

// Event listener to add generate function to generate button
document.getElementById("generate").addEventListener("click", generate);

// Event listener to add reset function to reset button
document.getElementById("reset").addEventListener("click", reset);

/* Function called by generate event listener */
async function generate(e) {
  // Create a new date instance dynamically with JS
  let d = new Date();
  let newDate = d.getMonth() + 1 + "." + d.getDate() + "." + d.getFullYear();

  // Get user input
  const countryMenu = document.getElementById("country");
  country = countryMenu.options[countryMenu.selectedIndex].value;
  codeZIP = document.getElementById("zip").value;
  const feeling = document.getElementById("feeling").value;

  try {
    // Get weather data
    const weatherData = await getWeatherData();
    const userData = {
      date: newDate,
      temp: weatherData.main.temp,
      city: weatherData.name,
      feeling: feeling,
    };

    // Post user data to the server
    postData("/saveData", userData);

    // Get data from the server
    const data = await getData("/getData");

    // Update the UI
    updateUI(data);
  } catch (err) {
    console.log("Something Went Wrong❌");
    console.error(err);
    alert("Please Enter Valid Data");
  }
}

/* Function to GET Web API Data*/
const getWeatherData = async () => {
  const url = `${baseURL}?zip=${codeZIP},${country}&appid=${keyAPI}&units=metric`;
  const response = await fetch(url);
  try {
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log("Something Went Wrong❌");
    console.error(err);
  }
};

/* Function to POST data */
const postData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  try {
    const json = await response.json();
    console.log(json);
  } catch (err) {
    console.log("Something Went Wrong❌");
    console.error(err);
  }
};

/* Function to GET Project Data */
const getData = async (url = "") => {
  const response = await fetch(url);
  try {
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (err) {
    console.log("Something Went Wrong❌");
    console.error(err);
  }
};

/* Function to update UI */
function updateUI(data) {
  document.getElementById("date").innerHTML = data.date;
  document.getElementById("temp").innerHTML = data.temp;
  document.getElementById("content").innerHTML = data.feeling;
  document.getElementById("city").innerHTML = data.city;
}

/* Function to reset selections called by reset event listener */
function reset(e) {
  document.getElementById("feeling").value = "";
  document.getElementById("zip").value = "";
  updateUI({ date: "", temp: "", feeling: "", city: "" });
}
