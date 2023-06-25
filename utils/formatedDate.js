import React from "react";

function FormatedDate(date) {
  const fechaNueva = new Date(date);
  const opciones = {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  const formatoLegible = fechaNueva.toLocaleDateString("es-ES", opciones);
  return formatoLegible;
}

export default FormatedDate;
