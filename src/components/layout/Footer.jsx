import React from "react";

const Footer = () => {
	return (
		<footer className="w-full flex justify-center py-6 mt-8 text-sm text-gray-400">
			© {new Date().getFullYear()} Kang Seonyoung. All rights reserved.
		</footer>
	);
};

export default Footer;
