import { useState, useEffect } from 'react';
import PlaceContentCenter from './Components/Layout/PlaceContentCenter';
import Button from './Components/Layout/Button';

import Input from './Components/Layout/Input';

function App(props) {
   const [name, setName] = useState('');
   const [online, setOnline] = useState(false);
   const [scrollPosition, setScrollPosition] = useState(window.scroll);

   useEffect(() => {
      //dipanggil ketika render terjadi (selalu dipanggil)
      // console.log('Always rendered');
   });

   useEffect(() => {
      //
      // console.log('first rendered');
   }, []);

   useEffect(() => {
      // useEffect untuk props
      // console.log(`im now ${online ? 'online' : 'offline'}`);
   }, [online]);

   function updateScrollPosition() {
      const windowScrolling = window.scrollY;
      console.log(`window scroll position ${windowScrolling}`);

      setScrollPosition(windowScrolling);
   }

   useEffect(() => {
      window.addEventListener('scroll', updateScrollPosition);
      // return () => {};
   }, []);

   return (
      <PlaceContentCenter>
         <div className='h-[4000px]'>
            <Input value={name} onChange={(e) => setName(e.target.value)} />
            <Button onClick={() => setOnline((online) => !online)}>Set online</Button>
         </div>
      </PlaceContentCenter>
   );
}

export default App;
