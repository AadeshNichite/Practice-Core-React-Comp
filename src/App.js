import React,{useState} from 'react';
import AddUser from './components/Users/AddNewUser';
import UserList from './components/Users/UsersList'

function App() {
  const[usersList,setUserList]=useState([]);

  const addUserHandler = (uName,uAge) => {
    setUserList((prevState) =>{
      return [...prevState , { id:Math.random().toString(), name : uName, age: uAge }]
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      {usersList.length > 0 && <UserList users = {usersList}/>}
    </div>
  );
}

export default App;
