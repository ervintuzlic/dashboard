import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { TooltipComponent} from '@syncfusion/ej2-react-popups';

import {useStateContext} from '../contexts/ContextProvider';
import { cartData } from '../data/dummy';


const Cart = () => {
  const { handleClick} = useStateContext();

  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className="float-right h-screen dark:text-gray-200 bg-white dark:[#484B52] w-400">
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-xl">Shopping Cart</p>
          <TooltipComponent content="Exit" position="BottomCenter">
          <button type="button"
          onClick={() => handleClick('')}
          style={{color: 'rgb(153,171,180)', borderRadius: '50%' }} 
          className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray">
            <MdOutlineCancel />
          </button>
          </TooltipComponent>
        </div>
          {cartData.map((item,index) => (
            <div key={index}>
              <div>
                <div className="flex items-center leading-8 gap-5 border-b-1 border-color dark:border-gray-600 p-4">
                  <img className="rounded-lg h-80 w-24"src={item.image} alt="" />
                  <div>

                    <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm font-semibold">{item.category}</p>
                   </div>

                    <div className="flex justify-inline">
                      <p className="font-bold text-lg mt-4">{item.price}</p>
                      <div className="flex ml-20 items-center border-1 border-r-0 border-color rounded">
                      <p className="p-2 border-r-1 dark:border-gray-600 border-color text-red-600 "><AiOutlineMinus /></p>
                      <p className="p-2 border-r-1 border-color dark:border-gray-600 text-green-600">0</p>
                      <p className="p-2 border-r-1 border-color dark:border-gray-600 text-green-600"><AiOutlinePlus /></p>
                    </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>   
  )
}

export default Cart