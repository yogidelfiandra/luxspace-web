import React from 'react';

export default function BrowseRoom() {
  return (
    <section
      className='flex bg-gray-100 py-18 px-4 xl:py-24 xl:px-24'
      id='browse-the-room'
    >
      <div className='container mx-auto'>
        <div className='flex flex-start mb-8 xl:mb-8'>
          <h3 className='text-xl leading-9 capitalize font-semibold xl:text-2xl xl:leading-9.5'>
            browse the room <br className='' />
            that we designed for you
          </h3>
        </div>
        <div className='grid grid-rows-2 grid-cols-9 gap-4 cursor-pointer'>
          <div
            className='relative col-span-9 row-span-1 md:col-span-4 card '
            style={{ height: 180 }}
          >
            <div className='card-shadow rounded-xl'>
              <img
                src='images/content/image-catalog-1.png'
                alt=''
                className='w-full h-full object-cover object-center overlay overflow-hidden rounded-xl opacity-75 md:opacity-100'
              />
            </div>
            <div className='overlay left-0 top-0 bottom-0 flex justify-center flex-col pl-48 md:pl-72'>
              <h5 className='text-lg font-semibold'>Living Room</h5>
              <span className='text-sm font-normal'>18.309 items</span>
            </div>
            <a href='details.html' className='stretched-link'>
              {/* <!-- fake children --> */}
            </a>
          </div>

          <div className='relative col-span-9 row-span-1 md:col-span-2 md:row-span-2 card'>
            <div className='card-shadow rounded-xl'>
              <img
                src='images/content/image-catalog-3.png'
                alt=''
                className='w-full h-full object-cover object-center overlay overflow-hidden rounded-xl opacity-75 md:opacity-100'
              />
            </div>
            <div className='overlay right-0 left-0 top-0 bottom-0 md:bottom-auto flex justify-center md:items-center flex-col pl-48 md:pl-0 pt-0 md:pt-12'>
              <h5 className='text-lg font-semibold'>Decoration</h5>
              <span className='text-sm font-normal'>77.392 items</span>
            </div>
            <a href='details.html' className='stretched-link'>
              {/* <!-- fake children --> */}
            </a>
          </div>

          <div className='relative col-span-9 row-span-1 md:col-span-3 md:row-span-2 card'>
            <div className='card-shadow rounded-xl'>
              <img
                src='images/content/image-catalog-4.png'
                alt=''
                className='w-full h-full object-cover object-center overlay overflow-hidden rounded-xl opacity-75 md:opacity-100'
              />
            </div>
            <div className='overlay inset-0 md:bottom-auto flex justify-center md:items-center flex-col pl-48 md:pl-0 pt-0 md:pt-12'>
              <h5 className='text-lg font-semibold'>Bed Room</h5>
              <span className='text-sm font-normal'>22.094 items</span>
            </div>
            <a href='details.html' className='stretched-link'>
              {/* <!-- fake children --> */}
            </a>
          </div>
          <div className='relative col-span-9 row-span-1 md:col-span-4 card'>
            <div className='card-shadow rounded-xl'>
              <img
                src='images/content/image-catalog-2.png'
                alt=''
                className='w-full h-full object-cover object-center overlay overflow-hidden rounded-xl opacity-75 md:opacity-100'
              />
            </div>
            <div className='overlay inset-0 flex justify-center flex-col pl-48 md:pl-72'>
              <h5 className='text-lg font-semibold'>Children Room</h5>
              <span className='text-sm font-normal'>837 items</span>
            </div>
            <a href='details.html' className='stretched-link'>
              {/* <!-- fake children --> */}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
