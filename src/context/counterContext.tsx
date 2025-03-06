import {
	createContext,
	useContext,
	useState,
	ReactNode,
	useEffect,
} from "react";

type CounterContextType = {
	count: number;
	increment: () => void;
	reset: () => void;
};

const CounterContext = createContext<CounterContextType | undefined>(undefined);
export const CounterProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [count, setCount] = useState(() => {
		const savedCount = localStorage.getItem("count");
		return savedCount !== null ? parseInt(savedCount, 10) : 0;
	});

	const increment = () => setCount((prev) => prev + 1);
	const reset = () => setCount(0);

	useEffect(() => {
		localStorage.setItem("count", count.toString());
	}, [count]);

	return (
		<CounterContext.Provider value={{ count, increment, reset }}>
			{children}
		</CounterContext.Provider>
	);
};

export const useCounter = (): CounterContextType => {
	const context = useContext(CounterContext);
	if (!context) {
		console.warn("useCounter must be used within a CounterProvider");
		return { count: 0, increment: () => {}, reset: () => {} };
	}
	return context;
};
