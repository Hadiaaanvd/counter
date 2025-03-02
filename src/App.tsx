import { Flex } from "@chakra-ui/react";
import { CounterProvider } from "./context/counterContext";
import { Toaster } from "./components/ui/toaster";

import CounterCard from "./components/CounterCard";
import "./App.sass";

function App() {
	return (
		<CounterProvider>
			<Flex alignItems="center" minHeight="100vh" justifyContent="center">
				<CounterCard />
			</Flex>
			<Toaster />
		</CounterProvider>
	);
}

export default App;
