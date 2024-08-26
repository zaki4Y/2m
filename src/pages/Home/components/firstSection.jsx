import { useState, useEffect } from "react";
import "./firstSection.scss";
import axios from "axios";
import Weather from "../../Weather/components/WeatherSection";
import Navbar from "./Navbar";
import { Header } from "../../../layouts/header";

export const FirstSection = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Load saved data and location from local storage when the component mounts
    const savedData = localStorage.getItem("weatherData");
    const savedLocation = localStorage.getItem("location");

    if (savedData && savedLocation) {
      setData(JSON.parse(savedData));
      // setLocation(savedLocation);
    }
  }, []);

  const searchLocalisation = (event) => {
    if (event.key === "Enter") {
      const API_KEY = "47952249f904c95c7c83a706274cc449";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;

      axios
        .get(url)
        .then((response) => {
          setData(response.data);
          console.log(response.data);

          // Save the data and location to local storage
          localStorage.setItem("weatherData", JSON.stringify(response.data));
          // localStorage.setItem("location", location);
       
        })
        .catch((error) => {
          console.error("There was an error with the request:", error);
        });
      setLocation("");
    }
  };

  return (
    <>
      <body className="dark">
        <main>
          <div className="flex lg:w-full w-[90vw] py-10">
            <div className="w-full h-full flex relative items-center justify-center bg-danger">
              <div className="text-center p-4"></div>
              <input
                type="text"
                className="py-5 px-6 w-[700px] text-lg rounded-3xl border border-gray-200 text-gray-600 placeholder:text-gray-400 focus:outline-none bg-white-600/100 shadow-md"
                placeholder="Enter location"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                onKeyDown={searchLocalisation}
              />
            </div>
          </div>
          <div>
            <Weather weatherData={data} />
          </div>
        </main>
      </body>
    </>
  );
};

