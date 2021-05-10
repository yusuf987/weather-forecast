import Temprature from './Temprature';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { img_base_url } from "../../constant/constant";


let dummy_data_list = [
    {
        "dt": 1620680400,
        "main": {
          "temp": 294.78,
          "feels_like": 294.64,
          "temp_min": 294.78,
          "temp_max": 297.95,
          "pressure": 1008,
          "sea_level": 1008,
          "grnd_level": 908,
          "humidity": 63,
          "temp_kf": -3.17
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 92
        },
        "wind": {
          "speed": 3.15,
          "deg": 231,
          "gust": 5.02
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2021-05-10 21:00:00"
      },
      {
        "dt": 1620691200,
        "main": {
          "temp": 295.84,
          "feels_like": 295.91,
          "temp_min": 295.84,
          "temp_max": 297.17,
          "pressure": 1008,
          "sea_level": 1008,
          "grnd_level": 908,
          "humidity": 67,
          "temp_kf": -1.33
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 95
        },
        "wind": {
          "speed": 2.37,
          "deg": 231,
          "gust": 4.15
        },
        "visibility": 10000,
        "pop": 0.08,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2021-05-11 00:00:00"
      },
      {
        "dt": 1620702000,
        "main": {
          "temp": 300.39,
          "feels_like": 301.3,
          "temp_min": 300.39,
          "temp_max": 300.39,
          "pressure": 1010,
          "sea_level": 1010,
          "grnd_level": 911,
          "humidity": 57,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 62
        },
        "wind": {
          "speed": 3.07,
          "deg": 240,
          "gust": 3.26
        },
        "visibility": 10000,
        "pop": 0.05,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2021-05-11 03:00:00"
      }

]
let data = dummy_data_list[0]
let unit = 'c'

let logo = `${img_base_url}/${data.weather[0].icon}@2x.png`
configure({ adapter: new Adapter() });

test('temprature render correctly', () => {
    const wrapper = shallow(<Temprature data_list={dummy_data_list}></Temprature>);
    expect(wrapper.find('[data-testid="temprature"]').text()).toEqual((data.main.temp - 273.15).toFixed())
    expect(wrapper.find('[data-testid="img"]').prop("src")).toEqual(logo)

});

