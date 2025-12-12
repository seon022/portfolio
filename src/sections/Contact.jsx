import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
	return (
		<section id="contact" className="text-center mb-16">
			<div className="flex justify-center gap-6 mb-4">
				<a
					href="https://github.com/seon022"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:text-gray-900"
				>
					<Github size={24} />
				</a>
				<a
					href="https://www.linkedin.com/in/%EC%84%A0%EC%98%81-%EA%B0%95-4ab2822ba/"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:text-blue-700"
				>
					<Linkedin size={24} />
				</a>
			</div>

			<div className="flex justify-center mb-4">
				<a
					href="mailto:seon02d@gmail.com"
					className="flex items-center gap-2 hover:text-blue-600"
				>
					<Mail size={20} />
					seon02d@gmail.com
				</a>
			</div>

			<p className="text-sm text-gray-400">
				© {new Date().getFullYear()} Kang Seonyoung. All rights reserved.
			</p>
		</section>
	);
};

export default Contact;
