import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Options = ({ option, quiz }) => {
    const {correctAnswer,id } = quiz
    const [isActive, setIsActive] = useState(false);
	const successAnswer = () => toast.success('Correct Answer,Next One', {
		position: "top-center",
		autoClose: 1000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "colored",
		});
	const wrongAnswer = () => toast.error('Wrong Answer!,Try Again', {
		position: "top-center",
		autoClose: 1000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "colored",
		});
	const [userAnswer, setUserAnswer] = useState('');
	// const handleAnswer = (event) => {
	// 	console.log(event.target.value, correctAnswer);
	// 	if (correctAnswer === event.target.value) {
	
	// 	} else {
	
	// 	}
	// }
    const handleChange = (e) => {
        // string passed in
        // add + to the event to make the value a number
      };
	  const handleClick = (e) => {
        // string passed in
		setUserAnswer(e.currentTarget.value);
		if (correctAnswer === e.currentTarget.value) {
			successAnswer();
		} else {
			wrongAnswer();
		}

		console.log(e.currentTarget.value)
        // add + to the event to make the value a number
      };

	return (
		<div className="form-control">
			<label className="label cursor-pointer justify-around  rounded-lg shadow-xl p-10 m-4 hover:bg-warning bg-blue-200">
				<input
					type="radio"
                    name='radioOne'
					value={option}
					className="radio checked:bg-primary bg-white mr-5"
                    onChange={handleChange}
					checked
					onClick={handleClick}
				/>
				<span className="text-center">{option}</span>
			</label>
		</div>
	);
};

export default Options;
