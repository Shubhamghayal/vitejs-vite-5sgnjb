import { useEffect, useReducer, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => setUsers(res.data));
  }, []);

  return (
    <>
      <div className="app">
        <h1>USers DATA </h1>
        <div className="card">
          {users.map((user) => (
            <div className="card-inner">
              <p> {user.name}</p>
              <p>{user.username}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
