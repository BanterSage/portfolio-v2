import {
	Box,
	Container,
	Title,
	Text,
	Group,
	Badge,
	Stack,
	Avatar,
	Anchor,
	Button,
	Divider,
	Paper,
	Card,
	SimpleGrid,
} from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import classes from "./style.module.scss";
import franceBanner from "../../assets/images/france.png";
import storymap from "../../assets/images/storymap.jpg";
import character from "../../assets/images/character.jpg";
import face from "../../assets/images/face.jpeg";

const SKILL_ROWS = [
	{
		title: "Frontend Development",
		tags: ["React", "TypeScript", "Mantine", "HTML", "CSS"],
	},
	{
		title: "Video Editing",
		tags: ["Premiere Pro", "Capcut", "After Effects"],
	},
	{
		title: "Graphic Design",
		tags: ["Adobe Photoshop", "Adobe Illustrator", "Canva"],
	},
	{
		title: "Urban Design",
		tags: ["AutoCAD", "ArcGIS"],
	},
	{
		title: "Generative AI",
		tags: ["Claude", "ChatGPT", "Gemini", "Grok"],
	},
	{
		title: "Social Media",
		tags: ["Youtube", "Instagram", "Twitter/X", "TikTok", "Discord"],
	},
	{
		title: "Administration",
		tags: [
			"Administrative Support",
			"Data Entry",
			"Record Management",
			"Document Preparation",
		],
	},
	{
		title: "MS Office",
		tags: [
			"Microsoft Word",
			"Microsoft Excel",
			"Microsoft PowerPoint",
			"Microsoft Outlook",
		],
	},
];

const PROJECTS = [
	{
		title: "Post Revolutionary France",
		image: franceBanner,
		description:
			"This was my first project in Web Development. While far from great, it shows where I started from, the mistakes I made, and the lessons I learned.",
		tags: ["HTML", "CSS", "Cursor"],
		href: "https://bantersage.github.io/dubh/",
	},
	{
		title: "Character Analysis",
		image: character,
		description:
			'This was my second project in Web Development. It gives rough analyses of character traits for the main characters in the Thriller TV series "YOU". This project shows the leap my skills in Web Development made since the first one; implementing styles and modals.',
		tags: ["HTML", "CSS", "Cursor"],
		href: "https://bantersage.github.io/you/",
	},
	{
		title: "Development Storymap",
		image: storymap,
		description:
			"In this project I created a storymap for the development site in Guelph at 115 Watson Parkway North. A combination of ArcGIS, Adobe Illustrator, and AutoCAD were used to create the storymap.",
		tags: ["ArcGIS", "Adobe Illustrator", "AutoCAD"],
		href: "https://storymaps.arcgis.com/stories/9ff40ac7d751405188fcaf4ddaac981c",
	},
];

// Mobile-specific layout rules — forces a clean single-column reading order
// on small screens instead of relying on flex-wrap to land somewhere
// reasonable by accident (project rows always show image-then-text in the
// same order, buttons go full-width, experience dates sit above their entry).
const RESPONSIVE_STYLES = `
	.kd-hero-top {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 24px;
	}
	.kd-hero-actions {
		display: flex;
		flex-direction: column;
		gap: 8px;
		width: 100%;
	}
	.kd-hero-actions > button {
		width: 100%;
	}
	@media (min-width: 768px) {
		.kd-hero-top {
			flex-direction: row;
			justify-content: space-between;
		}
		.kd-hero-actions {
			flex-direction: row;
			width: auto;
		}
		.kd-hero-actions > button {
			width: auto;
		}
	}

	.kd-project-row {
		display: flex;
		flex-direction: column;
	}
	@media (min-width: 768px) {
		.kd-project-row {
			flex-direction: row;
		}
		.kd-project-row--reverse {
			flex-direction: row-reverse;
		}
	}

	.kd-exp-row {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
	.kd-exp-content {
		width: 100%;
	}
	@media (min-width: 768px) {
		.kd-exp-row {
			flex-direction: row;
			justify-content: space-between;
			align-items: flex-start;
			gap: 24px;
		}
		.kd-exp-date {
			min-width: 220px;
			flex-shrink: 0;
		}
		.kd-exp-content {
			flex: 1;
			min-width: 0;
		}
	}

	.kd-contact-actions {
		display: flex;
		flex-direction: column;
		gap: 12px;
		width: 100%;
	}
	.kd-contact-actions > a {
		width: 100%;
		text-align: center;
	}
	@media (min-width: 480px) {
		.kd-contact-actions {
			flex-direction: row;
			width: auto;
		}
		.kd-contact-actions > a {
			width: auto;
		}
	}
`;

export function Page() {
	const scrollToSection = (id: string) => {
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<>
			<style>{RESPONSIVE_STYLES}</style>

			{/* Hero — oversized name treatment instead of a centered avatar+title stack */}
			<Box id="hero" className={classes.sectionLight}>
				<Container size="lg" py={{ base: 56, sm: 140 }}>
					<div className="kd-hero-top" style={{ marginBottom: 48 }}>
						<Avatar size={72} radius={100} src={face} alt="Kyle Dunston" />
						<div className="kd-hero-actions">
							<Button
								className={classes.pulseButton}
								radius="sm"
								size="sm"
								color="violet"
								rightSection={<IconArrowRight size={16} />}
								onClick={() => scrollToSection("work")}
							>
								View My Work
							</Button>
							<Button
								className={classes.pulseButton}
								radius="sm"
								size="sm"
								variant="outline"
								color="violet"
								onClick={() => scrollToSection("contact")}
							>
								Get In Touch
							</Button>
						</div>
					</div>

					<Title
						order={1}
						fz={{ base: 38, xs: 44, sm: 96 }}
						lh={1.1}
						fw={700}
						maw={900}
					>
						Hey, I'm Kyle.
					</Title>
					<Text size="xl" maw={620} c="dimmed" mt="lg">
						I'm studying Urban Planning, and outside of that I've been
						getting into web development and video editing. Always up for
						learning something new and building things I enjoy.
					</Text>
				</Container>
			</Box>

			{/* About — pull-quote style intro instead of centered paragraphs */}
			<Box id="about" className={classes.sectionDark}>
				<Container size="lg" py={{ base: 64, sm: 100 }}>
					<Text fz={{ base: 22, sm: 34 }} fw={500} lh={1.4} maw={800}>
						My name is Kyle Dunston and I am a student at Mohawk College
						based in Hamilton, ON, currently pursuing a Diploma in Urban &
						Regional Planning.
					</Text>
					<Text size="lg" c="dimmed" maw={700} mt="xl">
						I typically spend my time learning web development, building
						websites, learning history, playing video games, or doing DIY
						projects at home.
					</Text>
				</Container>
			</Box>

			{/* Skills — clean full-width list instead of a card grid */}
			<Box id="skills" className={classes.sectionLight}>
				<Container size="lg" py={{ base: 64, sm: 100 }}>
					<Title order={2} mb="xs">
						Skills & Expertise
					</Title>
					<Text mb="xl" maw={700} c="dimmed">
						A rundown of the tools and skills I actually rely on day to day.
					</Text>

					<SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
						{SKILL_ROWS.map((skill) => (
							<Paper
								key={skill.title}
								p="lg"
								radius="sm"
								className={classes.skillCard}
								style={{
									borderLeft: "3px solid var(--mantine-color-violet-6)",
									transition: "transform 0.15s ease, box-shadow 0.15s ease",
								}}
							>
								<Text fw={700} size="lg" mb="sm">
									{skill.title}
								</Text>
								<Group gap="xs">
									{skill.tags.map((tag) => (
										<Badge key={tag} variant="outline" color="violet">
											{tag}
										</Badge>
									))}
								</Group>
							</Paper>
						))}
					</SimpleGrid>
				</Container>
			</Box>

			{/* Projects — alternating full-width rows instead of a card grid */}
			<Box id="work" className={classes.sectionDark}>
				<Container size="lg" py={{ base: 64, sm: 100 }}>
					<Title order={2} mb="xs">
						Featured Projects
					</Title>
					<Text mb={{ base: 32, sm: 60 }} maw={700} c="dimmed">
						A handful of things I've built that I'd happily show off to
						anyone who asks.
					</Text>

					<Stack gap="xl">
						{PROJECTS.map((project, i) => (
							<Card
								key={project.title}
								padding={0}
								radius="sm"
								withBorder
								className={classes.experienceCard}
								style={{
									borderTop: "3px solid var(--mantine-color-violet-6)",
									overflow: "hidden",
								}}
							>
								<div
									className={`kd-project-row${
										i % 2 === 1 ? " kd-project-row--reverse" : ""
									}`}
								>
									<Box style={{ flex: "1 1 320px" }}>
										<img
											src={project.image}
											alt={project.title}
											style={{
												width: "100%",
												height: "100%",
												minHeight: 220,
												objectFit: "cover",
												display: "block",
											}}
										/>
									</Box>
									<Stack
										style={{ flex: "1 1 320px" }}
										gap="sm"
										p={{ base: "lg", sm: "xl" }}
										justify="center"
									>
										<Text c="violet" fw={700} size="sm" tt="uppercase">
											Project {String(i + 1).padStart(2, "0")}
										</Text>
										<Title order={3}>{project.title}</Title>
										<Text c="dimmed">{project.description}</Text>
										<Group gap="xs" mt="xs">
											{project.tags.map((tag) => (
												<Badge key={tag} variant="outline" color="violet">
													{tag}
												</Badge>
											))}
										</Group>
										<Anchor
											href={project.href}
											target="_blank"
											c="violet"
											fw={600}
											mt="sm"
										>
											View Project →
										</Anchor>
									</Stack>
								</div>
							</Card>
						))}
					</Stack>
				</Container>
			</Box>

			{/* Experience — simple list, dates as the anchor, instead of two card columns */}
			<Box id="experience" className={classes.sectionLight}>
				<Container size="lg" py={{ base: 64, sm: 100 }}>
					<Title order={2} mb="xs">
						Experience
					</Title>
					<Text mb={{ base: 32, sm: 60 }} maw={700} c="dimmed">
						Where I've worked, what I've studied, and how each one pushed my
						skills forward.
					</Text>

					<Stack gap={0}>
						<Box py="xl">
							<div className="kd-exp-row">
								<Text className="kd-exp-date" fw={700} c="violet">
									January 2022 - Present
								</Text>
								<div className="kd-exp-content">
									<Title order={4}>Service Associate</Title>
									<Text size="sm" c="dimmed" mb="sm">
										Walmart
									</Text>
									<Text size="sm" mb="sm">
										Supported day-to-day store operations by assisting
										customers, maintaining organized workflows, training new
										associates, and ensuring tasks were completed accurately
										and efficiently.
									</Text>
									<Group gap="xs">
										<Badge variant="light">Customer Service</Badge>
										<Badge variant="light">Team Collaboration</Badge>
									</Group>
								</div>
							</div>
						</Box>
						<Divider />

						<Box py="xl">
							<div className="kd-exp-row">
								<Text className="kd-exp-date" fw={700} c="violet">
									January 2025 - April 2026
								</Text>
								<div className="kd-exp-content">
									<Title order={4}>
										Event Support & Technical Coordination
									</Title>
									<Text size="sm" c="dimmed" mb="sm">
										Mohawk College
									</Text>
									<Text size="sm" mb="sm">
										Supported the planning, technical setup, and operation of
										campus events, ensuring equipment and event logistics were
										ready, and events ran smoothly.
									</Text>
									<Group gap="xs">
										<Badge variant="light">macOS</Badge>
										<Badge variant="light">Windows</Badge>
										<Badge variant="light">Technical Support</Badge>
									</Group>
								</div>
							</div>
						</Box>
						<Divider />

						<Box py="xl">
							<div className="kd-exp-row">
								<Text className="kd-exp-date" fw={700} c="violet">
									September 2023 - Present
								</Text>
								<div className="kd-exp-content">
									<Title order={4}>Urban & Regional Planning</Title>
									<Text size="sm" c="dimmed" mb="sm">
										Mohawk College
									</Text>
									<Text size="sm" mb="sm">
										Studying Urban Planning, which focuses on how cities and
										communities are designed, developed, and improved over
										time. My coursework covers everything from land use and
										transportation to housing and sustainability, all centered
										on creating places that work well for the people who live
										in them.
									</Text>
									<Group gap="xs">
										<Badge variant="light">AutoCAD</Badge>
										<Badge variant="light">ArcGIS</Badge>
										<Badge variant="light">Adobe Illustrator</Badge>
									</Group>
								</div>
							</div>
						</Box>
					</Stack>
				</Container>
			</Box>

			{/* Contact — big statement instead of a centered card */}
			<Box id="contact" className={classes.sectionDark}>
				<Container size="lg" py={{ base: 72, sm: 140 }}>
					<Title order={2} fz={{ base: 32, sm: 56 }} maw={700} mb="lg">
						Let's work together.
					</Title>
					<Text size="lg" c="dimmed" maw={600} mb={{ base: 32, sm: 50 }}>
						New projects and unexpected opportunities are exactly what I'm
						looking for. Drop a line, ask a question, or just say hi — I read
						everything and I'll write back.
					</Text>

					<div className="kd-contact-actions">
						<Button
							className={classes.pulseButton}
							component="a"
							href="mailto:kdunston07@gmail.com"
							radius="sm"
							size="md"
							color="violet"
						>
							Send Email
						</Button>
						<Button
							className={classes.pulseButton}
							component="a"
							href="https://ca.linkedin.com/in/kyle-dunston-b1684a387"
							target="_blank"
							rel="noreferrer"
							radius="sm"
							size="md"
							variant="outline"
							color="violet"
						>
							Connect
						</Button>
					</div>
				</Container>
			</Box>

			<Box className={classes.sectionLight} py="md">
				<Container size="lg">
					<Text size="sm" ta="center" c="dimmed">
						© 2026 Kyle Dunston - Built and designed by me
					</Text>
				</Container>
			</Box>
		</>
	);
}
