import React from 'react';

const QuizArea = ({quiz}) => {
    const {question,options,} = quiz
    const stringOfQues = question;
    const result = stringOfQues.replace(/(<p[^>]+?>|<p>|<\/p>)/img, "");
    const finalText = result.replace(/\&nbsp;/g, '');
    return (
<div className="card w-96 bg-neutral text-neutral-content">
  <div className="card-body items-center text-center">
    <h2 className="card-title">{finalText}</h2>

  </div>
</div>
    );
};

export default QuizArea;