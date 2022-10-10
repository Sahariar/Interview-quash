import React from "react";
import parse from "html-react-parser";
import Options from "../Options/Options";

const QuizArea = ({ quiz }) => {
	const { question, options, correctAnswer, id } = quiz;
	const finalQuestion = parse(question);


	return (
		<div className="card w-8/12 mx-auto bg-blue-50 my-10 shadow-xl rounded-xl">
	
			<div className="card-body items-center text-center">
				<h2 className="title text-2xl">{finalQuestion}</h2>
				<div className="grid grid-cols-1 md:grid-cols-2">
					{options.map((option) => (
						<Options
							option={option}
							quiz={quiz}
							key={option}
						></Options>
					))}
				</div>
			</div>
		</div>
	);
};

export default QuizArea;
