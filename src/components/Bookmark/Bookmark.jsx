import React, { useState } from 'react';
import BlogName from '../BlogName/BlogName';
import Toast from '../Toast/Toast';

const Bookmark = (props) => {  
    const id=[];
    

    const bookMarkList=props.bookmark;
    // console.log(bookMarkList)
    return (
        <div className='bg-[#F3F3F3] py-7 pl-7 sticky top-20'>
            <h1 className='text-2xl font-bold pt-7 mb-4'>Bookmarked Blogs : {props.bookmark.length}</h1>
            {
                bookMarkList.map(item=><BlogName key={item.id} name={item.blogName}></BlogName>)
                    
            }
        </div>
    );
};

export default Bookmark;