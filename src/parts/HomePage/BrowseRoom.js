import fetch from 'helpers/fetch';
import useAsync from 'helpers/hooks/useAsync';
import React, { useEffect } from 'react';

function Loading({ ratio = {} }) {
  const dummy = [
    {
      id: 1,
      ratio: {
        default: '1/9',
        md: '1/4',
      },
    },
    {
      id: 2,
      ratio: {
        default: '1/9',
        md: '2/2',
      },
    },
    {
      id: 3,
      ratio: {
        default: '1/9',
        md: '2/3',
      },
    },
    {
      id: 4,
      ratio: {
        default: '1/9',
        md: '1/4',
      },
    },
  ];

  return dummy.map((item, index) => {
    return (
      <div
        key={item.id}
        className={`relative card ${
          ratio?.wrapper.default?.[item.ratio.default]
        } ${ratio?.wrapper.md?.[item.ratio.md]}`}
        style={{ height: index === 0 ? 180 : 'auto' }}
      >
        <div className='bg-slate-200 rounded-xl w-full h-full'>
          <div
            className={`animate-pulse overlay ${ratio?.meta?.[item.ratio.md]}`}
          >
            <div className='w-36 h-2 bg-slate-300 rounded-full mt-3'></div>
            <div className='w-24 h-2 bg-slate-300 rounded-full mt-2'></div>
          </div>
        </div>
      </div>
    );
  });
}

export default function BrowseRoom() {
  const { data, status, error, run, isLoading } = useAsync();

  useEffect(() => {
    run(fetch({ url: '/api/categories/?page=1&limit=4' }));
  }, [run]);

  const ratioClassNames = {
    wrapper: {
      default: {
        '1/9': 'col-span-9 row-span-1',
      },
      md: {
        '1/4': 'md:col-span-4 md:row-span-1',
        '2/2': 'md:col-span-2 md:row-span-2',
        '2/3': 'md:col-span-3 md:row-span-2',
      },
    },
    meta: {
      '1/9':
        'left-0 top-0 bottom-0 flex justify-center flex-col pl-48 md:pl-32 xl:pl-72',
      '1/4':
        'left-0 top-0 bottom-0 flex justify-center flex-col pl-48 md:pl-32 xl:pl-72',
      '2/2':
        'inset-0 md:bottom-auto flex justify-center md:items-center flex-col pl-48 md:pl-0 pt-0 md:pt-12',
      '2/3':
        'inset-0 md:bottom-auto flex justify-center md:items-center flex-col pl-48 md:pl-0 pt-0 md:pt-12',
    },
  };
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

        <div className='grid grid-rows-2 grid-cols-9 gap-4'>
          {isLoading ? (
            <Loading ratio={ratioClassNames} />
          ) : (
            data.data.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className={`relative card ${
                    ratioClassNames?.wrapper.default?.[item.ratio.default]
                  } ${ratioClassNames?.wrapper.md?.[item.ratio.md]}`}
                  style={{ height: index === 0 ? 180 : 'auto' }}
                >
                  <div className='card-shadow rounded-xl'>
                    <img
                      src={`images/content/${item.imageUrl}`}
                      alt={item.title}
                      className='w-full h-full object-cover object-center overlay overflow-hidden rounded-xl opacity-75 md:opacity-100'
                    />
                  </div>
                  <div
                    className={`overlay ${
                      ratioClassNames?.meta?.[item.ratio.md]
                    }`}
                  >
                    <h5 className='text-lg font-semibold'>{item.title}</h5>
                    <span className='text-sm font-normal'>
                      {item.products} item{item.products > 1 ? 's' : ''}
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
