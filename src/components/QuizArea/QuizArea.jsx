import React, { useState } from "react";
import parse from "html-react-parser";
import Options from "../Options/Options";

const QuizArea = ({ quiz }) => {
	const [isActive, setIsActive] = useState(false);
	const { question, options, correctAnswer, id } = quiz;
	const finalQuestion = parse(question);
	const handleShowAnswer = () => {
		setIsActive(!isActive);
	};
	
	let answerArea;
	if (isActive) {
		answerArea = (
			<div className="bg-success lg:w-1/2 w-10/12 my-5 p-10  mx-auto rounded-xl shadow-xl">
				<h2 className="text-2xl text-neutral capitalize px-12 text-center">
					{correctAnswer}
				</h2>
			</div>
		);
	} else {
	}

	return (
		<div className="card mx-auto bg-blue-50 my-10 shadow-xl rounded-xl">
			<div className="flex justify-center text-center pt-10 px-4">
				<h2 className="title text-2xl px-10 ">Quiz:{finalQuestion}</h2>
				<div className="">
					<button
						className="btn btn-circle btn-outline btn-primary"
						onClick={handleShowAnswer}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
							/>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
							/>
						</svg>
					</button>
				</div>
			</div>
			{answerArea}
			<div className="card-body items-center text-center">
				<div className="grid grid-cols-1 md:grid-cols-2">
					{options.map((option) => (
						<Options option={option} quiz={quiz} key={option}></Options>
					))}
				</div>
			</div>
		</div>
	);
};

export default QuizArea;
