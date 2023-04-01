import React from 'react';

const Time = (props) => {
    return (
        <div className='bg-[#F0EDFE] px-12 py-5 text-[#6047EC] border border-[#6047EC] rounded-xl mb-6 mt-10'>
            <h2 className='font-bold text-2xl'>Spent time on read : {props.time} min</h2>
        </div>
    );
};

export default Time;