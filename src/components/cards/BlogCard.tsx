import { Router, useRouter } from 'next/router';
import React from 'react'


export interface CardProps { 
    id: string;
    img: string;
    title: string;
    date: string;
}


const BlogCard: React.FC<CardProps> = ({id, img,title,date}) => {
    const router = useRouter();

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
      <img className="rounded-t-lg" src="img" alt="" />
    </a>
    <div className="p-5">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
       {date}
      </p>
      <button
     
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() =>{
            router.push(`/&{id}`);
        }}
      >
    Read More
 
      </button>
    </div>
  </div>
  )
}

export default BlogCard
