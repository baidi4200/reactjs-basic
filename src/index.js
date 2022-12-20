import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { FavouriteContextProvider } from "./store/favourite-context";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <FavouriteContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FavouriteContextProvider>
  </StrictMode>
);
