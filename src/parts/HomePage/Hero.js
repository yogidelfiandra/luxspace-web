import React from 'react';

export default function Hero() {
  return (
    <section className='flex items-center hero'>
      <div className='w-full absolute z-20 inset-0 md:relative md:w-1/2 text-center flex flex-col justify-center hero-caption'>
        <h1 className='text-4xl leading-10 md:text-5xl md:leading-11 font-semibold'>
          The Room <br className='' />
          You've Dreaming
        </h1>
        <h2 className='px-8 text-base leading-8 mt-2.5 mb-10 md:px-0'>
          Kami menyediakan furniture berkelas yang
          <br className='hidden lg:block' />
          membuat ruangan terasa homey
        </h2>
        <div>
          <a
            href='#browse-the-room'
            className='text-lg font-semibold bg-pink-300 text-black hover:bg-black hover:text-pink-300 rounded-full px-8 mt-8 py-3 inline-block flex-none transition duration-200'
          >
            Explore Now
          </a>
        </div>
      </div>
      <div className='w-full inset-0 md:relative md:w-1/2'>
        <div className='relative hero-image'>
          <div className='overlay inset-0 bg-black opacity-30 z-10'></div>
          <div className='overlay right-0 bottom-0 md:inset-0'>
            <button
              className='video hero-cta focus:outline-none z-30 modal-trigger'
              data-content='<div className="w-screen pb-56 md:w-88 md:pb-56 relative z-50">
              <div className="absolute w-full h-full">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/3h0_v1cdUIA"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>'
            ></button>
          </div>
          <img
            src='images/content/image-section-1.png'
            alt='hero 1'
            className='absolute md:relative opacity-80 md:opacity-100 w-full h-full object-cover object-center'
          />
        </div>
      </div>
    </section>
  );
}
