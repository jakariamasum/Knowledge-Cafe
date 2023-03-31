import React from 'react';
import Time from './Time/Time';

const Card = (props) => {
    const { blogName, time, date, author, cover } = props.blog;
    return (
        <div>
            <div className="card card-compact w-full bg-base-100 shadow-xl p-12">
                <figure><img src={cover} alt="" /></figure>
                <div className='flex justify-between items-center mt-8'>
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
                    <div>
                        <p className='text-[#11111199]'>{time} min read</p>
                    </div>
                </div>
                <div className="card-body">
                    <h2 className="card-title font-bold text-3xl">{blogName}</h2>
                    <button className="underline text-[#6047EC] text-start">Mark as read</button>

                </div>
            </div>
        </div>
    );
};

export default Card;