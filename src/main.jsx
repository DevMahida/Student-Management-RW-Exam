import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

import App from "./App.jsx";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";

import store from "./store/store.js";

createRoot(document.getElementById("root")).render(
   <StrictMode>
      <Provider store={store}>
         <BrowserRouter>
            <App />
         </BrowserRouter>
      </Provider>
   </StrictMode>,
);
