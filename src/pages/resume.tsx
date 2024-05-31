import React from 'react';
import { graphql } from 'gatsby';
import Head from '../components/Head';
import Layout from '../components/Layout';
import Stars from '../components/Stars';
import Content from '../components/Content';
import { TitlePageQueryData } from '../types';
import styled from 'styled-components';

const ResumeItemTitle = styled.h4`
	font-weight: 600;
`;

const ResumeItemHeader = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 0.5rem;
	font-size: 1.2rem;
	// small screen column, large screen row

	${(props) => props.theme.media.max.sm`
    flex-direction: column;
  `}
`;
const ResumeItem = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 1rem;
`;

const WorkExperience = () => {
	const workExperiences = [
		{
			position: 'Senior Full Stack Engineer',
			company: 'Coral Innovation GmbH',
			companyUrl: 'https://www.coral-innovation.de/',
			location: 'Remote',
			startDate: 'Dec 2023',
			endDate: 'Present',
			description: `- Led team improvements, making us work smarter and get better together.
- Made our coding 30% faster and more efficient by setting up coding standards, guidelines, and documentation. 
- Implemented and refined key features in the product with a high standard for code quality and serving as a model for best coding practices.`,
		},
		{
			position: 'Founder and CTO',
			company: 'MangoBeds',
			companyUrl: 'https://www.mangobeds.com/',
			location: 'Remote',
			startDate: 'March 2023',
			endDate: 'Present',
			description: `- Building the first booking engine for coliving spaces.
- Helping coliving spaces to save up to 30% in commissions.
- Increasing the occupancy rate of coliving spaces by 20%.
`,
		},
		{
			position: 'Co-Founder and CTO',
			company: 'Mapmelon',
			companyUrl: 'https://www.mapmelon.com/',
			location: 'Remote',
			startDate: 'Nov 2022',
			endDate: 'Present',
			description: `- Improve the lives of Digital Nomads and Remote Workers connecting over 10,000 users to authentic community-focused coliving spaces.
- Developed the platform from scratch, leading to a 40% increase in user engagement within the first 6 months.
- Engineered scalable architecture, ensuring 99.9% uptime and accommodating a 30% quarterly growth in traffic.`,
		},

		{
			position: 'Senior Full Stack Engineer',
			company: 'On Target AI',
			companyUrl: 'https://on-target.ai/',
			location: 'Remote',
			startDate: 'Jun 2023',
			endDate: 'Dec 2023',
			description: `- Crafted user interfaces that improved user experience scores by 35%.
- Implemented a scalable codebase, reducing bug reports by 50%.`,
		},
		{
			position: 'Full Stack Engineer',
			company: 'Flick',
			companyUrl: 'https://www.flick.social/',
			location: 'Remote',
			startDate: 'Nov 2021',
			endDate: 'Jun 2023',
			description: `- Integrated an AI Social Marketing Assistant, increasing user retention by 25%.
- Expanded platform to new social channels, contributing to a 30% growth in user base.`,
		},
		{
			position: 'Full Stack Engineer',
			company: 'One Beyond',
			companyUrl: 'https://www.one-beyond.com/',
			location: 'Remote',
			startDate: 'March 2020',
			endDate: 'Nov 2021',
			description: `- Designed a reusable ecommerce platform, leading to a 50% increase in client acquisition.
- Enhanced rich interfaces, enhancing customer satisfaction by 30%.
- Orchestrated K8s microservice clusters, reducing deployment times by 40%.
- Managed and Terraformed Azure Cloud infrastructure, cutting operational costs by 20%.`,
		},
		{
			position: 'Full Stack Engineer',
			company: '1millionbot',
			companyUrl: 'https://www.1millionbot.com/',
			location: 'Hybrid',
			startDate: 'Jan 2017',
			endDate: 'March 2020',
			description: `- Enhanced the company dashboard, speeding up chatbot training by 50%.
- Streamlined company's architecture integration into GCP, resulting in a 35% improvement in system reliability.`,
		},
	];

	return (
		<>
			{workExperiences.map((workExperience) => (
				<ResumeItem key={workExperience.company}>
					<ResumeItemHeader>
						<ResumeItemTitle>
							<div>
								<p
									style={{
										fontWeight: 500,
										margin: 0,
										fontSize: '1.2rem',
									}}
								>
									{workExperience.position}
								</p>
								<a
									href={workExperience.companyUrl}
									target="_blank"
									rel="noopener noreferrer"
								>
									{workExperience.company}
								</a>
							</div>
						</ResumeItemTitle>
						<div style={{ fontSize: '.9rem', marginTop: '.2rem' }}>
							<small>
								{workExperience.startDate} -{' '}
								{workExperience.endDate}
							</small>
						</div>
					</ResumeItemHeader>
					<p
						style={{
							whiteSpace: 'pre-wrap',
						}}
					>
						{workExperience.description}
					</p>
				</ResumeItem>
			))}
		</>
	);
};

const ProjectHighlights = () => {
	const projects = [
		{
			name: 'Mapmelon',
			year: '2022 - Present',
			url: 'https://www.mapmelon.com/',
			description:
				'The all-in-one app for nomad colivers. Discover, Connect, and Share with the Coliving Community.',
		},
		{
			name: 'BuildPublic',
			year: '2023',
			url: 'https://www.youtube.com/watch?v=KDDX1hn4x44',
			description:
				'Manage your social presence as a maker, with AI-powered build updates.',
		},
		{
			name: 'How to Live',
			year: '2021',
			url: 'https://reymon359.github.io/how-to-live/',
			description: 'A collection of life advices learned along the way.',
		},
	];

	return (
		<>
			{projects.map((project) => (
				<ResumeItem key={project.name}>
					<ResumeItemHeader>
						<ResumeItemTitle>
							<>
								<a
									href={project.url}
									target="_blank"
									rel="noopener noreferrer"
								>
									{project.name}
								</a>
							</>
						</ResumeItemTitle>
						<div>
							<small>{project.year}</small>
						</div>
					</ResumeItemHeader>
					<p style={{ marginTop: '.5rem', marginBottom: 0 }}>
						{project.description}
					</p>
				</ResumeItem>
			))}
		</>
	);
};

const QuoteContainer = styled.div`
	display: flex;
	gap: 2rem;
	margin-top: 1rem;
`;

const WhatOthersSay = () => {
	const quotes = [
		{
			text: `It was a pleasure collaborating with Ramon on the development of Flocus. His persistence, diligence, and reliability were instrumental in the success of our project. Every aspect of our work was handled with precision and care. He tackled challenges with a proactive mindset. Working with Ramon was not only professionally rewarding but also enjoyable due to his positive attitude and effective communication. I highly recommend Ramon to any team seeking a dedicated and dependable professional.`,
			author: 'Tobias Hug',
			image: '/images/resume/tobias.jpg',
			position: 'Founder of Flocus',
		},
		{
			text: "Working with Ramon was an absolute inspiration, and I know I'll carry the memory of our work together for years to come. From my perspective, he's a one-of-a-kind developer, defined by his meticulous attention to detail and a 'no problem is too complex' attitude. When I have the chance, I will definitely be working with him again!",
			author: 'Evan Seaward',
			image: '/images/resume/evan.jpg',
			position: 'Head of Engineering',
		},
		{
			text: `It was a pleasure working with Ramon on his project the Mapmelon App. Ramon is a skilled developer with a strong commitment to delivering exceptional user experiences. His growth mindset, focus on details and technical expertise make him an invaluable addition to any ambitious project. Apart from being a great developer, he is also a great person to work with. 

I recommend him for any project in need of a talented UX-focused developer. He's an asset you'll be glad to have on your team 🚀.`,
			author: 'Denisa Brichtova',
			image: '/images/resume/denisa.jpg',
			position: 'UI/UX Designer',
		},
		{
			text: `Since meeting Ramón at university, I've been able to watch him grow into the professional FullStack Software Engineer he is today. We got our first working experience together at 1millionbot, where his passion for software really takes off. 
      
Ramón takes software architecture seriously, always aiming for Clean Code, SOLID principles and good testing in his projects. His pragmatic approach not only leads to well-crafted solutions but also ensures that they are practical and effective. It's been great to both work and study alongside him, and it's one of the many reasons I value him as a teammate and a friend. For all these reasons, I truly recommend working with him.`,
			author: 'Pablo Company Ramírez',
			image: '/images/resume/pablo.jpg',
			position: 'Software Engineer',
		},
		{
			text: `I had the pleasure of bringing Ramon into our team as a front-end developer for the On-target AI tool for marketers, a decision influenced by his notable reputation within our shared professional circle. From the outset, Ramon stood out as an exceptionally responsive and reliable colleague. Although my direct collaboration with him was not extensive, his impact was unmistakable.

Ramon's approach to communication is a blend of clarity and accessibility, making complex technical discussions understandable and engaging. His responsiveness to tasks and inquiries, regardless of their complexity, significantly contributed to the smooth progression of our project. He has a knack for distilling complex front-end challenges into straightforward solutions, a skill invaluable in our fast-paced and dynamic environment.

What impresses me most about Ramon is his ability to maintain high productivity and quality of work while being approachable and supportive to the team. His technical skills are top-notch, but it's his collaborative spirit and effective communication that truly set him apart.

I wholeheartedly recommend Ramon to any team seeking a front-end developer who brings not only technical expertise but also a cooperative and proactive approach to their projects.`,
			author: 'Andreea Rusu',
			image: '/images/resume/andreea.jpg',
			position: 'Marketing Project Manager & Community Builder',
		},
		{
			text: `Building a product from scratch, refactoring an old Java API, migrating all the infrastructure to the cloud, and starting a new technology for the FE, all of this right after finishing the university, it is not easy. That was the challenge that I faced with Ramon in 1MillionBot, and it was an incredible journey. Ramon did not only deliver a great product, he also did it in a small amount of time. I’m lucky to have worked with Ramon during that time.`,
			author: 'Gonzalo Molina Gallego',
			image: '/images/resume/gonzalo.jpg',
			position: 'Forward Deployed Engineer @ Palantir',
		},
		{
			text: `Ramon is a remarkable software engineer with an unwavering dedication to his craft. During our time together at guidesmith/onebeyond, I witnessed his exceptional problem-solving skills, spanning both frontend and backend development. His ability to simplify code and create developer-friendly software stands out as a testament to his commitment. Ramon is not only a skilled developer but also a supportive team player, always willing to lend a hand. I enthusiastically recommend him as a valuable addition to any software team seeking a proficient and collaborative professional.`,
			author: 'Fran Palacios',
			image: '/images/resume/fran.jpg',
			position: 'Software Engineer at Lean Mind',
		},
		{
			text: `I am delighted to recommend Ramón as a talented Full Stack developer with a strong focus on the front end, particularly with React. I've had the privilege of working alongside Ramón in Deribe and his ability to design and build captivating user interfaces is impressive.

  Ramón demonstrates a deep understanding of frontend technologies, and his expertise with React helped Deribe to grow quickly. His knack for transforming ideas into visually appealing and functional products is unparalleled. Moreover, he was always abreast of the latest trends and best practices in front-end development, significantly contributing to the quality and efficiency of our work.

  Beyond his technical skills, Ramón is a proactive, results-oriented collaborator. He is always willing to take on new challenges and bring a creative mindset to any task he undertakes. His positive attitude and ability to work well in a team make collaborating with him a pleasure.

  In summary, I would wholeheartedly recommend Ramón to any team seeking a Full Stack developer with a strong emphasis on the front end, especially those working with React. His experience and skills are a valuable asset, and I am confident he will continue to excel in any project he undertakes.`,
			author: 'Quico Llinares Llorens',
			image: '/images/resume/quico.jpg',
			position: 'Senior Software Engineer',
		},
	];

	return (
		<>
			{quotes.map((quote) => (
				<QuoteContainer key={quote.author} className="no-print">
					<img
						src={quote.image}
						alt={quote.author}
						style={{ borderRadius: '50%' }}
						width="60"
						height="60"
					/>
					<p style={{ whiteSpace: 'pre-wrap', marginTop: 0 }}>
						<em>“ {quote.text} ”</em>
						<br /> —{' '}
						<strong>
							{quote.author}, {quote.position}
						</strong>
					</p>
				</QuoteContainer>
			))}
		</>
	);
};

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;

	h3 {
		font-weight: 700;
		margin-top: 3rem;
	}

	p {
		line-height: 1.4;
		font-size: 1.1rem;
	}

	.print {
		display: none;
	}

	@page {
		margin: 0;
	}
	@media print {
		color: black !important;

		a {
			color: black !important;
			border-bottom: 1px solid black;
		}

		.print {
			display: block;
		}

		.no-print {
			display: none;
		}
	}
`;

const Resume: React.FC = () => {
	return (
		<Wrapper>
			{/* // DIRECTION row in desktop and column in mobile */}
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<div>
					<h2 style={{ fontWeight: 700, marginTop: 0 }}>
						Ramón Morcillo&nbsp;
						<a
							style={{ fontWeight: 500, fontSize: '1.4rem' }}
							className="no-print"
							onClick={() => window.print()}
						>
							(PDF)
						</a>
					</h2>
					<p style={{ marginTop: 0 }}>
						Senior Full Stack Engineer, CTO, and Founder
					</p>
					<p style={{ marginTop: 0, paddingRight: '1rem' }}>
						Problem solver and experienced maker with a passion for
						excellence and pragmatism. I create captivating software
						experiences that bring joy to people's lives. I also
						guide individuals and teams through personalized{' '}
						<a
							href="https://coach.ramonmorcillo.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							coaching and mentoring services
						</a>
						.
					</p>
				</div>
				<div style={{ marginTop: '.3rem', whiteSpace: 'nowrap' }}>
					<p style={{ margin: '.3rem 0', fontSize: '14px' }}>
						📩{' '}
						<a
							href="mailto:hey@ramonmorcillo.com?subject=Hi%20there!"
							rel="noopener"
						>
							hey@ramonmorcillo.com
						</a>
					</p>
					<p style={{ margin: '.3rem 0', fontSize: '14px' }}>
						🌍{' '}
						<a
							href="https://www.ramonmorcillo.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							ramonmorcillo.com
						</a>
					</p>
					{/* // linkedin */}
					<p style={{ margin: '.3rem 0', fontSize: '14px' }}>
						👔{' '}
						<a
							href="https://www.linkedin.com/in/ramon-morcillo/"
							target="_blank"
							rel="noopener noreferrer"
						>
							LinkedIn
						</a>
					</p>
					<p
						style={{ margin: '.3rem 0', fontSize: '14px' }}
						className="print"
					>
						📄{' '}
						<a
							href="https://www.ramonmorcillo.com/resume"
							target="_blank"
							rel="noopener noreferrer"
						>
							Live version
						</a>
					</p>
				</div>
			</div>

			<h3>Skills</h3>

			<p>
				<strong>Front-End:</strong> React, Next.js, Tailwind, Zod,
				Chakra, Storybook, Jest, Cypress, tRPC, React Query
				<br />
				<strong>Back-End:</strong> Node.js, GraphQL, tRPC, serverless,
				Prisma, PostgreSQL, MongoDB, AWS, Azure, Docker, Kubernetes{' '}
				<br />
				<strong>Soft:</strong> Strong communication, Asking Questions,
				Transparency, Open minded <br />
			</p>

			<h3>Work Experience</h3>

			<WorkExperience />

			<h3>
				Project Highlights{' '}
				<small>
					<a
						href="https://www.ramonmorcillo.com/projects"
						target="_blank"
						rel="noopener noreferrer"
					>
						(see more)
					</a>
				</small>
			</h3>

			<ProjectHighlights />

			<h3> Education and languages </h3>
			<p>
				Degree in Software Engineering - Alicante University, 2013{' '}
				<br />
				Master in Web Engineering - Madrid Polytechnic University, 2019
				<br />
				<br />I speak and write 🇪🇸 Spanish (native), 🇬🇧 English (fluent)
			</p>

			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'baseline',
				}}
			>
				<h3 id="what-others-say"> What others say about me </h3>
				<a
					className="no-print"
					href="https://www.linkedin.com/recs/give/?senderId=ramon-morcillo"
					target="_blank"
					rel="noopener noreferrer"
				>
					add my review
				</a>
			</div>
			<p className="print">
				Check what others say about me in{' '}
				<a
					href="https://www.ramonmorcillo.com/resume/#what-others-say"
					target="_blank"
					rel="noopener noreferrer"
				>
					the resume live version
				</a>
			</p>

			<WhatOthersSay />
		</Wrapper>
	);
};

interface ResumePageProps {
	readonly data: TitlePageQueryData;
}

const ResumePage: React.FC<ResumePageProps> = ({ data }) => {
	const siteTitle = data.site.siteMetadata.title;

	return (
		<Layout title={siteTitle}>
			<Head
				title="Resume"
				image="/images/ramon_morcillo_meta_image.jpg"
				keywords={[
					`blog`,
					`resume`,
					`typescript`,
					`javascript`,
					`portfolio`,
					`react`,
				]}
			/>
			<Stars
				normalVelocity={0.0001}
				containerOpacity={0.3}
				addEventListeners={false}
			/>

			<Content>
				<Resume />
			</Content>
		</Layout>
	);
};

export const pageQuery = graphql`
	query {
		site {
			...SiteTitle
		}
	}
`;

export default ResumePage;
