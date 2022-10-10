import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizArea from '../QuizArea/QuizArea';

const SubjectTestLay = () => {
    const subjectTest = useLoaderData().data;
    const subjectQuestion = subjectTest.questions

    return (
        <section className='meals-details-page'>
            
        <div className="header-area bg-accent">
        <div className="container mx-auto">
            <div className="flex justify-around items-center">
                <div className="info-area">
                <h1 className="title text-6xl">
            {subjectTest.name}
            </h1>
            <h3 className="text-3xl font-bold py-5">
              Total Quiz Available :  {subjectTest.total}
            </h3>
                </div>

        <figure>
        <img src={subjectTest.logo} alt={subjectTest.name} className="rounded-xl h-80 bg-warning" />
    </figure>
            </div>
           
        </div>
  
        </div>
 
    <div className="container mx-auto my-10">
        
        {
            subjectQuestion.map(
                quiz => <QuizArea
                key={quiz.id}
                quiz = {quiz}
                ></QuizArea>
            )
        }

    
    </div>
</section>
    );
};

export default SubjectTestLay;