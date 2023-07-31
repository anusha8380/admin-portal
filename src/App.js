
import React, { useEffect, useState } from "react";
import ResponsiveAppBar from './Components/Header';
import BasicTable from './Components/Table'

const App = () => {
  const [users, setUsers] = useState([])

  const fetchUserData = () => {
    fetch("db.json")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data.empList)
      })
      
  }

  useEffect(() => {
  fetchUserData()
}, [])
  return (
    <div>
      <ResponsiveAppBar/>
      <BasicTable/>
     {users.length > 0 && (
      
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
      
    </div>
  );
}

export default App;