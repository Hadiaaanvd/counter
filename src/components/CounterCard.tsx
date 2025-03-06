import { Box, Text, VStack, Heading, Highlight } from "@chakra-ui/react";
import Counter from "./Counter";
import ResetButton from "./ResetButton";

const CounterCard = () => {
	return (
		<Box
			px={4}
			py={14}
			textAlign="center"
			alignContent="center"
			background="#3e4247"
			boxShadow="2xl"
			w={{ base: "100%", md: "sm" }}
			h={{ base: "100vh", md: "auto" }}
			rounded={{ base: "0", md: "xl" }}
		>
			<VStack gap={12}>
				<VStack>
					<Heading size="xl" letterSpacing="tight">
						<Highlight
							query="Counting!"
							styles={{ color: "teal.500" }}
						>
							Let's start Counting!
						</Highlight>
					</Heading>
					<Text fontSize="sm">
						Click +1 to increase and Reset to start over.
					</Text>
				</VStack>
				<Counter />
				<ResetButton />
			</VStack>
		</Box>
	);
};

export default CounterCard;
