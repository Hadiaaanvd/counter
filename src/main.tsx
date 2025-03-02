import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "../src/components/ui/provider.tsx"; // For Chakra UI
import App from "./App.tsx";

import "./index.css";
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Provider>
			<App />
		</Provider>
	</StrictMode>
);
