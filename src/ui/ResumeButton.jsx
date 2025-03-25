function ResumeButton() {
	// Hardcode the absolute path
	const pdfUrl = 'https://Suleiman010.github.io/baraa-portfolio/Resume.pdf';

	return (
		<a
			href={pdfUrl}
			target="_blank"
			rel="noopener noreferrer"
			className="btn-hover-effect bg-transparent border-2 border-white hover:border-white text-white font-bold py-4 px-8 rounded-lg transition shadow-lg pulse"
		>
			View Resume
		</a>
	);
}

export default ResumeButton;
