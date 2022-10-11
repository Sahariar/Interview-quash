import React, { PureComponent, useContext } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { SubjectContext } from '../Root/Root';


const Statistics = () => {
	const subjects = useContext(SubjectContext);
    return (
        <section className="py-6 sm:py-12 statistics-area">
	    <div className="container p-6 mx-auto space-y-8">
		<div className="space-y-2 text-center">
			<h2 className="text-3xl font-bold">Statistics</h2>
			<p className="font-serif text-sm">Learn More about Programming</p>
		</div>

		<div className="chart-area h-96 mx-auto w-8/12">
		<ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={subjects}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="total" stroke="#e82f2c" fill="#78EDD7" />
        </AreaChart>
      </ResponsiveContainer>
		</div>
	</div>
</section>

    );
};

export default Statistics;