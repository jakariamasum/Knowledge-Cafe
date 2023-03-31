import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Time from '../Time/Time';
import Bookmark from '../Bookmark/Bookmark';

const Blogs = () => {
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
                blogs.map(blog=><Blog key={blog.id} blog={blog}></Blog>)
            }
        </div>
        <div>
            <Time></Time>
            <Bookmark></Bookmark>
        </div>
        </div>
    );
};

export default Blogs;