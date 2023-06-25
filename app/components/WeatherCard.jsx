import React from "react";
import FormatedDate from "../../utils/formatedDate";
import NoValid from "./NoValid";
import Image from "next/image";

const WeatherCard = ({ data }) => {
  if (!data) {
    return <div>Loading...</div>;
  }

  const { location, current } = data;

  if (!location || !current) {
    return <NoValid />;
  }

  const { name, region, country, tz_id, localtime } = location;

  const {
    last_updated,
    temp_c,
    temp_f,
    humidity,
    wind_kph,
    cloud,
    vis_km,
    wind_dir,
    localtime_epoch,
  } = current;

  const { text, icon } = current.condition;

  console.log(icon)

  return (
    <div className="mt-10">
      <div className="mx-auto max-w-xl p-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800/50 dark:border-gray-700 backdrop-blur mb-7">
        <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {country}
        </h6>
        <p className="font-normal text-gray-700 dark:text-gray-400">{region}</p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {FormatedDate(localtime)}
        </p>
      </div>

      <div className="mx-auto max-w-xl p-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800/50 dark:border-gray-700 backdrop-blur">
        <h6 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Temperatura: {temp_c}º
        </h6>
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Humidity: {humidity}
        </h5>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Cloudy: {cloud}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Wind direction: {wind_dir}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Last Update: {last_updated}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Condition: {text}
        </p>
        <Image src={`https:${icon}`} width={50} height={50} alt={text} />
      </div>
    </div>
  );
};

export default WeatherCard;
