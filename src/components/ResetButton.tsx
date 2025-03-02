import { Button } from "@chakra-ui/react";
import { toaster } from "../components/ui/toaster";
import { HiRefresh } from "react-icons/hi";
import { useCounter } from "../context/counterContext";

const ResetButton = () => {
	const { reset } = useCounter();
	const handleReset = () => {
		reset();
		toaster.create({
			title: "Counter Reset",
			description: `Counter is now 0`,
			duration: 1500,
			type: "success",
		});
	};
	return (
		<Button
			size="sm"
			_hover={{ color: "teal.400" }}
			onClick={handleReset}
			color="teal.500"
			variant="plain"
		>
			<HiRefresh /> Reset Counter
		</Button>
	);
};

export default ResetButton;
