import "./homepage.css";
import getData from "../../utils/getData";
const Homepage = async () => {

  const view = `
        <form class="login-form" action="./" method="POST">
        <div class="login-form__logo-container">
            <h1 id="city">Ciudad</h1>
            <h1 id="grades">Grados</h1>
            <h1 id="humidity">Humedad</h1>
            <h1 id="wind">Velocidad</h1>
        </div>
        <div class="login-form__content">
            <div class="login-form__header">Obtener el clima</div>
            <input class="login-form__input" id="user_input" type="text" name="dc_username" placeholder="Ciudad">
            <button class="login-form__button" type="submit">Clima</button>
        </div>
      </form>
      `;

  function Render(userInput) {
      let ciudadWeather = getData(userInput).then( ciudad => {
        let city = document.getElementById('city');
        let grades = document.getElementById('grades');
        let humidity = document.getElementById('humidity');
        let wind = document.getElementById('wind');
        city.innerHTML = ciudad.name;
        grades.innerHTML = ciudad.main.temp;
        humidity.innerHTML = ciudad.main.humidity;
        wind.innerHTML = ciudad.wind.speed;
      });
      
  }
  document.addEventListener("submit", (e) => {
      e.preventDefault();
      let userInput = document.getElementById('user_input').value;
      console.log("Click en el Formulario");
      console.log(userInput);
      Render(userInput);
  })

  return view;
};
export default Homepage;