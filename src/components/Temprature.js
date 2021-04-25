import React, { useEffect, useState } from 'react';
import Hours from "../components/Hours";
import { img_base_url } from "../constant/constant";

function Temprature({ data_list }) {
    // Initial States
    const [data, set_data] = useState(data_list[0])
    const [unit, set_unit] = useState('c')
    let logo = `${img_base_url}/${data.weather[0].icon}@2x.png`

    // Page Load
    useEffect(() => {
        set_data(data_list[0])
    }, [data_list])

    // Temrature Unit Change Handler
    function change_unit(unit) {
        set_unit(unit)
    }

    return (
        <div>
            <div className="flex_row">
                {/* Temprature Info */}
                <div className="flex_row">
                    <div className="flex_row">
                        <img className={"img90"} src={logo} alt={data.weather[0].description} style={{ filter: (data.weather[0].icon === '01n') ? 'invert(1)' : '' }} />
                    </div>
                    <span style={{ fontSize: 60 }}>{(unit === 'c') ? (data.main.temp - 273.15).toFixed() : (((data.main.temp - 273.15) * (9 / 5)) + 32).toFixed()}</span>
                    <span onClick={() => { change_unit("c") }} style={{ cursor: 'pointer', opacity: (unit === 'c') ? 1 : 0.6, padding: 0 }}>&nbsp;°C</span>
                    <span>&nbsp;|&nbsp;</span>
                    <span onClick={() => { change_unit("f") }} style={{ cursor: 'pointer', opacity: (unit === 'c') ? 0.6 : 1 }}>°F</span>
                </div>

                {/* Temprature Associated Info */}
                <div className="flex f12 p20">
                    <span> Humidity: {data.main.humidity}%</span>
                    <span> Wind: {data.wind.speed} m/s</span>
                    <span> Weather: {data.weather[0].description}</span>
                </div>

            </div>

            {/* Hours Component */}
            <Hours data_list={data_list} set_data={set_data} data={data}></Hours>
            <br></br>

        </div>
    );
}

export default Temprature;
