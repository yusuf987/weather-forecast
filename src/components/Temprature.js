import React, { useEffect, useState } from 'react';
import useWindowDimensions from "./useWindowDimensions";

function Temprature({ data_list }) {
    const [data, set_data] = useState(data_list[0])
    const [unit, set_unit] = useState('c')
    const { width } = useWindowDimensions();

    let logo = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    useEffect(() => {
        set_data(data_list[0])
    }, [data_list])

    function change_unit(unit){
    set_unit(unit)
    }
    return (
        <div>
            <div className="flex_row">
                <div className="flex_row">
                    <div className="flex_row">
                        <img className={"img90" } src={logo} alt={data.weather[0].description} style={{filter:(data.weather[0].icon === '01n')?'invert(1)':''}} />
                    </div>

                    <span style={{ fontSize: 60 }}>{(unit === 'c')?(data.main.temp - 273.15).toFixed():(((data.main.temp - 273.15) *(9/5)) + 32).toFixed()}</span>
                    <span onClick={()=>{change_unit("c")}} style={{cursor:'pointer', opacity: (unit === 'c')?1:0.6, padding: 0 }}>&nbsp;°C</span>
                    <span>&nbsp;|&nbsp;</span>
                    <span onClick={()=>{change_unit("f")}} style={{cursor:'pointer', opacity: (unit === 'c')?0.6:1 }}>°F</span>
                </div>
                <div className="flex f12 p20">
                    <span> Humidity: {data.main.humidity}%</span>
                    <span> Wind: {data.wind.speed} m/s</span>
                    <span> Weather: {data.weather[0].description}</span>
                </div>
            </div>

            <div className="flex_row" style={{justifyContent:'center'}}>
                {
                    data_list.map((hours_data,i) => {
                        let time_set = hours_data.dt_txt.split(" ")[1].split(":")
                        let hour = time_set[0] + ":" + time_set[1]

                            let opacity = 0.6
                            let fontSize = 14
                            if (hours_data.dt_txt === data.dt_txt) {
                                opacity = 1
                            }                         
                            if(width < 500){fontSize = 10}
                            let icon = hours_data.weather[0].icon
                            let invert = ''
                            if(icon === '01n') {invert = 'invert'}
                            let description = hours_data.weather[0].description
                            let weather_logo = `https://openweathermap.org/img/wn/${icon}@2x.png`
    
                            return (
                                <span className="flex f12 p10 pointer" key={i} onClick={() => { set_data(hours_data) }} style={{ opacity: opacity,fontSize:fontSize}}>
                                    <span>{hour}</span>
                                    <img className={"img25 " + invert}  src={weather_logo} alt={description} />
    
                                </span>
                            )
                   

                    })
                }
            </div>


        </div>
    );
}

export default Temprature;
