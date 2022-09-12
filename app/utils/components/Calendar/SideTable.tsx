import React from "react";
import { EventCard } from "./EventCard";

type Props = {};

const eventExample = {
  title: "Evento de prueba",
  description: "Descripcion del evento de prueba",
  date: "2020-12-12",
  time: "12:00-13:00",
  addressedTo: ["Estudiantes", "Profesores"],
  place: "Aula 1",
};

const SideTable = (props: Props) => {
  return (
    <div className="flex-1 grid grid-rows-1 h-screen">
      <div className="border border-gray-200 flex flex-col">
        <header className="flex flex-col m-4">
          <div className="flex flex-row">
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img
              src={require("../../img/calendar-svg.svg")}
              alt="SVG as an image"
              className="w-5 h-5 m-2"
            />
            <p className="text-2xl mt-1 font-bold">Upcomming Events</p>
          </div>
          {/* Fecha en la que se esta */}
          <div className="container">{`[Dia] de [Mes] del [Año]`}</div>
        </header>
        <hr style={{ width: "90%", alignSelf: "center" }} />
        {/* padding: 6 -- Para alinearlo con el texto y la linea */}

        {/* Eventos -- Del dia seleccionado o actual */}
        <div className="container px-6 py-2">
          {/* Create a list of cards */}
          <EventCard eventObject={eventExample} />
        </div>
        {/* Un map para los eventos de ese día */}
      </div>
    </div>
  );
};
export default SideTable;
