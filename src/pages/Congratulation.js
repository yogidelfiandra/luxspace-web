import Breadcrumb from 'components/Breadcrumb';
import Footer from 'parts/Footer';
import Header from 'parts/Header';
import Sitemap from 'parts/Sitemap';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Congratulation() {
  return (
    <>
      <Header theme='black' />
      <Breadcrumb
        list={[
          { url: '/', name: 'Home' },
          { url: '/congratulation', name: 'Success Checkout' },
        ]}
      />
      <section className='px-5 xl:px-24'>
        <div className='container mx-auto mt-12 min-h-screen'>
          <div className='flex flex-col items-center justify-center'>
            <div className='w-full md:w-4/12 text-center'>
              <img
                src='/images/content/illustration-success.png'
                alt='congrats illustration'
                className='w-64 h-64 mx-auto xl:w-96 xl:h-96'
              />
              <h2 className='text-xl leading-8 xl:text-3xl xl:leading-9.5 font-semibold mb-6'>
                Ah yes it’s success!
              </h2>
              <p className='text-md leading-8 mb-12.5 xl:text-base'>
                Furniture yang anda beli akan kami kirimkan saat ini juga so now
                please sit tight and be ready for it
              </p>
              <Link
                to='/'
                className='text-gray-900 bg-pink-300 focus:outline-none w-full py-3 rounded-full text-base font-semibold focus:text-black transition-all duration-200 px-8 cursor-pointer'
              >
                Back to Shop
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Sitemap />
      <Footer />
    </>
  );
}
