import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Time from '../Time/Time';
import Bookmark from '../Bookmark/Bookmark';

const Blogs = () => { 

    const [bookMark,setbookMark]=useState([]); 
    const addBookmark=(newData)=>{
        const newBookMark=[...bookMark,newData]; 
        setbookMark(newBookMark);
        // console.log(bookMark.length);

    }

    








    let [time,setTime]=useState(0); 
    const addTime=(newTime)=>{
        // time=parseInt(time)
        //  newTime=parseInt(newTime); 
        setTime(time+newTime)
        console.log(time)

    }


    const [blogs,setBlogs]=useState([]); 
    useEffect(()=>{
        fetch('fakeData.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    } ,[])
    return ( 

        <div className='grid grid-cols-2 gap-4 mt-8'>
            <div> 
            {
                blogs.map(blog=><Blog key={blog.id} blog={blog} addTime={addTime} addBookmark={addBookmark}></Blog>)
            }
        </div>
        <div>
            <Time></Time>
            <Bookmark bookmark={bookMark}></Bookmark>
        </div>
        </div>
    );
};

export default Blogs;