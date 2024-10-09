import Button from './Button';
import Card from './Card';
import Input from './Input';
import { useState } from 'react';

export default function Todo() {
   const [items, setItems] = useState('');
   const [newItems, setNewItems] = useState([]);

   const handleSetItems = (e) => {
      e.preventDefault();
      setNewItems((prevItems) => [
         ...prevItems,
         {
            id: Math.floor(Math.random() * Date.now()),
            name: items,
            completed: false,
         },
      ]);
      setItems('');
   };

   return (
      <Card>
         <Card.title>Todo</Card.title>
         <Card.body>
            <form>
               <div className='flex items-center gap-x-2'>
                  <Input value={items} onChange={(e) => setItems(e.target.value)} />
                  <Button onClick={handleSetItems} text={'Add text'} />
               </div>
            </form>
            {newItems.length > 0 ? (
               <ol className='space-y-2'>
                  {newItems.map((newItems) => (
                     <li key={newItems.id}>{newItems.name}</li>
                  ))}
               </ol>
            ) : null}
         </Card.body>
         <Card.footer>You have {newItems.length} task</Card.footer>
      </Card>
   );
}
