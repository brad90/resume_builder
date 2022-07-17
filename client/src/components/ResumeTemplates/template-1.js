import React from "react";

export default function Template1({ resumeState }) {
	let workOptions = [
		{
			title: "hello",
			dateFrom: "2020",
			dateTo: "2021",
			blob: "meh",
			institute: "University",
		},
		{
			title: "hello",
			dateFrom: "2020",
			dateTo: "2021",
			blob: "meh",
			institute: "University",
		},
	];

	let educationOptions = [
		{
			title: "hello",
			dateFrom: "2020",
			dateTo: "2021",
			blob: "meh",
			institute: "University",
		},
		{
			title: "hello",
			dateFrom: "2020",
			dateTo: "2021",
			blob: "meh",
			institute: "University",
		},
	];

	if (resumeState && resumeState.experience.length) {
		workOptions = resumeState.experience;
	}

	if (resumeState && resumeState.education.length) {
		educationOptions = resumeState.education;
	}

	return (
		<div className="bg-white inline w-[565px] h-[782px] p-10 shadow-lg">
			<div id="resume-header" className="w-full flex border-b-2 border-b-black pb-3 mb-10">
				<div className="w-1/2 inline text-start">
					<strong>
						<h3 className={`text-[24px] leading-7 ${resumeState?.firstname ? "text-black" : "text-slate-400"}`}>{resumeState?.firstname || "Daniel"}</h3>
					</strong>
					<strong>
						<h3 className={`text-[24px] leading-7 ${resumeState?.lastname ? "text-black" : "text-slate-400"}`}>{resumeState?.lastname || "Cooper"}</h3>
					</strong>
					<h2 className={`text-[10px] leading-7 ${resumeState?.jobtitle ? "text-black" : "text-slate-400"}`}>{resumeState?.jobtitle || "Software Dev"}</h2>
				</div>
				<div className="w-1/2 text-end">
					<p className={`text-[8px] ${resumeState?.email ? "text-black" : "text-slate-400"}`}>Something</p>
					<p className={`text-[8px] ${resumeState?.email ? "text-black" : "text-slate-400"}`}>Something</p>
					<p className={`text-[8px] ${resumeState?.email ? "text-black" : "text-slate-400"}`}>
						<strong>e: </strong>
						{resumeState?.email || "d.b.cooper@gmail.com"}
					</p>
					<p className={`text-[8px]  ${resumeState?.phone ? "text-black" : "text-slate-400"}`}>
						<strong>p: </strong>
						{resumeState?.phone || "07111111111"}
					</p>
				</div>
			</div>
			<div id="work-experience" className="w-full border-b-2 border-b-stone-400 mb-10 pb-3">
				<div className="w-full text-left">
					<h3>
						<strong>Work Experience</strong>
					</h3>
				</div>
				{workOptions.map((o) => {
					return (
						<div className="w-full flex pt-2 pb-2">
							<div className="w-1/3 text-left">
								<h3 className={`${resumeState?.experience.length ? "text-black" : "text-slate-400"}`}>
									<strong>{o.institute}, Texas</strong>
								</h3>
								<span className="flex">
									<h5 className={`${resumeState?.experience.length ? "text-black" : "text-slate-400"}`}>{o.dateFrom}</h5>
									<h5>-</h5>
									<h5 className={`${resumeState?.experience.length ? "text-black" : "text-slate-400"}`}>{o.dateTo}</h5>
								</span>
							</div>
							<div className="w-2/3 text-left">
								<h3 className={`${resumeState?.experience.length ? "text-black" : "text-slate-400"}`}>
									<strong>{o.title}</strong>
								</h3>
								<p className={`${resumeState?.experience.length ? "text-black" : "text-slate-400"}`}>{o.blob}</p>
							</div>
						</div>
					);
				})}
			</div>
			<div id="education" className="w-full border-b-2 border-b-stone-400 mb-10 pb-3">
				<div className="w-full text-left">
					<h3>
						<strong>Education</strong>
					</h3>
				</div>
				{educationOptions.map((o) => {
					return (
						<div className="w-full flex pt-2 pb-2">
							<div className="w-1/3 text-left">
								<h3 className={`${resumeState?.education.length ? "text-black" : "text-slate-400"}`}>
									<strong>{o.institute}, Texas</strong>
								</h3>
								<span className="flex">
									<h5 className={`${resumeState?.experience.length ? "text-black" : "text-slate-400"}`}>{o.dateFrom}</h5>
									<h5>-</h5>
									<h5 className={`${resumeState?.experience.length ? "text-black" : "text-slate-400"}`}>{o.dateTo}</h5>
								</span>
							</div>
							<div className="w-2/3 text-left">
								<h3 className={`${resumeState?.education.length ? "text-black" : "text-slate-400"}`}>
									<strong>{o.title}</strong>
								</h3>
								<p className={`${resumeState?.education.length ? "text-black" : "text-slate-400"}`}>{o.blob}</p>
							</div>
						</div>
					);
				})}
			</div>
			<div>
				<h3 className="text-left">
					<strong>Skills</strong>
				</h3>
			</div>
		</div>
	);
}
