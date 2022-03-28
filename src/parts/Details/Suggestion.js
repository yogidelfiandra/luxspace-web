import React from 'react';
import { Link } from 'react-router-dom';

export default function Suggestion({ data }) {
  console.log(data);
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
          {data?.map((item) => {
            return (
              <div
                className='px-3 flex-none'
                style={{ width: 320 }}
                key={item.id}
              >
                <div className='rounded-xl p-4 pb-8 relative bg-white xl:py-7.5 xl:px-5'>
                  <div className='rounded-xl overflow-hidden card-shadow w-full h-36 xl:h-44'>
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className='w-full h-full object-cover object-center'
                    />
                  </div>
                  <h5 className='text-lg font-semibold mt-6 mb-1.5'>
                    {item.title}
                  </h5>
                  <span className='text-base'>IDR {item.price}</span>
                  <Link
                    to={`/categories/${item.idc}/products/${item.id}`}
                    className='stretched-link'
                  ></Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
