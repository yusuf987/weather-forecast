import useWindowDimensions from "../dimensions/useWindowDimensions";
import { img_base_url } from "../../constant/constant";


function Hours({ data_list, set_data, data }) {
    const { width } = useWindowDimensions();

    return (
        <div   className="flex_row" style={{ justifyContent: 'center' }}>
            {
                data_list.map((hours_data, i) => {
                    // Initial state
                    let time_set = hours_data.dt_txt.split(" ")[1].split(":")
                    let hour = time_set[0] + ":" + time_set[1]
                    let opacity = 0.6
                    let fontSize = 14
                    let icon = hours_data.weather[0].icon
                    let invert = ''
                    let description = hours_data.weather[0].description
                    let weather_logo = `${img_base_url}/${icon}@2x.png`

                    // Set Focus
                    if (hours_data.dt_txt === data.dt_txt) {opacity = 1}

                    // Change font for small screen
                    if (width < 500) { fontSize = 10 }
                    if (icon === '01n') { invert = 'invert' }
                   
                    return (
                        <span data-testid="hour-card" className="flex f12 p10 pointer" key={i} onClick={() => { set_data(hours_data) }} style={{ opacity: opacity, fontSize: fontSize }}>
                            <span data-testid="hour">{hour}</span>
                            <img className={"img25 " + invert} src={weather_logo} alt={description} />
                        </span>
                    )
                })
            }
        </div>
    );
}

export default Hours;
