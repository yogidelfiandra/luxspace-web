import { useGlobalContext } from 'helpers/hooks/useGlobalContext';
import React from 'react';
import { Link } from 'react-router-dom';

export default function ShoppingCart() {
  const { state, dispatch } = useGlobalContext();
  return (
    <div
      className='w-full px-5 mb-7.5 md:w-8/12 md:mb-0 xl:pl-12.5'
      id='shopping-cart'
    >
      <div className='flex flex-start pb-3.5 mb-5 mt-7.5 border-b border-gray-200 md:border-b-0 md:pb-0'>
        <h3 className='text-xl leading-8 xl:text-2xl'>Shopping Cart</h3>
      </div>

      <div className='border-b border-gray-200 mb-5 hidden md:block'>
        <div className='flex flex-start items-center pb-3 -mx-4'>
          <div className='px-4 flex-none'>
            <div className='' style={{ width: 90 }}>
              <h6>Photo</h6>
            </div>
          </div>
          <div className='px-4 w-5/12'>
            <div className=''>
              <h6>Product</h6>
            </div>
          </div>
          <div className='px-4 w-5/12'>
            <div className=''>
              <h6>Price</h6>
            </div>
          </div>
          <div className='px-4 w-2/12'>
            <div className='text-center'>
              <h6>Action</h6>
            </div>
          </div>
        </div>
      </div>

      {Object.keys(state.cart).length === 0 ? (
        <p id='cart-empty' className='text-center py-8'>
          Ooops... Cart is empty{' '}
          <Link to='/' className='underline'>
            Shop Now
          </Link>
        </p>
      ) : (
        Object.keys(state.cart).map((key) => {
          const item = state.cart[key];
          return (
            <div
              className='flex flex-start flex-wrap items-center mb-5 -mx-4'
              key={key}
            >
              <div className='px-4 flex-none'>
                <div className='' style={{ width: 90, height: 90 }}>
                  <img
                    src={item.imgUrls[0]}
                    alt={item.title}
                    className='object-cover rounded-xl w-full h-full'
                  />
                </div>
              </div>
              <div className='px-4 w-auto flex-1 md:w-5/12'>
                <div className=''>
                  <h6 className='font-semibold text-base xl:text-lg leading-8 mb-1.5'>
                    {item.title}
                  </h6>
                  <span className='text-sm md:text-base '>
                    {item.category.title}
                  </span>
                  <h6 className='font-semibold mt-1.5 text-md block md:hidden'>
                    IDR {item.price}
                  </h6>
                </div>
              </div>
              <div className='px-4 w-auto flex-none md:flex-1 md:w-5/12 hidden md:block'>
                <div className=''>
                  <h6 className='font-semibold text-base'>IDR {item.price}</h6>
                </div>
              </div>
              <div className='px-4 w-2/12'>
                <div className='text-center'>
                  <button
                    onClick={() =>
                      dispatch({ type: 'REMOVE_FROM_CART', id: item.id })
                    }
                    className='text-red-600 border-none focus:outline-none px-3 py-1'
                  >
                    X
                  </button>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
