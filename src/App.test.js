import { screen } from '@testing-library/react';
import {render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import App from './App';


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
    render(<App />,container);
  });
  
  const header_title = screen.getByText("weather forecast");
  expect(header_title).toBeInTheDocument();
});

