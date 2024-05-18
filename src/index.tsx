import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import App from "App";

//  ALDR Tech Dashboard Context Provider
import { MaterialUIControllerProvider } from "context";
const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <MaterialUIControllerProvider>
      <App />
    </MaterialUIControllerProvider>
  </BrowserRouter>
);

serviceWorkerRegistration.register();
