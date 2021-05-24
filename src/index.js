import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import App from "./App";

serviceWorkerRegistration.register();
ReactDOM.render(<App />, document.getElementById("root"));
