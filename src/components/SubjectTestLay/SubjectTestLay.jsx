import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import QuizArea from "../QuizArea/QuizArea";
import { CorrectAnsCounter, WrongAnsCounter } from "../Root/Root";

const SubjectTestLay = () => {
	const subjectTest = useLoaderData().data;
	const subjectQuestion = subjectTest.questions;
	const [correctCount, setCorrectCount] = useContext(CorrectAnsCounter);
	const [wrongCount , setWrongCount] = useContext(WrongAnsCounter);

	return (
		<section className="quiz-details-page">
			<div className="header-area bg-accent">
				<div className="container mx-auto">
					<div className="flex justify-around items-center flex-col-reverse  xl:flex-row">
						<div className="info-area text-center xl:p-12 ">
							<h1 className="title text-4xl xl:text-6xl">{subjectTest.name}</h1>
							<h3 className="text-2xl xl:text-3xl font-bold py-5">
								Total Quiz Available : {subjectTest.total}
							</h3>
						</div>

						<figure className="mx-auto p-12 md:p-0">
							<img
								src={subjectTest.logo}
								alt={subjectTest.name}
								className="rounded-xl md:h-48 xl:h-80 bg-warning"
							/>
						</figure>
					</div>
				</div>
			</div>

			<div className="container mx-auto my-10">
                <div className="flex xl:justify-around flex-col-reverse xl:flex-row">
                <div className="xl:w-8/12 w-10/12 xl:mx-0 mx-auto">
					{subjectQuestion.map((quiz) => (
						<QuizArea key={quiz.id} quiz={quiz}></QuizArea>
					))}
				</div>
				<div className="xl:w-3/12 w-10/12 xl:mx-0 mx-auto">
					<div className="card mx-auto bg-success my-10 shadow-xl rounded-xl sticky xl:top-0">
						<div className="card-body items-center text-center text-black">
							<h2 className="title text-2xl">Total Correct Answer </h2>
						<p className="font-bold text-xl">
								{correctCount}
							</p>
						</div>
					</div>
					<div className="card mx-auto bg-primary my-10 shadow-xl rounded-xl sticky xl:top-52">
						<div className="card-body items-center text-center text-white">
							<h2 className="title text-2xl">Total Wrong Answer </h2>
						<p className="font-bold text-xl">
								{wrongCount}
							</p>
						</div>
					</div>
				</div>
                </div>
	
			</div>
		</section>
	);
};

export default SubjectTestLay;
