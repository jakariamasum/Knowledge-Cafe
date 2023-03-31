import React from 'react';

const Bookmark = (props) => {
    return (
        <div className='bg-[#F3F3F3] py-7 pl-7'>
            <h1 className='text-2xl font-bold pt-7 mb-4'>Bookmarked Blogs : {props.bookmark.length}</h1>
            <p className='bg-[#FFFFFF] font-semibold text-xl p-5 mb-4 mr-7 rounded-xl'>Master Microsoft Power Platform and Become an In-Demand!</p>
        </div>
    );
};

export default Bookmark;