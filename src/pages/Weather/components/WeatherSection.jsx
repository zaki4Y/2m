import React from "react";
import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();



const WeatherSection = ({ weatherData }) => {
  // console.log(weatherData);
  return (
    <div  className="p-10">
      {weatherData.weather ? (
        <div className=" lg:w-[500px] lg:h-[300px] bg-gray-300 shadow-lg rounded-xl m-auto relative px-6 top-[10%] block ">
          <div className="flex justify-between">
            <div className="w-1/2 my-4 mx-auto flex justify-center items-center">
              <div className="flex flex-col items-start justify-between h-full">
                <div>
                  <p className="text-xl">
                    {weatherData.name},{weatherData.sys.country}
                  </p>
                  <p className="text-md text-[#93441A]">{weatherData.weather[0].description}</p>
                </div>
                <div>
                  <h1 className="text-6xl font-semibold ">{weatherData.main.temp.toFixed()} <span className="text-[#DAAB3A]">°C</span></h1>
                </div>
              </div>
            </div>

            <div className="w-1/2 flex flex-col justify-between items-end">
              <div className="relative">
                <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="" className="w-[120px]" />

              </div>
              {weatherData.name !== undefined ?(
                <div className="flex flex-col justify-evenly gap-y-2 my-4 mx-auto text-xs">
                  <div className="flex flex-col justify-between gap-x-8">
                    <p className="text-md text-[#93441A] font-bold">Feels Like</p>
                    <p className="font-bold w-20">
                      {weatherData.main.feels_like.toFixed()} °C

                    </p>
                      <div className="flex flex-col justify-between gap-x-8">
                    <p className="text-md text-[#93441A] font-bold" >Humiditi</p>
                    <p className="font-bold w-20">
                      {weatherData.main.humidity} %

                    </p>
                  </div>

                     <div className="flex flex-col justify-between gap-x-8">
                    <p className="text-md text-[#93441A] font-bold">Wind Speed</p>
                    <p className="font-bold w-20">
                      {weatherData.wind.speed.toFixed()} KPH

                    </p>
                  </div>

                       <div className="flex flex-col justify-between ">
                    <p className="text-md text-[#93441A] font-bold">Pressure</p>
                    <p className="font-bold w-20">
                      {weatherData.main.pressure.toFixed()} hPa

                    </p>
                  </div>
                  </div>
                
               
             

                </div>
              ):null}
            </div>
          </div>
        </div>
      ) : null}
    </div>

  );
};

export default WeatherSection;
