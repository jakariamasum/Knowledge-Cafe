import React from 'react';
import Time from '../Time/Time';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Blog = (props) => {
    const { blogName, time, date, author, cover } = props.blog;
    const addTime=props.addTime;
    const addBookmark=props.addBookmark;
    return (
        <div>
            <div className="card card-compact w-full bg-base-100 shadow-xl p-12 my-10">
                <figure><img src={cover} alt="" /></figure>
                <div className='flex flex-col lg:flex-row justify-between items-center mt-8'>
                    <div className='flex items-center	'>
                        <div className="avatar">
                            <div className="w-12 rounded-full">
                                <img src={author.img} />
                            </div>
                        </div>
                        <div className='pl-3'>
                            <h2 className='font-bold text-2xl'>{author.name}</h2>
                            <p className='text-[#11111199]'>{date}</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <p className='text-[#11111199] mr-2'>{time} min read</p>
                        <button onClick={()=>addBookmark(props.blog)}><FontAwesomeIcon icon={faBookmark} /></button>
                    </div>
                </div>
                <div className="card-body">
                    <h2 className="card-title font-bold text-3xl">{blogName}</h2>
                    <p className='font-semibold text-xl text-[#11111199]'>#beginners #promramming</p>
                    <button className="underline text-[#6047EC] text-start text-2xl font-semibold" onClick={()=>addTime(props.blog.time)}>Mark as read</button>

                </div>
            </div>
        </div>
    );
};

export default Blog;