import Button from './Button';
import { useState } from 'react';

function Counter({ initialValue }) {
   const [count, setCount] = useState(initialValue);

   function handleClick() {
      const nextCount = count + 1;
      setCount(nextCount);
      console.log({ nextCount });
   }
   return (
      <div>
         {' '}
         <h1 className='text-5xl font-bold text-white'>{count}</h1>;
         <div className='mt-5 flex items-center gap-2'>
            <Button className='text-white' onClick={handleClick}>
               +1
            </Button>
            <Button
               className='text-white'
               onClick={() => {
                  const nextCount = count + 3;
                  setCount(nextCount);
                  console.log({ nextCount });
               }}>
               +3
            </Button>
         </div>
      </div>
   );
}

export default Counter;
