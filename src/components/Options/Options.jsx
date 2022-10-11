import React, { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { CorrectAnsCounter } from "../Root/Root";

const Options = ({ option, quiz }) => {
	const { correctAnswer, id } = quiz;
	const [correctCount, setCorrectCount] = useContext(CorrectAnsCounter);
	const successAnswer = () =>
		toast.success("Correct Answer,Next One", {
			position: "top-center",
			autoClose: 1000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "colored",
		});
	const wrongAnswer = () =>
		toast.error("Wrong Answer!,Try Again", {
			position: "top-center",
			autoClose: 1000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "colored",
		});
	const [userAnswer, setUserAnswer] = useState("");
	let targetValue;
	const handleChange = (e) => {
		// string passed in
		// add + to the event to make the value a number
	};
	const handleClick = (e) => {
		// string passed in

		targetValue = e.currentTarget.value;
		// add + to the event to make the value a number
		if (correctAnswer === targetValue) {
			successAnswer();
			setCorrectCount(correctCount + 1);
		} else {
			wrongAnswer();
			setCorrectCount(correctCount);
		}
	};

	return (
		<div className="form-control">
			<label className="label cursor-pointer justify-center  rounded-lg shadow-xl p-10 m-4 hover:bg-warning bg-blue-200">
				<input
					type="radio"
					name={id}
					value={option}
					className="radio checked:bg-primary bg-white mr-5"
					onChange={handleChange}
					onClick={handleClick}
					defaultChecked={false}
				/>
				<span className="text-center">{option}</span>
			</label>
		</div>
	);
};

export default Options;
