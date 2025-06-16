import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import type { JSX } from "react/jsx-runtime";

function render(element: JSX.Element, container: HTMLElement | null): void {
    if (container) {
        ReactDOM.render(element, container);
    }
}

render(<App />, document.getElementById("root"));
