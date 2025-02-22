import { motion } from 'framer-motion';
import WorkItem from './WorkItem';

import FastForward from '../Icons/FastForward';

const icon = <FastForward />;

const data = [
	{
		year: 2024,
		title: 'Front-End Developer',
		company: 'Blue360 Media',
		company_url: 'https://blue360media.com/',
		duration: 'Apr 2024 - Present',
		details: () => (
			<ul>
				<li>
					{icon} Redesign the e-commerce platform UI/UX, migrating from Magento
					to a modern stack (React, TypeScript, Tailwind CSS) to enhance mobile
					responsiveness, user accessibility, and customer retention
				</li>
				<li>
					{icon} Integrate Salesforce CRM into the new front-end, ensuring
					seamless synchronization of customer data across platforms,
					streamlining workflow efficiency, and enabling better customer
					insights for sales and support teams
				</li>
				<li>
					{icon} Partner with cross-functional teams to develop new interactive
					features, boosting customer satisfaction and refining order processing
					efficiency
				</li>
			</ul>
		),
	},
	{
		year: 2024,
		title: 'Software Engineer',
		company: 'Nexalure Technologies',
		company_url: 'https://nexalure.com/',
		duration: 'Jan 2024 - Apr 2024',
		details: () => (
			<ul>
				<li>
					{icon} Led the development of full-stack solutions using TypeScript,
					React, Redux, NextJS, Node, MongoDB, and SCSS, producing optimized web
					experiences for modern web browsers
				</li>
				<li>
					{icon} Collaborated in an international 9-member in Agile team,
					contributing to stand-ups, sprint planning, estimation, and
					retrospectives, resulting in an increase in team velocity and
					reduction in bug rates
				</li>
				{/* <li>
					{icon} Leverage Git for version control, resolving complex merge
					conflicts to ensure smooth and efficient team collaboration in a
					fast-paced development environment
				</li>
				<li>
					{icon} Actively participate in code reviews and conduct pair
					programming, leading to an improvement in code quality metrics
				</li> */}
				<li>
					{icon} Worked with the design team to craft pixel-perfect UI/UX
					enhancements
				</li>
			</ul>
		),
	},
	{
		year: 2020,
		title: 'Freelance Web Developer',
		company: 'Tokio Ramen',
		company_url: 'https://tokio-ramen.netlify.app/',
		duration: 'Mar 2020 - Dec 2023',
		details: () => (
			<ul>
				<li>
					{icon} Engineered and overhauled a front-end web application using
					JavaScript, Gatsby.js, GraphQL, Tailwind CSS, and Contentful, boosting
					website traffic and user engagement
				</li>
				<li>
					{icon} Revamped company's visual identity with a new logo, menus, and
					digital content to fulfill client’s business requirements, leading to
					an increase in brand recognition
				</li>
				<li>
					{icon} Proposed and implemented key solutions to website accessibility
					to ensure consistent user experience and customer satisfaction
				</li>
				{/* <li>
					{icon} Built and maintained relationships with English-speaking and
					Japanese-speaking customers through bilingual communication skills
				</li> */}
			</ul>
		),
	},
];

const Experience = () => {
	return (
		<section
			id='experience'
			className='container'
		>
			<motion.h2
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.4, delay: 0.5 }}
				viewport={{ once: true }}
			>
				Experience
			</motion.h2>
			{data.map((item, i) => (
				<WorkItem
					key={i}
					{...item}
				/>
			))}
		</section>
	);
};

export default Experience;
