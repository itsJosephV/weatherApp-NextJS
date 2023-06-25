import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import NoData from "./NoData";
import getWeatherInfo from "./getWeatherInfo";


const WeatherInfo = ({ searchValue }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMesage] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getWeatherInfo(searchValue);
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
