import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Components/Layout/Card';
import PlaceContentCenter from './Components/Layout/PlaceContentCenter';
import Button from './Components/Layout/Button';
import Input from './Components/Layout/Input';

function App() {
   const [users, setUsers] = useState([]);
   const [loading, setLoading] = useState(false);
   const [editingUserId, setEditingUserId] = useState(null); // To track which user is being edited
   const [editedUser, setEditedUser] = useState({}); // Store edited user details
   const [newUser, setNewUser] = useState({
      name: '',
      email: '',
      phone: '',
      website: '',
   }); // Store new user details
   const [showAddUserInputs, setShowAddUserInputs] = useState(false); // Track visibility of new user input fields

   useEffect(() => {
      async function getUsers() {
         setLoading(true);
         try {
            const { data } = await axios('https://jsonplaceholder.typicode.com/users');
            console.log(data);
            setUsers(data);
            setLoading(false);
         } catch {
            const err = new Error('something went wrong');
            console.log(err);
         }
      }

      getUsers().then;
      (r) => r;
   }, []);

   // Delete user function
   const deleteUser = (id) => {
      const updatedUsers = users.filter((user) => user.id !== id);
      setUsers(updatedUsers);
   };

   // Start editing a user
   const startEditUser = (user) => {
      setEditingUserId(user.id);
      setEditedUser({ ...user });
   };

   // Handle input changes when editing
   const handleEditChange = (e) => {
      const { name, value } = e.target;
      setEditedUser((prevState) => ({
         ...prevState,
         [name]: value,
      }));
   };

   // Handle input changes for the new user
   const handleNewUserChange = (e) => {
      const { name, value } = e.target;
      setNewUser((prevState) => ({
         ...prevState,
         [name]: value,
      }));
   };

   // Save the edited user
   const saveUser = () => {
      const updatedUsers = users.map((user) => (user.id === editingUserId ? { ...editedUser } : user));
      setUsers(updatedUsers);
      setEditingUserId(null); // Exit edit mode
   };

   // Add new user function
   const addUser = () => {
      const newId = users.length ? Math.max(users.map((user) => user.id)) + 1 : 1; // Generate new id
      const newUserToAdd = { ...newUser, id: newId };
      setUsers([...users, newUserToAdd]);

      // Reset newUser state after adding
      setNewUser({
         name: '',
         email: '',
         phone: '',
         website: '',
      });

      setShowAddUserInputs(false); // Hide the input fields after adding user
   };

   return (
      <PlaceContentCenter>
         <Card>
            <Card.title>Users: {users.length}</Card.title>
            <Card.body>
               {loading ? (
                  <div>Sabar yahhh....</div>
               ) : (
                  <>
                     {/* Button to toggle showing the new user inputs */}
                     <Button className={'mb-4'} onClick={() => setShowAddUserInputs(!showAddUserInputs)}>
                        {showAddUserInputs ? 'Cancel Adding User' : 'Add New User'}
                     </Button>

                     {/* Input fields for adding new user, shown when showAddUserInputs is true */}
                     {showAddUserInputs && (
                        <div className='mb-6'>
                           <Input name='name' value={newUser.name} onChange={handleNewUserChange} placeholder='Name' />
                           <Input name='email' value={newUser.email} onChange={handleNewUserChange} placeholder='Email' />
                           <Input name='phone' value={newUser.phone} onChange={handleNewUserChange} placeholder='Phone' />
                           <Input name='website' value={newUser.website} onChange={handleNewUserChange} placeholder='Website' />
                           <div className='mt-4 flex justify-end'>
                              <Button onClick={addUser}>Add</Button>
                           </div>
                        </div>
                     )}

                     <ol className='mt-6'>
                        {users.map((user) => (
                           <li key={user.id}>
                              <Card>
                                 {editingUserId === user.id ? (
                                    <>
                                       <Input name='name' value={editedUser.name} onChange={handleEditChange} />
                                       <Input name='email' value={editedUser.email} onChange={handleEditChange} />
                                       <Input name='phone' value={editedUser.phone} onChange={handleEditChange} />
                                       <Input name='website' value={editedUser.website} onChange={handleEditChange} />

                                       <Button className={'mt-4'} onClick={saveUser}>
                                          Save
                                       </Button>
                                    </>
                                 ) : (
                                    <>
                                       <Card.title>{user.name}</Card.title>
                                       <Card.footer>{user.email}</Card.footer>
                                       <Card.footer>{user.phone}</Card.footer>
                                       <Card.footer>{user.website}</Card.footer>
                                       <div className=' justify-center flex space-x-4 mt-5'>
                                          <Button onClick={() => startEditUser(user)}>Edit</Button>
                                          <Button onClick={() => deleteUser(user.id)}>Delete</Button>
                                       </div>
                                    </>
                                 )}
                              </Card>
                           </li>
                        ))}
                     </ol>
                  </>
               )}
            </Card.body>
         </Card>
      </PlaceContentCenter>
   );
}

export default App;
