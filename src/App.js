import React from 'react';
import './App.css';
import Days from "./components/days/Days";
import CityInfo from "./components/city_info/CityInfo";
import Temprature from "./components/temprature/Temprature";
import Header from "./components/header/Header";
import { weather_api } from "./constant/constant";

function App() {

  // Initial states
  const [date, set_date] = React.useState(new Date())
  const [weather_data, set_weather_data] = React.useState(null)
  const [DateList, set_date_list] = React.useState([])

  // Page Load
  React.useEffect(() => {
    let forcast_dates = new Set()

    //Fetcching the weather data from api
    fetch(weather_api)
      .then(res => res.json())
      .then(
        (result) => {

          let data_list = []
          result.list.forEach((data) => {
            if (date.toLocaleDateString() === new Date(data.dt_txt.split(" ")[0]).toLocaleDateString()) {
              data_list.push(data)
            }
            forcast_dates.add(data.dt_txt.split(" ")[0])

          })
          set_weather_data(data_list)

          let list = []
          forcast_dates.forEach((data) => {
            list.push(data)
          })
          set_date_list(list)
        },
        (error) => {
         console.log("Something went wrong",error)
        }
      )
  }, [date])

  //Handling callback from child component
  function callback(data) {
    set_date(new Date(data))
  }

  return (
    <div className="body">

      {/* Header Component */}
      <Header></Header>
      <div className="main-container">

        {/* Temprature Component */}
        {weather_data ? <Temprature data_list={weather_data}></Temprature> : ''}

        {/* Days Component */}
        {(DateList.length > 0) ? <Days DateList={DateList} callback={callback} selected_date={date}></Days> : ''}

        {/* City Component */}
        <CityInfo></CityInfo>

      </div>
    </div>
  );
}

export default App;
