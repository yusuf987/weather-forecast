import Days from './Days';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import assert from 'assert'

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
"Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
let dummy_data_list = ["2021-05-10","2021-05-11","2021-05-12","2021-05-13","2021-05-14","2021-05-15"]
let date = new Date()

configure({adapter: new Adapter()});

test('Days render correctly', () => {
     const wrapper = shallow( <Days DateList={dummy_data_list}  selected_date={date}></Days>);
     expect(wrapper.find('[data-testid="date-card"]').length).toEqual(dummy_data_list.length)
   
    dummy_data_list.map((date,i)=>{
        var d = new Date(date); 
        var dd = String(d.getDate()).padStart(2, '0');
        var mmm = monthNames[d.getMonth()]

        expect(wrapper.find('[data-testid="date"]').at(i).text().trim()).toBe(dd + " " + mmm);

    })
    
});

