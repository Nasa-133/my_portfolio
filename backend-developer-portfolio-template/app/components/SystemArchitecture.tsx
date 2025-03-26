'use client';

import { motion } from 'framer-motion';

export default function SystemArchitecture() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
					System Architecture & Projects
				</motion.h2>

				<div className="grid grid-cols-1 gap-8">
					{[
						{
							title: 'Scalable Backend with FastAPI & PostgreSQL',
							description: 'Developed a high-performance backend handling thousands of requests per second with optimized database queries.',
							details: [
								'Implemented RESTful APIs with FastAPI',
								'Optimized PostgreSQL queries for better performance',
								'Integrated Redis for caching, reducing response times by 50%',
								'Ensured security with JWT authentication and role-based access control',
							],
							tech: ['FastAPI', 'PostgreSQL', 'Redis', 'JWT', 'Docker'],
						},
						{
							title: 'E-commerce System with Django & MySQL',
							description: 'Built a scalable e-commerce platform supporting secure payments and real-time order tracking.',
							details: [
								'Developed with Django and MySQL for scalable data storage',
								'Integrated Stripe API for secure payments',
								'Implemented user authentication with Django Allauth',
								'Deployed on AWS using EC2 and S3 for media storage',
							],
							tech: ['Django', 'MySQL', 'AWS EC2', 'S3', 'Stripe API'],
						},
						{
							title: 'Interactive Portfolio with React & Tailwind',
							description: 'Created a personal portfolio website with modern UI/UX and smooth animations.',
							details: [
								'Designed responsive UI with HTML, CSS, and Tailwind CSS',
								'Added dynamic content using React and Next.js',
								'Optimized performance with lazy loading and image optimization',
								'Deployed using Vercel for fast global access',
							],
							tech: ['React', 'Next.js', 'Tailwind CSS', 'Vercel'],
						},
					].map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800"
						>
							<h3 className="text-2xl font-bold mb-4">{project.title}</h3>
							<p className="text-gray-400 mb-6">{project.description}</p>
							<div className="mb-6">
								<h4 className="text-lg font-semibold mb-2">Key Achievements:</h4>
								<ul className="list-disc list-inside space-y-2 text-gray-300">
									{project.details.map((detail, i) => (
										<li key={i}>{detail}</li>
									))}
								</ul>
							</div>
							<div className="flex flex-wrap gap-2">
								{project.tech.map((tech, i) => (
									<span key={i} className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
										{tech}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
