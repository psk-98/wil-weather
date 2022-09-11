export const forecastHelper = (weather) => {
  return weather?.daily.map((day, index) => {
    const unixtime = day.dt - weather.timezone_offset;
    const date = new Date(unixtime * 1000);
    const temp_max = Math.round(day.temp.max);
    const temp_min = Math.round(day.temp.min);

    return (
      <div className="details">
        <div className="high-low">H:{temp_max}&#176;</div>
        <div className="high-low">L:{temp_min}&#176;</div>
        <div>{getWeekDay(date)}</div>
      </div>
    );
  });
};

export const handleUV = (index) => {
  var UV = "";
  if (index < 3) {
    UV = "Low";
  } else if (index >= 3) {
    UV = "Moderate";
  } else if (index >= 5) {
    UV = "High";
  } else if (index >= 8) {
    UV = "Very High";
  } else {
    UV = "Extreme";
  }
  return UV;
};

export const handleWindSpeed = (speed, units) => {
  if (units === "metric") {
    speed = Math.round(speed * 3.6);
    return <>{speed} km/h</>;
  } else {
    return <>{speed} mi/h</>;
  }
};

export const handleWindDirection = (deg) => {
  if (deg > 22.5 && deg <= 45) {
    return "NNE";
  } else if (deg > 45 && deg <= 67.5) {
    return "ENE";
  } else if (deg > 67.5 && deg <= 90) {
    return "E";
  } else if (deg > 90 && deg <= 112.5) {
    return "ESE";
  } else if (deg > 112.5 && deg <= 135) {
    return "ESE";
  } else if (deg > 135 && deg <= 157.5) {
    return "SE";
  } else if (deg > 157.5 && deg <= 180) {
    return "SSE";
  } else if (deg > 180 && deg <= 202.5) {
    return "S";
  } else if (deg > 202.5 && deg <= 225) {
    return "SSW";
  } else if (deg > 225 && deg <= 247.5) {
    return "SW";
  } else if (deg > 247.5 && deg <= 270) {
    return "WSW";
  } else if (deg > 270 && deg <= 292.5) {
    return "W";
  } else if (deg > 292.5 && deg <= 315) {
    return "WNW";
  } else if (deg > 315 && deg <= 337.5) {
    return "NW";
  } else if (deg > 337.5 && deg <= 360) {
    return "NNW";
  } else {
    return "N";
  }
};

export const handleVisibility = (vis, units) => {
  if (units === "metric") {
    if (vis < 1000) {
      return <div>{vis} meters</div>;
    } else {
      return <div>{Math.round(vis / 1000)} KM</div>;
    }
  } else {
    if (vis < 1609.344) {
      return <div>{vis} meters</div>;
    } else {
      return <>{Math.round(vis / 1609.344)} Miles</>;
    }
  }
};

export const handleTime = (weather) => {
  const unixtime = weather?.current.dt;
  const date = new Date(unixtime * 1000);

  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return weekdays[date.getDay()] + " " + formatTime(date);
};

const formatTime = (date) => {
  var hours = date.getHours();
  if (hours < 10) hours = "0" + hours;
  var mins = date.getMinutes();
  if (mins < 10) mins = "0" + mins;
  return hours + ":" + mins;
};

export const handleSun = (weather) => {
  const unixtime = weather?.current.sunrise;
  const date = new Date(unixtime * 1000);

  const unixtimeSunset = weather?.current.sunset;
  const dateSunset = new Date(unixtimeSunset * 1000);

  return {
    sunrise: formatTime(date),
    sunset: formatTime(dateSunset),
  };
};

const getWeekDay = (date) => {
  //Create an array containing each day, starting with Sunday.
  var weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  //Use the getDay() method to get the day.
  var day = date.getDay();
  //Return the element that corresponds to that index.
  return weekdays[day];
};

export const degrees = (
  <sup>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="8"
      className="degrees"
      viewBox="0 0 4.332 4.368"
    >
      <path
        id="Icon_weather-degrees"
        data-name="Icon weather-degrees"
        d="M15.828,11.052a2.1,2.1,0,0,1,.636-1.536,2.158,2.158,0,0,1,3.06,0,2.122,2.122,0,0,1,.636,1.536,2.149,2.149,0,0,1-.636,1.548A2.06,2.06,0,0,1,18,13.248a2.192,2.192,0,0,1-2.172-2.2Zm1.056,0a1.124,1.124,0,0,0,.324.8,1.14,1.14,0,0,0,1.944-.8,1.044,1.044,0,0,0-.336-.792,1.136,1.136,0,0,0-.8-.336,1.124,1.124,0,0,0-.8.324A1.085,1.085,0,0,0,16.884,11.052Z"
        transform="translate(-15.828 -8.88)"
      />
    </svg>
  </sup>
);
