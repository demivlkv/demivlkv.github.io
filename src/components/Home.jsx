import { motion } from 'framer-motion';
// import HyperLink from './HyperLink';
import Button from './Button';
import Greeting from './Greeting';

const Home = () => {
	return (
		<section
			id='main'
			className='max-w-screen-md m-auto px-8 w-full h-screen flex flex-col justify-center items-start'
		>
			<div className='intro'>
				<motion.h1
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.5 }}
					viewport={{ once: true }}
				>
					<Greeting />, I'm <span className='gradient'>Demi</span>.
				</motion.h1>
				<motion.h1
					className='pt-2'
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.75 }}
					viewport={{ once: true }}
				>
					I'm a <span className='gradient'>software engineer</span>.
				</motion.h1>
			</div>
			<motion.p
				className='py-4'
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 1.25 }}
				viewport={{ once: true }}
			>
				I am a full-stack software engineer living in Los Angeles with a passion
				for technologies. I enjoy creating and designing various projects, such
				as web applications, {/* <HyperLink> */}
				<a
					href='https://tokio-ramen.netlify.app/'
					target='_blank'
					className='home'
					aria-label='Visit Tokio Ramen!'
				>
					branding for local businesses
				</a>
				{/* </HyperLink> */}, and even {/* <HyperLink> */}
				<a
					href='https://cargocollective.com/demihayashi/Propagation'
					target='_blank'
					className='home'
					aria-label='Visit my artist website!'
				>
					sculptures
				</a>
				{/* </HyperLink> */}. At present, I provide top-tier web and software
				solutions at {/* <HyperLink> */}
				<a
					href='https://nexalure.com/'
					target='_blank'
					className='home'
					aria-label='Nexalure Technologies'
				>
					Nexalure Technologies
				</a>
				{/* </HyperLink> */}.
			</motion.p>
			<motion.div
				className='w-full flex items-center justify-between'
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 1.5 }}
				viewport={{ once: true }}
			>
				<a
					href='/Demi-Hayashi-CV.pdf'
					aria-label='View my resume'
				>
					<Button>Download CV</Button>
				</a>
			</motion.div>
		</section>
	);
};

export default Home;
