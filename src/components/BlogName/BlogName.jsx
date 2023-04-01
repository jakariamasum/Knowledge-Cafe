import React from 'react';

const BlogName = (props) => {
    return (
        <div>
            <p className='bg-[#FFFFFF] font-semibold text-xl p-5 mb-4 mr-7 rounded-xl'>{props.name}</p>

        </div>
    );
};

export default BlogName;