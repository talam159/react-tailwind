import React from 'react';
import { ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/solid'
import Benefit from '../Benefit/Benefit';

const PricingOption = (props) => {
    const {name, price, benefits} =props.option;
    return (
        <div className='bg-white p-4 rounded-lg'>
            <h2 className='bg-indigo-300 py-2 text-xl font-bold rounded'>{name}</h2>
            <p>
                <span className='text-5xl font-bold'>{price}</span>
                <span className='text-xl font-bold text-gray-500'>/mo</span>
            </p>
            <div>
                <h3 className='text-xl text-left'>Benifits: </h3>
                {
                    benefits.map(benefit => <Benefit benefit={benefit}></Benefit> )
                }
                
            </div>
            <button className=' 
            flex justify-center
            w-full py-2
            rounded-md 
            mt-6 bg-green-500
            text-white
            font-bold
            hover:text-green-800 
            '>Buy Now
            <ArrowRightIcon className='w-6 h-6'></ArrowRightIcon>
            </button>
        </div>
    );
};

export default PricingOption;