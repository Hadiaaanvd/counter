import { Button, Text, Flex } from "@chakra-ui/react";
import { useCounter } from "../context/counterContext";
import { toaster } from "../components/ui/toaster";
const Counter = () => {
	const { count, increment } = useCounter();
	const handleClick = () => {
		increment();
		toaster.create({
			title: "Incremented",
			description: `Counter is now ${count + 1}`,
			duration: 1500,
			type: "success",
		});
	};

	return (
		<Flex fontWeight={500} alignItems="center" gap={3}>
			<Text fontSize="md">Current Count {count}</Text>
			<Button
				fontSize="md"
				onClick={handleClick}
				background="gray.300"
				_hover={{ background: "gray.200" }}
			>
				+1
			</Button>
		</Flex>
	);
};

export default Counter;
