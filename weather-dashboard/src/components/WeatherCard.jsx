function WeatherCard({ data }) {
  return (
    <div className="card">
      <h2>{data.name}</h2>
      <h3>{data.main.temp}°C</h3>
      <p>{data.weather[0].main}</p>

      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt="weather"
      />
    </div>
  );
}

export default WeatherCard;