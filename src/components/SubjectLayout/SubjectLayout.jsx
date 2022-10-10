import React from 'react';

const SubjectLayout = ({subject}) => {
    const {id,logo,name,total } = subject
    return (

        <div className="card card-side  shadow-xl">
  <figure className='bg-blue-100'><img src={logo} alt={name} className="rounded-xl  h-48" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>Total Quiz: {total}</p>
    <div className="card-actions justify-center">
    <button className="btn btn-primary">Start Quiz</button>
    </div>
  </div>
</div>
    );
};

export default SubjectLayout;