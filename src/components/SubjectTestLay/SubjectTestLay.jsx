import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import QuizArea from "../QuizArea/QuizArea";
import { CorrectAnsCounter } from "../Root/Root";

const SubjectTestLay = () => {
	const subjectTest = useLoaderData().data;
	const subjectQuestion = subjectTest.questions;
	const [correctCount, setCorrectCount] = useContext(CorrectAnsCounter);

	return (
		<section className="quiz-details-page">
			<div className="header-area bg-accent">
				<div className="container mx-auto">
					<div className="flex justify-around items-center flex-col md:flex-row">
						<div className="info-area">
							<h1 className="title text-6xl">{subjectTest.name}</h1>
							<h3 className="text-3xl font-bold py-5">
								Total Quiz Available : {subjectTest.total}
							</h3>
						</div>

						<figure>
							<img
								src={subjectTest.logo}
								alt={subjectTest.name}
								className="rounded-xl h-80 bg-warning"
							/>
						</figure>
					</div>
				</div>
			</div>

			<div className="container mx-auto my-10">
                <div className="flex justify-between">
                <div className="w-8/12 mx-auto">
					{subjectQuestion.map((quiz) => (
						<QuizArea key={quiz.id} quiz={quiz}></QuizArea>
					))}
				</div>
				{/* <div className="w-3/12">
					<div className="card mx-auto bg-blue-50 my-10 shadow-xl rounded-xl">
						<div className="card-body items-center text-center">
							<h2 className="title text-2xl">Total Correct Answer </h2>
						<div className="grid grid-cols-1 md:grid-cols-2">{correctCount}</div>
						</div>
					</div>
				</div> */}
                </div>
	
			</div>
		</section>
	);
};

export default SubjectTestLay;
