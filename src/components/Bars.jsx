// import { HStack} from '@chakra-ui/react';
import React from 'react';
import '../styles/Sorting.css'
// import { background } from '@chakra-ui/react';


const Sorting = ({array,barColors}) => {
  return (
    <div>
        <div className='array-container' >
            {
                array.map((value,idx)=>{
                    return(
                        <div
                        className="array-bar"
                        key={idx}
                        style={{ height: `${value}px`,
                                backgroundColor: barColors[idx]}}
                        >

                        </div>
                    )
                })
            }
        </div>


    </div>
  )
}

export default Sorting