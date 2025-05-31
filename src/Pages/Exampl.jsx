// import React, { useState } from 'react'
import { useEffect, useState } from "react";


const Exampl = () => {
    // const [count, setCount] = useState(0);

    // const [show, setShow] = useState(false);
    const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
        {/* <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button> */}
      {/* <button onClick={()=>setShow(!show)}>Toggle</button>
      {show && <p>This is the text! </p>} */}

       <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
    </div>
  )
}

export default Exampl
