import React from 'react';

export default function Suggestion() {
  return (
    <section className='bg-gray-100 px-5 py-16 xl:px-24 xl:py-24'>
      <div className='container mx-auto'>
        <div className='flex flex-start mb-7.5'>
          <h3 className='text-xl leading-9 capitalize font-semibold xl:text-2xl xl:leading-9.5'>
            Complete your room <br className='' />
            with what we designed
          </h3>
        </div>
        <div className='flex overflow-x-auto mb-4 -mx-3'>
          <div className='px-3 flex-none' style={{ width: 320 }}>
            <div className='rounded-xl p-4 pb-8 relative bg-white xl:py-7.5 xl:px-5'>
              <div className='rounded-xl overflow-hidden card-shadow w-full h-36 xl:h-44'>
                <img
                  src='/images/content/chair-1.png'
                  alt=''
                  className='w-full h-full object-cover object-center'
                />
              </div>
              <h5 className='text-lg font-semibold mt-6 mb-1.5'>
                Cangkir Mauttie
              </h5>
              <span className='text-base'>IDR 89.300.000</span>
              <a href='details.html' className='stretched-link'>
                {/* <!-- fake children --> */}
              </a>
            </div>
          </div>
          <div className='px-3 flex-none' style={{ width: 320 }}>
            <div className='rounded-xl p-4 pb-8 relative bg-white xl:py-7.5 xl:px-5'>
              <div className='rounded-xl overflow-hidden card-shadow w-full h-36 xl:h-44'>
                <img
                  src='/images/content/chair-2.png'
                  alt=''
                  className='w-full h-full object-cover object-center'
                />
              </div>
              <h5 className='text-lg font-semibold mt-6 mb-1.5'>Saman Kakka</h5>
              <span className='text-base'>IDR 14.500.399</span>
              <a href='details.html' className='stretched-link'>
                {/* <!-- fake children --> */}
              </a>
            </div>
          </div>
          <div className='px-3 flex-none' style={{ width: 320 }}>
            <div className='rounded-xl p-4 pb-8 relative bg-white xl:py-7.5 xl:px-5'>
              <div className='rounded-xl overflow-hidden card-shadow w-full h-36 xl:h-44'>
                <img
                  src='/images/content/chair-3.png'
                  alt=''
                  className='w-full h-full object-cover object-center'
                />
              </div>
              <h5 className='text-lg font-semibold mt-6 mb-1.5'>Lino Dino</h5>
              <span className='text-base'>IDR 22.000.000</span>
              <a href='details.html' className='stretched-link'>
                {/* <!-- fake children --> */}
              </a>
            </div>
          </div>
          <div className='px-3 flex-none' style={{ width: 320 }}>
            <div className='rounded-xl p-4 pb-8 relative bg-white xl:py-7.5 xl:px-5'>
              <div className='rounded-xl overflow-hidden card-shadow w-full h-36 xl:h-44'>
                <img
                  src='/images/content/chair-4.png'
                  alt=''
                  className='w-full h-full object-cover object-center'
                />
              </div>
              <h5 className='text-lg font-semibold mt-6 mb-1.5'>
                Syail Ammeno
              </h5>
              <span className='text-base'>IDR 6.399.999</span>
              <a href='details.html' className='stretched-link'>
                {/* <!-- fake children --> */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
