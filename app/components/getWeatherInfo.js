async function getWeatherInfo(location) {
  const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${location}`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "9d3b4ff529msh1bdd7936665b550p1f8e9ejsn836675d6e2cf",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const result = await res.json();

  return result;
}

export default getWeatherInfo