import React from 'react';

export default function Footer() {
  return (
    <footer className='flex text-center px-5 py-8 justify-center'>
      {/* mobile view */}
      <p className='text-sm md:hidden'>
        Copyright 2022 • All Rights Reserved <br /> LuxSpace by{' '}
        <a
          href='https://www.instagram.com/yogidelfiandra/'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-blue-500'
        >
          yogidelfiandra
        </a>
      </p>

      {/* desktop view */}
      <p className='text-sm hidden md:block'>
        Copyright 2022 • All Rights Reserved LuxSpace by{' '}
        <a
          href='https://www.instagram.com/yogidelfiandra/'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-blue-500'
        >
          yogidelfiandra
        </a>
      </p>
    </footer>
  );
}
