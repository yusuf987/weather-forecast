import React from 'react';

import './App.css';
import Days from "./components/Days";
import CityInfo from "./components/CityInfo";
import Temprature from "./components/Temprature";
import Header from "./components/Header";
import {weather_api} from "./constant/constant";

function App() {

  const [date, set_date] = React.useState(new Date())
  const [weather_data, set_weather_data] = React.useState(null)
  const [DateList, set_date_list] = React.useState([])



  React.useEffect(() => {

    let forcast_dates = new Set()
    fetch(weather_api)
      .then(res => res.json())
      .then(
        (result) => {

          let data_list = []
          result.list.forEach((data) => {
            if(date.toLocaleDateString() === new Date(data.dt_txt.split(" ")[0]).toLocaleDateString())
            {
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

        }
      )


  }, [date])

  function callback(data){
    set_date(new Date(data))
  }
  return (
    <div className="body">

      <Header></Header>
      <div className="main-container">
        <div style={{ display: 'flex', flexDirection: 'row' }}>

          {weather_data ? <Temprature data_list={weather_data}></Temprature> : ''}
   
        </div>

        <br></br>

        <div style={{ display: 'flex', fontSize: 16 }}>
          {

            DateList.map((selected_date,i) => {
              let opacity = 0.6
              if(new Date(selected_date).toLocaleDateString() === date.toLocaleDateString())
              {
                opacity = 1
              }
              return (
                <Days key={i} date={selected_date} opacity={opacity} callback={callback} ></Days>
              )
            })
          }



        </div>
        <CityInfo></CityInfo>

      </div>
    </div>
  );
}

export default App;
