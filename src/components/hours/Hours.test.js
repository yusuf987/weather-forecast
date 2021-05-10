import Hours from './Hours';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import assert from 'assert'


let dummy_data_list = [
    {
        clouds: { all: 56 },
        dt: 1620669600,
        dt_txt: "2021-05-10 18:00:00",
        weather: [{ id: 803, main: "Clouds", description: "broken clouds", icon: "04n" }],
    },
    { clouds: {all: 56},
    dt: 1620669600,
    dt_txt: "2021-05-10 21:00:00",
    weather: [{id: 803, main: "Clouds", description: "broken clouds", icon: "04n"}],
    }

]
configure({adapter: new Adapter()});

test('hours render correctly', () => {
    const wrapper = shallow(<Hours data_list={dummy_data_list} data={dummy_data_list[0]} />);
    expect(wrapper.find('[data-testid="hour-card"]').length).toEqual(dummy_data_list.length)
   
    dummy_data_list.map((hours_data,i)=>{
        let time_set = hours_data.dt_txt.split(" ")[1].split(":")
        let hour = time_set[0] + ":" + time_set[1]
        expect(wrapper.find('[data-testid="hour-card"]').at(i).text()).toBe(hour);

    })
    
});

