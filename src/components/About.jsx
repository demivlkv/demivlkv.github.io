import { motion } from 'framer-motion';
import AboutImg from '../assets/me.webp';
import FastForward from './Icons/FastForward';

const About = () => {
	const icon = <FastForward />;

	return (
		<section
			id='about'
			className='container'
		>
			<motion.h2
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.4, delay: 0.5 }}
				viewport={{ once: true }}
			>
				About
			</motion.h2>
			<motion.div
				className='w-full flex flex-col md:flex-row justify-center items-center'
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.4, delay: 0.75 }}
				viewport={{ once: true }}
			>
				<div className='flex justify-center w-1/2 md:w-full pb-8 md:pr-12 md:pb-0 opacity-60 hover:opacity-100  transition-all ease-in duration-300'>
					<img
						src={AboutImg}
						className='shadow-lg rounded-full'
						alt="Hi, I'm Demi!"
					/>
				</div>
				<div>
					<p className='mb-5'>
						My interest in coding began back in the early 2000s, when Geocities
						and MySpace were popular. I never thought that customizing a MySpace
						page would lead to teaching myself HTML, CSS, JavaScript, PHP, and
						b2/Greymatter/WordPress just to put together a blog. This inspired
						me to major in Fine Arts at the University of Florida, where I
						expanded my knowledge in graphic design, typography, color theory,
						digital imaging, and technology in art.
					</p>
					<p className='mb-5'>
						In my technical career, I have helped a launch a{' '}
						<a
							href='https://tokio-ramen.netlify.app/'
							target='_blank'
							className='about'
							aria-label='Visit Tokio Ramen!'
						>
							local business
						</a>{' '}
						from the ground up, supported a{' '}
						<a
							href='https://nexalure.com/'
							target='_blank'
							className='about'
							aria-label='Nexalure Technologies'
						>
							startup
						</a>
						, and am currently contributing to a national{' '}
						<a
							href='https://blue360media.com/'
							target='_blank'
							className='about'
							aria-label='Blue360 Media'
						>
							book publishing
						</a>{' '}
						company.
					</p>
					<p>
						When I'm not on my computer, I'm most likely traveling the world,
						playing video games, hiking, watching true-crime documentaries, or
						learning new languages like Java and Russian. :3
					</p>
				</div>
			</motion.div>

			<motion.h2
				className='mt-12'
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.4, delay: 1 }}
				viewport={{ once: true }}
			>
				Technical Skills
			</motion.h2>
			<motion.div
				className='w-full sm:w-11/12 mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4'
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.4, delay: 1.25 }}
				viewport={{ once: true }}
			>
				<div className='tech-list leading-loose'>
					<h3 className="font-['Source_Code_Pro'] font-semibold text-lg md:text-xl tracking-tighter">
						Languages
					</h3>
					<p>{icon} JavaScript (ES6)</p>
					<p>{icon} TypeScript</p>
					<p>{icon} HTML5</p>
					<p>{icon} CSS3</p>
				</div>
				<div className='tech-list leading-loose'>
					<h3 className="block font-['Source_Code_Pro'] font-semibold text-lg md:text-xl tracking-tighter">
						Technologies
					</h3>
					<p>{icon} ReactJS + React Native</p>
					<p>{icon} NextJS</p>
					<p>{icon} Redux</p>
					<p>{icon} NodeJS</p>
					<p>{icon} REST APIs</p>
					<p>{icon} GraphQL</p>
				</div>
				<div className='tech-list leading-loose'>
					<h3 className="block font-['Source_Code_Pro'] font-semibold text-lg md:text-xl tracking-tighter">
						Databases
					</h3>
					<p>{icon} MySQL</p>
					<p>{icon} MongoDB</p>
				</div>
				<div className='tech-list leading-loose'>
					<h3 className="block font-['Source_Code_Pro'] font-semibold text-lg md:text-xl tracking-tighter">
						Tools
					</h3>
					<p>{icon} Git + GitHub</p>
					<p>{icon} Heroku</p>
					<p>{icon} Chrome Dev Tools</p>
					<p>{icon} Expo</p>
					<p>{icon} Photoshop</p>
				</div>
			</motion.div>
		</section>
	);
};

export default About;
