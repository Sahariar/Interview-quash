import React from 'react';
import parse from 'html-react-parser';

const QuizArea = ({quiz}) => {
    const {question,options,} = quiz
    const finalQuestion = parse(question);
    return (
<div className="card w-8/12 mx-auto bg-secondary my-10 shadow-xl rounded-xl">
  <div className="card-body items-center text-center">
    <h2 className="title text-2xl">{finalQuestion}</h2>

  </div>
</div>
    );
};

export default QuizArea;