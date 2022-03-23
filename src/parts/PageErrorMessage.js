import React from 'react';
import { Link } from 'react-router-dom';

export default function PageErrorMessage({
  title = '404 NOT FOUND',
  body = 'Sorry, the page you are looking for does not exist.',
}) {
  return (
    <section className='mt-36 px-5 xl:px-24'>
      <div className='container mx-auto min-h-screen'>
        <div className='flex flex-col items-center justify-center'>
          <div className='w-full md:w-4/12 text-center'>
            <h2 className='text-xl leading-8 xl:text-3xl xl:leading-9.5 font-semibold mb-6'>
              {title}
            </h2>
            <p className='text-md leading-8 mb-12.5 xl:text-base'>{body}</p>
            <Link
              to='/'
              className='text-gray-900 bg-pink-300 focus:outline-none w-full py-3 rounded-full text-base font-semibold focus:text-black transition-all duration-200 px-8 cursor-pointer'
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
