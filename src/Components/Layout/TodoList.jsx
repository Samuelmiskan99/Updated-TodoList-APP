import Button from './Button';
import Card from './Card';
import Input from './Input';
import { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

export default function TodoList() {
   const [newTask, setNewTask] = useState('');
   const [tasks, setTasks] = useState(() => {
      const storedTasks = localStorage.getItem('tasks');
      return storedTasks ? JSON.parse(storedTasks) : [];
   });
   const [editTaskId, setEditTaskId] = useState(null); // Track the task being edited

   useEffect(() => {
      // Save tasks to local storage
      localStorage.setItem('tasks', JSON.stringify(tasks));
   }, [tasks]);

   function handleAddTask(e) {
      e.preventDefault();
      if (!newTask) return;

      if (editTaskId) {
         // If a task is being edited, save changes instead of adding a new one
         saveEditTask(editTaskId);
         return;
      }

      setTasks((prevTasks) => [
         ...prevTasks,
         {
            id: Math.floor(Math.random() * Date.now()), // Generate a random ID
            name: newTask,
            completed: false,
         },
      ]);
      setNewTask(''); // Clear the input field after adding
   }

   function handleCompletedTask(id) {
      const updatedTasks = tasks.map((item) => {
         if (item.id === id) {
            return {
               ...item,
               completed: !item.completed, // Toggle completed status
            };
         }
         return item;
      });

      setTasks(updatedTasks); // Update the task list with the completed status
   }

   function handleDeleteTask(id) {
      const updatedTasks = tasks.filter((item) => item.id !== id); // Remove the task

      setTasks(updatedTasks); // Update the state with the filtered tasks
   }

   const startEditTask = (id) => {
      const taskToEdit = tasks.find((item) => item.id === id);
      setNewTask(taskToEdit.name); // Populate the input field with the task's current name
      setEditTaskId(id); // Set the task ID being edited
   };

   const saveEditTask = (id) => {
      const updatedTasks = tasks.map((item) => {
         if (item.id === id) {
            return {
               ...item,
               name: newTask, // Update the task name
            };
         }
         return item;
      });
      setTasks(updatedTasks); // Update the task list with the edited task
      setEditTaskId(null); // Reset the editing state
      setNewTask(''); // Clear the input field
   };

   return (
      <div
         className='min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat'
         style={{
            backgroundImage: 'url(/pict1.jpg)',
         }}>
         <Card className='max-w-lg w-full sm:max-w-xl lg:max-w-2xl'>
            <Card.title>Todo List</Card.title>
            <Card.body>
               <form>
                  <div className='flex flex-col sm:flex-row items-center justify-between mb-4 gap-y-4 sm:gap-x-4'>
                     <Input value={newTask} onChange={(e) => setNewTask(e.target.value)} className='w-full mr-4 p-2 border rounded-md' />
                     <Button
                        className='w-full sm:w-auto'
                        onClick={handleAddTask}
                        text={editTaskId ? 'Save Task' : 'Add Task'} // Change button text based on edit state
                     />
                  </div>
               </form>
               {tasks.length > 0 ? (
                  <ol className='space-y-2 mt-4 w-full'>
                     {tasks.map((item) => (
                        <li key={item.id} className=' items-center justify-between p-3 border rounded-md mb-3  flex-col sm:flex-row'>
                           <span className='flex-grow text-center sm:text-left mb-3 sm:mb-0 ml-1'>
                              {item.name}{' '}
                              {item.completed ? (
                                 <FontAwesomeIcon icon={faCheckCircle} className='text-green-500 text ' title='Completed' />
                              ) : (
                                 <FontAwesomeIcon icon={faTimesCircle} className='text-red-500 ' title='Incompleted' />
                              )}
                           </span>
                           <div className='flex gap-3 mt-4 '>
                              <Button
                                 onClick={() => handleCompletedTask(item.id)}
                                 className='bg-blue-500 text-white text-sm px-3 py-1 rounded-md hover:bg-pink-600'>
                                 {item.completed ? 'Undo' : 'Completed'}
                              </Button>

                              <Button
                                 onClick={() => handleDeleteTask(item.id)}
                                 className='bg-red-500 text-white text-sm px-3 py-1 rounded-md hover:bg-pink-600'>
                                 Remove
                              </Button>

                              <Button
                                 onClick={() => startEditTask(item.id)}
                                 className='bg-green-500 text-white text-sm px-3 py-1 rounded-md hover:bg-pink-600'>
                                 Edit
                              </Button>
                           </div>
                        </li>
                     ))}
                  </ol>
               ) : null}
            </Card.body>
            <Card.footer>
               <h2 className={'bg-slate-500 text-white text-sm px-3 py-1 rounded-md hover:bg-slate-900 border border-black font-semibold'}>
                  You have {tasks.length} tasks
               </h2>
            </Card.footer>
         </Card>
      </div>
   );
}
