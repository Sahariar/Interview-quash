import React, { useContext } from 'react';
import { SubjectContext } from '../Root/Root';
import SubjectLayout from '../SubjectLayout/SubjectLayout';

const Subjects = () => {
    const subjects = useContext(SubjectContext);
    console.log(subjects);
    return (
        <section className="subject-area">
            <div className="container mx-auto my-10">
                <div className="my-10">
                <h2 className="text-3xl uppercase px-12">
                Pick Your<span className="mb-5 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block ml-4">
							<span className="relative px-10 text-white text-5xl">Subject</span>
						</span>
                        <br />
            To start the Test.
            </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
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