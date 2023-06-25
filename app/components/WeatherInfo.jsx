import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import NoData from "./NoData";

async function getWeatherData(location) {
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

const WeatherInfo = ({ searchValue }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMesage] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getWeatherData(searchValue);
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setErrorMesage(error)
        setLoading(false);
      }
    };

    if (searchValue) {
      fetchData();
    }
  }, [searchValue]);


  if (loading) {
    return <div>Loading...</div>;
  }

  return <>{!data ? <NoData /> : <WeatherCard data={data} errorMessage={errorMessage} />}</>;
};

export default WeatherInfo;
