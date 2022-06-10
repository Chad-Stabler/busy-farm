import './App.css';
import { useState } from 'react';


function App() {

  const [snakeSize, setSnakeSize] = useState(25);
  const [lionSize, setLionSize] = useState(25);
  
  return (
    <div className="App">
      <div className='fight'>
        <div className='competitor'>
          <p style={{ fontSize: `${snakeSize}px` }}> {snakeSize > 80 ? '🐉' : '🐍'}</p>
          <button onClick={() => setSnakeSize(snakeSize + 10)}>Grow the snek</button>
          <button onClick={() => setSnakeSize(snakeSize - 10)}>Shrink the snek</button>
        </div>
        <div className='competitor'>
          <p style={{ fontSize: `${lionSize}px` }}> {lionSize > 80 ? '🦁' : '🐈'}</p>
          <button onClick={() => setLionSize(lionSize + 10)}>Feed the cat</button>
          <button onClick={() => setLionSize(lionSize - 10)}>Shrink the cat</button>
        </div>
      </div>
    </div>
  );
}

export default App;
