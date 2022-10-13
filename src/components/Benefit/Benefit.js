import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const Benefit = (props) => {
    return (
        
            <p className='flex items-center mr-2'><CheckCircleIcon className='w-4 h-4 mr-2 text-green-700'></CheckCircleIcon>
                {props.benefit}
            </p>
        
    );
};

export default Benefit;