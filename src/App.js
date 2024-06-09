import "./App.css";
import TopBar from "./components/TopBar";
import Input from "./components/Input";
import TimeAndLocation from "./components/TimeAndLocation";
import TempInDetails from "./components/TempInDetails";
import Forcast from "./components/Forcast";
import { useEffect, useState } from "react";
import getFormatedWeatherData from "./services/weatherServices";
import MapArcgis from "./components/MapArcgis";


function App() {
  const [query, setQuery] = useState({ q: "Mumbai" });
  const [unit, setUnit] = useState("metric");
  const [weatherData, setWeatherData] = useState(null);

  useEffect(
    () => {
      //calling the Weather api
      const featchWeather = async () => {
        await getFormatedWeatherData({ ...query, units: unit }).then(
          (data) => {
            setWeatherData(data);
            console.log(data);
          }
        );
      };
      featchWeather();
      console.log(weatherData);
    },
    [query, unit] //we want to load featch weather every time when query and unit changes
  );
  return (
    <>
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-12 col-md-8 mt-4">
            <div class="py-5 px-4 bg-gradient-to-br from-blue-700 to-red-700 shadow-xl shadow-gray-400">
              <div class="row">
                <div class="col-12">
                  <TopBar setQuery={setQuery}/>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <Input setQuery={setQuery}/>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  {weatherData && (
                    <div>
                      <TimeAndLocation weather={weatherData.formatedCurrentWeather}/>
                      <div className="h-96 flex flex-col items-center justify-center my-3">
                        {weatherData && (
                          <MapArcgis weather={weatherData.formatedCurrentWeather}/>
                        )}
                      </div>
                      <TempInDetails weather={weatherData.formatedCurrentWeather}/>
                      <Forcast title="Hourly Forcast" items={weatherData.formatedForcastWeather.hourly}/>
                      <Forcast title="Daily Forcast" items={weatherData.formatedForcastWeather.daily}/>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
