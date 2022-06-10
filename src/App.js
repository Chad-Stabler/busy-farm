import './App.css';
import { useState } from 'react';
import OpenOrClosed from './OpenOrClosed';
import backgroundImg from './background.jpg';


function App() {

  const [snakeSize, setSnakeSize] = useState(25);
  const [lionSize, setLionSize] = useState(25);
  const [isOpen, setIsOpen] = useState(true);
  
  return (
    <div className="App" style={{ background: `url(${ backgroundImg })` }}>
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
      <OpenOrClosed isOpen={isOpen} />
      <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'Close for the night' : 'Open for the day'}</button>
    </div>
  );
}

export default App;
