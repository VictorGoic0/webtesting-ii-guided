import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";
import App from "./App";

describe("<App />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders successfully", () => {
    render(<App />);
  });

  it("renders hello world", () => {
    const { getByText, debug, queryByText } = render(<App />);

    getByText(/hello world/i);

    //expect(queryByText(/hello world/i)).not.toBeNull();
  });

  it("Greets the team", () => {
    const { getByText } = render(<App />);

    const button = getByText(/greet/i);

    fireEvent.click(button);
    getByText(/hello web xvii/i);
  });

  it("Goodbyes the team", () => {
    const { getByText } = render(<App />);

    const button = getByText(/bye/i);

    fireEvent.click(button);
    getByText(/goodbye web xvii/i);
  });
});
