import React, { useContext } from 'react';
import { SubjectContext } from '../Root/Root';
import SubjectLayout from '../SubjectLayout/SubjectLayout';

const Subjects = () => {
    const subjects = useContext(SubjectContext);
    const pathUrl = window.location.pathname
    let titleName;
    if(pathUrl !== '/subjects'){
        titleName = 
        <div className="my-5">
        <h2 className="text-3xl uppercase md:px-12">
        Pick Your<span className="mb-5 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block ml-4">
                    <span className="relative md:px-10 text-white md:text-5xl">Subject</span>
                </span>
                <br />
    To start the Test.
    </h2>
</div>
    }else{
        titleName= 
        <div className="space-y-2 text-center py-10">
			<h2 className="text-3xl font-bold">Subject</h2>
			<p className="font-serif text-xl">Test Your Skill and Knowledge</p>
		</div>
        
    }

    return (
        <section className="subject-area my-20">
            <div className="container p-6 mx-auto space-y-8">
                {titleName}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 my-10">
                {subjects.map((subject) => (
						<SubjectLayout
							key={subject.id}
							subject={subject}
						></SubjectLayout>
					))}
				</div>

            </div>
         
        </section>
    );
};

export default Subjects;