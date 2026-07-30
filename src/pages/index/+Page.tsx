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
  IconMenu3,
  IconMenu,
  IconMessageReport,
  IconMessageShare,
  IconPaperclip,
} from "@tabler/icons-react";
import classes from "./style.module.scss";
import franceBanner from "../../assets/images/france.png";
import storymap from "../../assets/images/storymap.jpg";
import character from "../../assets/images/character.jpg";
import face from "../../assets/images/face.jpeg";


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
						<Avatar size={160} radius={100} src={face} alt="Kyle Dunston" />
						<Title order={1} ta="center">Hey, I'm Kyle</Title>
						<Text size="lg" ta="center" maw={600} c="dimmed">
						  I'm studying Urban Planning, and outside of that I've been getting into web development and video editing. Always up for learning something new and building things I enjoy.
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
										<IconMessageShare size={20} />
									</div>
									<Title order={4}>Administration</Title>
									<Group gap="xs" justify="center">
										<Badge variant="light">Administrative Support</Badge>
										<Badge variant="light">Data Entry</Badge>
                    <Badge variant="light">Record Management</Badge>
										<Badge variant="light">Document Preparation</Badge>
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
										<IconPaperclip size={20} />
									</div>
									<Title order={4}>MS Office</Title>
									<Group gap="xs" justify="center">
										<Badge variant="light">Microsoft Word</Badge>
										<Badge variant="light">Microsoft Excel</Badge>
                    <Badge variant="light">Microsoft PowerPoint</Badge>
										<Badge variant="light">Microsoft Outlook</Badge>
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
							<Card padding="lg" radius="md" withBorder className={classes.experienceCard}>
								<Card.Section>
									<img
										src={franceBanner}
										alt="Project One"
										style={{ width: "100%", height: 200, objectFit: "cover" }}
									/>
								</Card.Section>
								<Stack gap="xs" mt="md">
									<Title order={4}>Post Revolutionary France</Title>
									<Text size="sm" c="dimmed">
									  This was my first project in Web Development. While far from great, it shows where I started from, the mistakes I made, and the lessons I learned.
									</Text>
									<Group gap="xs">
										<Badge variant="light">HTML</Badge>
                    <Badge variant="light">CSS</Badge>
										<Badge variant="light">Cursor</Badge>
									</Group>
									<Anchor href="https://bantersage.github.io/dubh/" target="_blank" c="red" fw={600}>View Project →</Anchor>
								</Stack>
							</Card>

							<Card padding="lg" radius="md" withBorder className={classes.experienceCard}>
								<Card.Section>
									<img
										src={character}
										alt="Project Two"
										style={{ width: "100%", height: 200, objectFit: "cover" }}
									/>
								</Card.Section>
								<Stack gap="xs" mt="md">
									<Title order={4}>Character Analysis</Title>
									<Text size="sm" c="dimmed">
                    This was my second project in Web Development. It gives rough analyses of character traits for the main characters in the Thriller TV series "YOU".
										This project shows the leap my skills in Web Development made since the first one; implementing styles and modals.
									</Text>
									<Group gap="xs">
										<Badge variant="light">HTML</Badge>
                    <Badge variant="light">CSS</Badge>
										<Badge variant="light">Cursor</Badge>
									</Group>
									<Anchor href="https://bantersage.github.io/you/" target="_blank" c="red" fw={600}>View Project →</Anchor>
								</Stack>
							</Card>

							<Card padding="lg" radius="md" withBorder className={classes.experienceCard}>
								<Card.Section>
									<img
										src={storymap}
										alt="Project Three"
										style={{ width: "100%", height: 200, objectFit: "cover" }}
									/>
								</Card.Section>
								<Stack gap="xs" mt="md">
									<Title order={4}>Development Storymap</Title>
									<Text size="sm" c="dimmed">
                    In this project I created a storymap for the development site in Guelph at 115 Watson Parkway North. A combination of ArcGIS, Adobe Illustrator, and AutoCAD
                    were used to create the storymap.
									</Text>
									<Group gap="xs">
										<Badge variant="light">ArcGIS</Badge>
										<Badge variant="light">Adobe Illustrator</Badge>
										<Badge variant="light">AutoCAD</Badge>
									</Group>
									<Anchor href="https://storymaps.arcgis.com/stories/9ff40ac7d751405188fcaf4ddaac981c" target="_blank" c="red" fw={600}>View Project →</Anchor>
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
						<Title order={2} mb="xs" ta="center">Experience</Title>
						<Text mb="xl" maw={700} ta="center" c="dimmed">
							My professional journey and educational background that shaped my
							expertise in software development.
						</Text>

						<SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl" w="100%">
							{/* Work Experience Column */}
							<Stack gap="md">
								<Title order={3} ta="center" c="red">Work Experience</Title>

								<Card padding="lg" radius="md" withBorder className={classes.experienceCard}>
									<Group justify="space-between" align="flex-start" mb="xs">
										<div>
											<Title order={4}>Service Associate</Title>
											<Text size="sm" c="red" fw={600}>Walmart</Text>
										</div>
										<Text size="sm" c="dimmed">January 2022 - Present</Text>
									</Group>
									<Text size="sm" mb="sm">
									  Supported day-to-day store operations by assisting customers, maintaining organized workflows, training new associates, and ensuring tasks were completed accurately and efficiently.
									</Text>
									<Group gap="xs">
										<Badge variant="light">Customer Service</Badge>
										<Badge variant="light">Team Collaboration</Badge>
									</Group>
								</Card>

								<Card padding="lg" radius="md" withBorder className={classes.experienceCard}>
									<Group justify="space-between" align="flex-start" mb="xs">
										<div>
											<Title order={4}>Event Support & Technical Coordination</Title>
											<Text size="sm" c="red" fw={600}>Mohawk College</Text>
										</div>
										<Text size="sm" c="dimmed">January 2025 - April 2026</Text>
									</Group>
									<Text size="sm" mb="sm">
									  Supported the planning, technical setup, and operation of campus events, ensuring equipment and event logistics were ready, and events ran smoothly.
									</Text>
									<Group gap="xs">
                    <Badge variant="light">macOS</Badge>
                    <Badge variant="light">Windows</Badge>
										<Badge variant="light">Technical Support</Badge>
									</Group>
								</Card>
							</Stack>

							{/* Education Column */}
							<Stack gap="md">
								<Title order={3} ta="center" c="red">Education</Title>

								<Card padding="lg" radius="md" withBorder className={classes.experienceCard}>
									<Group justify="space-between" align="flex-start" mb="xs">
										<div>
											<Title order={4}>Urban & Regional Planning</Title>
											<Text size="sm" c="red" fw={600}>Mohawk College</Text>
										</div>
										<Text size="sm" c="dimmed">September 2023 - Present</Text>
									</Group>
									<Text size="sm">
                    Studying Urban Planning, which focuses on how cities and communities are designed, developed, and improved over time. My coursework covers everything from land use and transportation to housing and sustainability,
                    all centered on creating places that work well for the people who live in them.
                  </Text>
                  <Group gap="xs">
                      <Badge variant="light">AutoCAD</Badge>
                      <Badge variant="light">ArcGIS</Badge>
                      <Badge variant="light">Adobe Illustrator</Badge>
									</Group>
								</Card>
							</Stack>
						</SimpleGrid>
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
								href="mailto:kdunston07@gmail.com"
								radius="xl"
								size="md"
								color="red"
							>
								Send Email
							</Button>
							<Button
								className={classes.pulseButton}
								component="a"
								href="https://ca.linkedin.com/in/kyle-dunston-b1684a387"
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
		</>
	);
}
