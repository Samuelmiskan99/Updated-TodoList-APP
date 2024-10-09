import React, { useState, useEffect } from 'react';
import { MdOutlineAddToPhotos } from 'react-icons/md';

// Main App Component
const App = () => {
   const [tasks, setTasks] = useState(() => {
      const storedTasks = localStorage.getItem('tasks');
      return storedTasks ? JSON.parse(storedTasks) : [];
   });
   const [newTask, setNewTask] = useState('');

   // Save tasks to local storage whenever the tasks change
   useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
   }, [tasks]);

   const handleAddTask = (e) => {
      e.preventDefault();
      if (!newTask) return;

      setTasks((prevTasks) => [
         ...prevTasks,
         {
            id: Math.floor(Math.random() * Date.now()),
            name: newTask,
            completed: false,
         },
      ]);

      setNewTask(''); // Clear input after adding
   };

   const handleToggleTaskCompletion = (id) => {
      setTasks((prevTasks) => prevTasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
   };

   const handleDeleteTask = (id) => {
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
   };

   const completedTasksCount = tasks.filter((task) => task.completed).length;

   return (
      <div className='min-h-screen bg-gradient-to-b bg-slate-800 flex justify-center items-center p-4'>
         <div className='bg-white shadow-lg rounded-lg p-4 w-full max-w-md sm:max-w-lg'>
            {/* Task Status Bar */}
            <div className='flex flex-col sm:flex-row justify-between items-center mb-4'>
               {/* Task Status Counters */}
               <div className='flex space-x-3 mb-3 sm:mb-0'>
                  <div className='bg-gradient-to-r from-blue-400 to-blue-500 text-white py-2 px-4 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out'>
                     <span className='font-semibold'>Tasks {tasks.length}</span>
                  </div>
                  <div className='bg-gradient-to-r from-green-400 to-green-500 text-white py-2 px-4 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out'>
                     <span className='font-semibold'>Tasks Done {completedTasksCount}</span>
                  </div>
               </div>
               {/* Trash Button */}
               <button
                  className='bg-gradient-to-r from-red-400 to-red-500 text-white p-2 rounded-full shadow-md hover:shadow-lg hover:from-red-500 hover:to-red-600 transition-all duration-300 ease-in-out'
                  onClick={() => setTasks([])}>
                  🗑 Clear Tasks
               </button>
            </div>

            {/* Task List */}
            <div className='overflow-y-auto max-h-64 mb-4'>
               {tasks.length > 0 ? (
                  tasks.map((task) => (
                     <div key={task.id} className='flex justify-between items-center bg-gray-100 p-2 rounded-lg mb-2'>
                        <div className='flex items-center space-x-2'>
                           <button
                              onClick={() => handleToggleTaskCompletion(task.id)}
                              className={`h-6 w-6 rounded-full ${
                                 task.completed ? 'bg-green-500 text-white' : 'border-2 border-gray-300'
                              } flex items-center justify-center`}>
                              {task.completed && '✔'}
                           </button>
                           <span className={`${task.completed ? 'line-through text-gray-500' : ''}`}>{task.name}</span>
                        </div>
                        <button
                           onClick={() => handleDeleteTask(task.id)}
                           type='submit'
                           className=' [&>svg]:w-4 [&>svg]:h-4 [&>svg]:stroke-1 w-auto h-8 bg-[#d53916] text-white font-bold text-lg py-0 px-6 border-2 border-black rounded-lg shadow-[3px_3px_0px_#000] transition-all ease-in-out duration-300 hover:bg-white hover:text-[#61425c] hover:border-[#812727] hover:shadow-[3px_3px_0px_#812727] active:bg-[#102718] active:text-[#2fdf6d] active:translate-y-[2px]'>
                           Delete
                        </button>
                     </div>
                  ))
               ) : (
                  <p className='text-gray-400 text-center'>No tasks added</p>
               )}
            </div>

            {/* Task Input */}
            <form onSubmit={handleAddTask} className='flex items-center space-x-2'>
               <input
                  type='text'
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder='New task'
                  className='w-full p-2 border border-gray-300 rounded-full focus:outline-none focus:ring focus:border-blue-300'
               />
               <button
                  type='submit'
                  className=' [&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 w-auto h-10 bg-[#d53916] text-white font-bold text-lg py-1 px-4 border-2 border-black rounded-lg shadow-[3px_3px_0px_#000] transition-all ease-in-out duration-300 hover:bg-white hover:text-[#61425c] hover:border-[#812727] hover:shadow-[3px_3px_0px_#812727] active:bg-[#102718] active:text-[#2fdf6d] active:translate-y-[2px]'>
                  <MdOutlineAddToPhotos />
               </button>
            </form>
         </div>
      </div>
   );
};

export default App;
