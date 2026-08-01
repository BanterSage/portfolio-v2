import {
	Container,
	Group,
	Paper,
	UnstyledButton,
	Text,
	ActionIcon,
	useMantineColorScheme,
	useComputedColorScheme,
} from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";
import classes from "./style.module.scss";

const links = [
	{ label: "About", id: "about" },
	{ label: "Skills", id: "skills" },
	{ label: "Projects", id: "work" },
	{ label: "Experience", id: "experience" },
	{ label: "Contact", id: "contact" },
];

export function Navigation() {
	const { setColorScheme } = useMantineColorScheme();
	const computedColorScheme = useComputedColorScheme("light");

	const toggleColorScheme = () => {
		setColorScheme(computedColorScheme === "dark" ? "light" : "dark");
	};

	const scrollToSection = (id: string) => {
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<Paper
			component="nav"
			p="md"
			radius={0}
			pos="sticky"
			top={0}
			left={0}
			right={0}
			style={{
				width: "100%",
				zIndex: 1000,
				background: "rgba(0, 0, 0, 0)",
				backdropFilter: "blur(12px)",
				borderBottom: "1px solid ",
			}}
		>
			<Container size="xl" px={{ base: "sm", xl: 0 }}>
				<Group align="center" justify="space-between">
					<Text
						className={classes.highlight}
						color="violet"
						fw={700}
						size="lg"
						ml={100}
						style={{ fontWeight: "bold" }}
					>
						Kyle Dunston
					</Text>

					<Group align="center" gap="lg" mr="xl">
						{links.map((link) => (
							<UnstyledButton
								key={link.id}
								className={classes.link}
								onClick={() => scrollToSection(link.id)}
							>
								{link.label}
							</UnstyledButton>
						))}

						<ActionIcon
							variant="default"
							size="lg"
							radius="sm"
							onClick={toggleColorScheme}
							aria-label="Toggle color scheme"
							style={{
								border: "none",
								background:
									computedColorScheme === "dark"
										? "rgba(255, 255, 255, 0.08)"
										: "rgba(0, 0, 0, 0.15)",
							}}
						>
							{computedColorScheme === "dark" ? (
								<IconSun size={20} />
							) : (
								<IconMoon size={20} />
							)}
						</ActionIcon>
					</Group>
				</Group>
			</Container>
		</Paper>
	);
}
