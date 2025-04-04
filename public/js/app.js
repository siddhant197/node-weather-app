function submitForm(e) {
  e.preventDefault();
  const search = document.querySelector("input");
  const messageOne = document.querySelector("#message-1");
  const messageTwo = document.querySelector("#message-2");
  const location = search.value;

  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";

  fetch("/weather?address=" + location).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error;
      } else {
        const { icon_url, description, temperature, feelslike, humidity } =
          data.forecast;
        messageOne.textContent = data.location;
        messageTwo.innerHTML = `
        <div class="weather-details">
    <div class="weather-header">
      <span class="weather-icon">
        <img src="${icon_url}" alt="Weather Icon" />
      </span>
      <strong>${description}</strong> conditions right now.
    </div>
    <div class="weather-info">
      It's currently <strong>${temperature}°C</strong>, feels like <strong>${feelslike}°C</strong>, with <strong>${humidity}% humidity</strong>.
    </div>
  </div>
        `;
      }
    });
  });
}
