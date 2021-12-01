import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { Provider } from "./context/context";

import { SpeechProvider } from "@speechly/react-client";

ReactDOM.render(
  <SpeechProvider appId="7e16ee0b-e9f6-4ad1-9028-bf8aa195af4e" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById("root")
);
