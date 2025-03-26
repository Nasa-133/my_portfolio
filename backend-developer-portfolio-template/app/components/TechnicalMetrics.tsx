'use client';

import { motion } from 'framer-motion';

export default function TechnicalMetrics() {
	return (
		<section className="py-20 px-4 bg-gray-900/50">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
					Impact & Achievements
				</motion.h2>

				<div className="grid grid-cols-1 gap-12">
					{/* System Performance */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-green-400">System Performance</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
								<h4 className="text-lg font-semibold text-gray-300">API Gateway</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Optimized API endpoints</li>
									<li>• Studied API monitoring techniques</li>
									<li>• Conducted performance tests with 1000+ requests</li>
								</ul>
							</motion.div>
							<motion.div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
								<h4 className="text-lg font-semibold text-gray-300">Database Optimization</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Analyzed SQL query performance</li>
									<li>• Assisted in implementing indexing strategies</li>
									<li>• Helped reduce database load</li>
								</ul>
							</motion.div>
						</div>
					</div>

					{/* Security & Compliance */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-green-400">Security & Compliance</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
								<h4 className="text-lg font-semibold text-gray-300">Authentication & Authorization</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Implemented JWT-based authentication</li>
									<li>• Studied role-based access control (RBAC)</li>
									<li>• Assisted in securing API endpoints</li>
								</ul>
							</motion.div>
							<motion.div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
								<h4 className="text-lg font-semibold text-gray-300">Vulnerability Assessment</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Conducted basic security audits</li>
									<li>• Learned about common OWASP vulnerabilities</li>
									<li>• Assisted in patching security flaws</li>
								</ul>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
