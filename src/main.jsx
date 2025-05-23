import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
// Імпорт стилів нормалізації
import "modern-normalize";
//
import "./index.css";
import App from "./components/App";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./redux/store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);
