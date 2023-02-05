import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { legacy_createStore as createStore } from "redux";
import { applyMiddleware } from "redux";
import { reducer } from "./reducers";
const root = ReactDOM.createRoot(document.getElementById("root"));
const dukkan = createStore(reducer, applyMiddleware(thunk));

root.render(
  <Provider store={dukkan}>
    <BrowserRouter>
      <>
        <ToastContainer />
        <App />
      </>
    </BrowserRouter>
  </Provider>
);
