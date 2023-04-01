import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Time from '../Time/Time';
import Bookmark from '../Bookmark/Bookmark';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// toast.configure()

// store bookmark blogs
const Blogs = () => {
    const [bookMark, setbookMark] = useState([]);
    const addBookmark = (newData) => { 

        if(bookMark.includes(newData))
        toast.error('This blog alraeady added');
        else
        toast.success('This blog added to bookmark');

        const newBookMark = [...bookMark, newData];
        setbookMark(newBookMark);
    }


    // total time spend to read
    let [time, setTime] = useState(0);
    const addTime = (newTime) => {
        setTime(time + newTime)
        console.log(time)

    }


    // fetch and load the fake data
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8'>
            <div>
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog} addTime={addTime} addBookmark={addBookmark}></Blog>)
                }
            </div>
            <div className='sticky top-0'>
                <Time time={time}></Time>
                <Bookmark bookmark={bookMark}></Bookmark>
            </div>
            
            <ToastContainer />
        </div>
    );
};

export default Blogs;