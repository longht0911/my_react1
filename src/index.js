import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

function App()
{
  const [count, setCount]=useState(0);
  function handle()
  {
    setCount(function()
    {
        return count+1;
    })
  }
  return (
    <div>
    <h1>{count||"Number"}</h1>
    <button onClick={handle}>Click me to plus</button>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


