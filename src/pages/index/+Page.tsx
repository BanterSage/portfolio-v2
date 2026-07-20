import {
	Box,
	Container,
	Title,
	Text,
	Group,
	Badge,
	Stack,
	Avatar,
	SimpleGrid,
	Card,
	Anchor,
	Button,
	Paper,
} from "@mantine/core";
import {
	IconArrowRight,
	IconDeviceDesktop,
	IconShare,
	IconVideo,
	IconPalette,
	IconRobot,
  IconBuildingCommunity,
} from "@tabler/icons-react";
import classes from "./style.module.scss";

export function Page() {
	const scrollToSection = (id: string) => {
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<>
			{/* Hero */}
			<Box id="hero" className={classes.sectionLight}>
				<Container size="xl" py={140}>
					<Stack align="center" gap="lg">
						<Avatar size={160} radius={100} src="/img/profile.png" alt="Kyle Dunston" />
						<Title order={1} ta="center">Hey, I'm Kyle</Title>
						<Text size="lg" ta="center" maw={600} c="dimmed">
							Fill Space
						</Text>
						<Group mt="sm" justify="center">
							<Button
								className={classes.pulseButton}
								radius="xl"
								size="md"
								color="red"
								rightSection={<IconArrowRight size={18} />}
								onClick={() => scrollToSection("work")}
							>
								View My Work
							</Button>
							<Button
								className={classes.pulseButton}
								radius="xl"
								size="md"
								variant="outline"
								color="red"
								onClick={() => scrollToSection("contact")}
							>
								Get In Touch
							</Button>
						</Group>
					</Stack>
				</Container>
			</Box>

			{/* About */}
			<Box id="about" className={classes.sectionDark}>
				<Container size="xl" py={100}>
					<Stack align="center">
						<Title order={2} mb="md" ta="center">About Me</Title>
						<Text maw={700} ta="center">
							My name is Kyle Dunston and I am a student at Mohawk College based in Hamilton, ON.
							I am currently pursuing a Diploma in Urban & Regional Planning.
						</Text>
						<Text maw={700} ta="center">
							I typically spend my time learning Web Development, building websites, playing video games, or doing DIY projects at home.
						</Text>
					</Stack>
				</Container>
			</Box>

			{/* Skills */}
			<Box id="skills" className={classes.sectionLight}>
				<Container size="xl" py={100}>
					<Stack align="center">
						<Title order={2} mb="xs" ta="center">Skills & Expertise</Title>
						<Text mb="xl" maw={700} ta="center" c="dimmed">
							While not a complete list of everything I can do, this is what I do best.
						</Text>

						<SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl">
							<Paper radius="md" p="lg" className={classes.skillCard}>
								<Stack align="center" gap="xs">
									<div className={classes.iconBadge}>
										<IconDeviceDesktop size={20} />
									</div>
									<Title order={4}>Frontend Development</Title>
									<Group gap="xs" justify="center">
										<Badge variant="light">React</Badge>
										<Badge variant="light">TypeScript</Badge>
										<Badge variant="light">Mantine</Badge>
										<Badge variant="light">HTML</Badge>
										<Badge variant="light">CSS</Badge>
									</Group>
								</Stack>
							</Paper>

							<Paper radius="md" p="lg" className={classes.skillCard}>
								<Stack align="center" gap="xs">
									<div className={classes.iconBadge}>
										<IconShare size={20} />
									</div>
									<Title order={4}>Social Media</Title>
									<Group gap="xs" justify="center">
										<Badge variant="light">Youtube</Badge>
										<Badge variant="light">Instagram</Badge>
										<Badge variant="light">Twitter/X</Badge>
										<Badge variant="light">TikTok</Badge>
										<Badge variant="light">Discord</Badge>
									</Group>
								</Stack>
							</Paper>

							<Paper radius="md" p="lg" className={classes.skillCard}>
								<Stack align="center" gap="xs">
									<div className={classes.iconBadge}>
										<IconVideo size={20} />
									</div>
									<Title order={4}>Video Editing</Title>
									<Group gap="xs" justify="center">
										<Badge variant="light">Premiere Pro</Badge>
										<Badge variant="light">Capcut</Badge>
										<Badge variant="light">After Effects</Badge>
									</Group>
								</Stack>
							</Paper>

							<Paper radius="md" p="lg" className={classes.skillCard}>
								<Stack align="center" gap="xs">
									<div className={classes.iconBadge}>
										<IconPalette size={20} />
									</div>
									<Title order={4}>Graphic Design</Title>
									<Group gap="xs" justify="center">
										<Badge variant="light">Adobe Photoshop</Badge>
										<Badge variant="light">Adobe Illustrator</Badge>
										<Badge variant="light">Canva</Badge>
									</Group>
								</Stack>
							</Paper>

							<Paper radius="md" p="lg" className={classes.skillCard}>
								<Stack align="center" gap="xs">
									<div className={classes.iconBadge}>
										<IconRobot size={20} />
									</div>
									<Title order={4}>Generative AI</Title>
									<Group gap="xs" justify="center">
										<Badge variant="light">Claude</Badge>
										<Badge variant="light">ChatGPT</Badge>
										<Badge variant="light">Gemini</Badge>
										<Badge variant="light">Grok</Badge>
									</Group>
								</Stack>
              </Paper>

              <Paper radius="md" p="lg" className={classes.skillCard}>
								<Stack align="center" gap="xs">
									<div className={classes.iconBadge}>
										<IconBuildingCommunity size={20} />
									</div>
									<Title order={4}>Urban Design</Title>
									<Group gap="xs" justify="center">
										<Badge variant="light">AutoCAD</Badge>
										<Badge variant="light">ArcGIS</Badge>
									</Group>
								</Stack>
							</Paper>
						</SimpleGrid>
					</Stack>
				</Container>
			</Box>

			{/* Projects */}
			<Box id="work" className={classes.sectionDark}>
				<Container size="xl" py={100}>
					<Stack align="center">
						<Title order={2} mb="xs" ta="center">Featured Projects</Title>
						<Text mb="xl" maw={700} ta="center" c="dimmed">
							A selection of projects I have worked on and am proud of.
						</Text>

						<SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
							<Card padding="lg" radius="md" withBorder>
								<Stack align="center" gap="xs">
									<Title order={4}>Project One</Title>
									<Text size="sm" c="dimmed" ta="center">
										Short description of the project and what it does.
									</Text>
									<Group gap="xs" justify="center">
										<Badge variant="light">React</Badge>
										<Badge variant="light">TypeScript</Badge>
									</Group>
									<Anchor href="#" mt="md">View Project →</Anchor>
								</Stack>
							</Card>

							<Card padding="lg" radius="md" withBorder>
								<Stack align="center" gap="xs">
									<Title order={4}>Project Two</Title>
									<Text size="sm" c="dimmed" ta="center">
										Short description of the project and what it does.
									</Text>
									<Group gap="xs" justify="center">
										<Badge variant="light">Node.js</Badge>
									</Group>
									<Anchor href="#" mt="md">View Project →</Anchor>
								</Stack>
							</Card>

							<Card padding="lg" radius="md" withBorder>
								<Stack align="center" gap="xs">
									<Title order={4}>Project Three</Title>
									<Text size="sm" c="dimmed" ta="center">
										Short description of the project and what it does.
									</Text>
									<Group gap="xs" justify="center">
										<Badge variant="light">Vike</Badge>
									</Group>
									<Anchor href="#" mt="md">View Project →</Anchor>
								</Stack>
							</Card>
						</SimpleGrid>
					</Stack>
				</Container>
			</Box>

			{/* Experience */}
			<Box id="experience" className={classes.sectionLight}>
				<Container size="xl" py={100}>
					<Stack align="center">
						<Title order={2} mb="xl" ta="center">Experience</Title>

						<Title order={3} mb="md" ta="center">Work Experience</Title>
						<Stack gap="lg" mb="xl" align="center">
							<Stack align="center" gap="xs">
								<Title order={4}>Service Associate</Title>
								<Text size="sm" c="dimmed">Walmart • January 2022 - Present</Text>
								<Text mt="xs" maw={700} ta="center">
									Short description of your role and responsibilities.
								</Text>
								<Group gap="xs" justify="center">
									<Badge variant="light">React</Badge>
									<Badge variant="light">TypeScript</Badge>
								</Group>
							</Stack>
						</Stack>

						<Title order={3} mb="md" ta="center">Education</Title>
						<Stack gap="lg" align="center">
							<Stack align="center" gap="xs">
								<Title order={4}>Urban & Regional Planning</Title>
								<Text size="sm" c="dimmed">Mohawk College • September 2023 - Present</Text>
								<Text mt="xs" maw={700} ta="center">
									Short description of your education and focus areas.
								</Text>
							</Stack>
						</Stack>
					</Stack>
				</Container>
			</Box>

			{/* Contact */}
			<Box id="contact" className={classes.sectionDark}>
				<Container size="xl" py={100}>
					<Stack align="center">
						<Title order={2} mb="md" ta="center">Let's Work Together</Title>
						<Text maw={600} mb="lg" ta="center">
							I'm always interested in new opportunities and exciting projects.
							Whether you have a question or just want to say hello, I'll try my
							best to get back to you!
						</Text>

						<Group justify="center">
							<Button
								className={classes.pulseButton}
								component="a"
								href="mailto:you@example.com"
								radius="xl"
								size="md"
								color="red"
							>
								Send Email
							</Button>
							<Button
								className={classes.pulseButton}
								component="a"
								href="https://linkedin.com/in/yourprofile"
								target="_blank"
								rel="noreferrer"
								radius="xl"
								size="md"
								variant="outline"
								color="red"
							>
								Connect
							</Button>
						</Group>
					</Stack>
				</Container>
			</Box>

			<Box className={classes.sectionLight} py="md">
				<Container size="xl">
					<Text size="sm" ta="center" c="dimmed">
						© 2026 Kyle Dunston - Built and designed by me
					</Text>
				</Container>
			</Box>
		</>
	);
}
