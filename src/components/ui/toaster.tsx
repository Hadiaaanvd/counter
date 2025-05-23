import {
	Toaster as ChakraToaster,
	Portal,
	Spinner,
	Stack,
	Toast,
	createToaster,
} from "@chakra-ui/react";

export const toaster = createToaster({
	placement: "bottom-end",
	pauseOnPageIdle: true,
});

const getIndicatorColor = (type: string) => {
	switch (type) {
		case "success":
			return "#74C898";
		case "error":
			return "red.500";
		case "warning":
			return "yellow.500";
		default:
			return "blue.solid";
	}
};

export const Toaster = () => {
	return (
		<Portal>
			<ChakraToaster toaster={toaster} insetInline={{ mdDown: "4" }}>
				{(toast) => (
					<Toast.Root className="custom-toaster" width={{ md: "sm" }}>
						{toast.type === "loading" ? (
							<Spinner size="sm" color="blue.solid" />
						) : (
							<Toast.Indicator
								color={getIndicatorColor(toast.type as string)}
							/>
						)}
						<Stack gap="1" flex="1" maxWidth="100%">
							{toast.title && (
								<Toast.Title>{toast.title}</Toast.Title>
							)}
							{toast.description && (
								<Toast.Description>
									{toast.description}
								</Toast.Description>
							)}
						</Stack>
						{toast.action && (
							<Toast.ActionTrigger>
								{toast.action.label}
							</Toast.ActionTrigger>
						)}
						{toast.meta?.closable && <Toast.CloseTrigger />}
					</Toast.Root>
				)}
			</ChakraToaster>
		</Portal>
	);
};
