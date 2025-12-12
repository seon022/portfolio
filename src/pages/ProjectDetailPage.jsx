import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Footer from "@layout/Footer";
import { projects } from "@data/projects";

function ProjectDetailPage() {
	const { projectId } = useParams();
	const navigate = useNavigate();

	const project = projects.find((p) => p.id === projectId);

	useEffect(() => {
		window.scrollTo(0, 0);
		if (!project) navigate("/");
	}, [project, navigate]);

	if (!project) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<p>Loading...</p>
			</div>
		);
	}

	return (
		<>
			<main className="min-h-screen py-12">
				<div className="max-w-4xl mx-auto px-4 space-y-12">
					{/* Back Button */}
					<button
						onClick={() => navigate(-1)}
						className="flex items-center gap-2 mb-8 hover:text-gray-900 dark:hover:text-blue-500 transition cursor-pointer"
					>
						<svg
							className="w-5 h-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M10 19l-7-7m0 0l7-7m-7 7h18"
							/>
						</svg>
						<span className="text-sm font-medium">Back to Projects</span>
					</button>

					{/* Header */}
					<header className="space-y-4">
						<h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
							{project.title}
						</h1>

						<div className="flex flex-wrap gap-3 text-sm mt-2">
							<span className="px-3 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-semibold">
								📅 기간: {project.period}
							</span>
							<span className="px-3 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-semibold">
								👥 인원: {project.detail.members}명
							</span>
							<span className="px-3 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-semibold">
								🎯 역할: {project.role}
							</span>
						</div>

						<p className="text-lg mt-2 leading-relaxed">
							{project.description}
						</p>

						{/* Buttons */}
						<div className="flex gap-3 mt-4">
							{project.github && (
								<a
									href={project.github}
									target="_blank"
									rel="noopener noreferrer"
									className="px-5 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
								>
									GitHub
								</a>
							)}

							{project.demo && (
								<a
									href={project.demo}
									target="_blank"
									rel="noopener noreferrer"
									className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 transition"
								>
									Live Demo
								</a>
							)}
						</div>
					</header>

					{project.imageList && (
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							{project.imageList.map((src, idx) => (
								<div
									key={idx}
									className="w-full h-auto overflow-hidden rounded-lg shadow"
								>
									<img
										src={src}
										alt={`${project.title}-${idx}`}
										className="w-full h-full object-contain object-cover"
									/>
								</div>
							))}
						</div>
					)}

					{/* Tech Stack */}
					<section>
						<h2 className="section-title mb-4">Tech Stack</h2>
						<div className="flex flex-wrap gap-2">
							{project.tags?.map((tag) => (
								<span
									key={tag}
									className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-sm"
								>
									{tag}
								</span>
							))}
						</div>
					</section>

					{/* Detail Section */}
					<section className="space-y-12 leading-relaxed">
						{/* Overview */}
						<div>
							<h2 className="section-title mb-2">프로젝트 개요</h2>
							<p>{project.detail.overview}</p>
						</div>

						{/* Contributions */}
						<div>
							<h2 className="section-title mb-2">주요 기여</h2>
							<ul className="list-disc pl-5 space-y-2">
								{project.detail.contributions.map((item, idx) => (
									<li key={idx}>{item}</li>
								))}
							</ul>
						</div>

						{/* Tech Decisions */}
						<div>
							<h2 className="section-title mb-2">기술적 선택</h2>
							<ul className="list-disc pl-5 space-y-2">
								{project.detail.extras.techDecisions.map((item, idx) => (
									<li key={idx}>{item}</li>
								))}
							</ul>
						</div>

						{/* Problem Solving */}
						<div>
							<h2 className="section-title mb-2">문제 해결 과정</h2>

							<div className="space-y-6">
								{project.detail.extras.problemSolving.map((entry, idx) => (
									<div
										key={idx}
										className="p-5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm"
									>
										<p className="font-bold text-lg">
											⚠️ 문제:{" "}
											<span className="font-medium">{entry.problem}</span>
										</p>

										<p className="mt-2">
											✅ <span className="font-semibold">해결:</span>{" "}
											{entry.solution}
										</p>

										{entry.result && (
											<p className="mt-2 text-green-600 dark:text-green-400">
												⭐ <span className="font-semibold">결과:</span>{" "}
												{entry.result}
											</p>
										)}
									</div>
								))}
							</div>
						</div>
					</section>
				</div>
			</main>

			<Footer />
		</>
	);
}

export default ProjectDetailPage;
