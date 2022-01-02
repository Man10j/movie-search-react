import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/rootReducer";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyDYOqVQRLZpRbGBmpvO27-CVHMtiQsgeWQ",
  authDomain: "moviesearchreact.firebaseapp.com",
  projectId: "moviesearchreact",
  storageBucket: "moviesearchreact.appspot.com",
  messagingSenderId: "66018623313",
  appId: "1:66018623313:web:d78f9da31de4146c7fdd70",
  measurementId: "G-ZXXQPVRW40",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
