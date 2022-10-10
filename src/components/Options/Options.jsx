import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Options = ({ option, quiz }) => {
    const {correctAnswer } = quiz
    const [isActive, setIsActive] = useState(false);
	const [userAnswer, setUserAnswer] = useState('');
	// const handleAnswer = (event) => {
        const [isRadio, setIsRadio] = useState(5);
	// 	console.log(event.target.value, correctAnswer);
	// 	if (correctAnswer === event.target.value) {
	
	// 	} else {
	
	// 	}
	// }
    const handleChange = (e) => {
        // string passed in
        // a string returned by default
        console.log(e.currentTarget.value);
        // add + to the event to make the value a number
      };

	return (
		<div className="form-control">
			<label className="label cursor-pointer justify-around  rounded-lg shadow-xl p-10 m-4 hover:bg-warning bg-blue-200">
				<input
					type="radio"
                    name='radioOne'
					value={option}
					className=" checked:bg-primary bg-white mr-5"
					checked={isRadio === 1}
                    onChange={handleChange}

				/>
				<span className="text-center">{option}</span>
			</label>
		</div>
	);
};

export default Options;
