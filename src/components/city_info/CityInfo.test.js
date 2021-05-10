import CityInfo from './CityInfo';
import {render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";


let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('renders correctly', () => {
    
    act(() => {
        render(<CityInfo />,container);
      });
  
  expect(container.querySelector("span").textContent).toBe("Bengaluru, Karnataka");
});

