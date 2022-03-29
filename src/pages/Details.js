import Breadcrumb from 'components/Breadcrumb';
import fetch from 'helpers/fetch';
import useAsync from 'helpers/hooks/useAsync';
import ProductDetails from 'parts/Details/ProductDetails';
import Suggestion from 'parts/Details/Suggestion';
import Footer from 'parts/Footer';
import Header from 'parts/Header';
import Sitemap from 'parts/Sitemap';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function LoadingProductDetails() {
  return (
    <section className='container mx-auto xl:px-24'>
      <div className='flex flex-wrap my-5 md:my-18 animate-pulse'>
        <div className='w-full md:hidden px-5'>
          <div className='w-80 h-14 bg-slate-300 rounded-full'></div>
          <div className='w-36 h-7 bg-slate-300 rounded-full'></div>
        </div>
        <div className='flex-1'>
          <div className='slider'>
            <div className='thumbnail'>
              {Array(5)
                .fill()
                .map((_, index) => {
                  return (
                    <div className='relative card group' key={index}>
                      <div
                        className='rounded-xl item bg-slate-200'
                        style={{ width: 106, height: 106 }}
                      ></div>
                    </div>
                  );
                })}
            </div>
            <div className='preview'>
              <div className='item rounded-lg h-full overflow-hidden'>
                <div className='item bg-slate-300 rounded-lg h-full w-full overflow-hidden'></div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex-1 px-5 mb-7.5 md:mb-0 md:pl-7'>
          <div className='w-80 h-14 mb-2.5 bg-slate-300 rounded-full'></div>
          <div className='w-36 h-7 mb-1.5 bg-slate-300 rounded-full'></div>

          <div className='w-32 xl:w-56 h-7 xl:h-11 mt-1.5 md:mt-6  bg-slate-300 rounded-full'></div>

          <hr className='my-8 xl:my-10' />

          <div className='w-40 h-6 mb-4 bg-slate-300 rounded-full'></div>
          <div className='w-96 xl:w-full h-3 xl:h-5 mb-2 bg-slate-300 rounded-full'></div>
          <div className='w-96 xl:w-full h-3 xl:h-5 mb-2 bg-slate-300 rounded-full'></div>
          <div className='w-96 xl:w-full h-3 xl:h-5 mb-5 bg-slate-300 rounded-full'></div>

          <div className='w-96 xl:w-full h-3 xl:h-5 mb-2 bg-slate-300 rounded-full'></div>
          <div className='w-96 xl:w-full h-3 xl:h-5 mb-2 bg-slate-300 rounded-full'></div>
          <div className='w-96 xl:w-full h-3 xl:h-5 bg-slate-300 rounded-full'></div>
        </div>
      </div>
    </section>
  );
}

function LoadingSuggestion() {
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
          {Array(4)
            .fill()
            .map((_, index) => {
              return (
                <div
                  className='px-3 flex-none'
                  style={{ width: 320 }}
                  key={index}
                >
                  <div className='animate-pulse rounded-xl p-4 pb-8 relative bg-white xl:py-7.5 xl:px-5'>
                    <div className='rounded-xl overflow-hidden card-shadow w-full h-36 xl:h-44'>
                      <div className='item bg-slate-300 rounded-xl h-full w-full overflow-hidden'></div>
                    </div>
                    <div className='w-56 h-4 bg-slate-300 rounded-full mt-6 mb-1.5'></div>
                    <div className='w-40 h-3 bg-slate-300 rounded-full'></div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default function Details() {
  const { idp } = useParams();

  const { data, run, isLoading } = useAsync();

  useEffect(() => {
    run(fetch({ url: `/api/products/${idp}` }));
  }, [run]);

  useEffect(() => {
    window.title = 'Details Page';
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Header theme='black' />
      <Breadcrumb
        list={[
          { url: '/', name: 'Home' },
          { url: '/categories/7654321', name: 'Office Room' },
          { url: '/categories/7654321/details/784', name: 'Details' },
        ]}
      />
      {isLoading ? <LoadingProductDetails /> : <ProductDetails data={data} />}
      {isLoading ? (
        <LoadingSuggestion />
      ) : (
        <Suggestion data={data?.relatedProducts || {}} />
      )}

      <Sitemap />
      <Footer />
    </>
  );
}
