import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { theme } from "../css/theme.js";
import { GlobalStyles } from "../css/GlobalStyles.js";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "../features/store.js";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
        <GlobalStyles />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
