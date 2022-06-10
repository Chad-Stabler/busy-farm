import './App.css';
import { useState } from 'react';
import OpenOrClosed from './OpenOrClosed';
import backgroundImg from './background.jpg';
import Stampede from './Stampede';


function App() {

  const [snakeSize, setSnakeSize] = useState(25);
  const [lionSize, setLionSize] = useState(25);
  const [isOpen, setIsOpen] = useState(true);
  const [animals, setAnimals] = useState(['deer', 'sheep', 'giraffe', 'monkey']);
  function handleAnimalClick(animal) {
    animals.push(animal);

    setAnimals(animals.slice());
  }
  function handleRetireClick() {
    animals.pop();

    setAnimals(animals.slice());
  }
  
  return (
    <div className="App" style={{ background: `url(${ backgroundImg })`, backgroundRepeat: 'no-repeat', backgroundPosition: '100%', backgroundSize: 'cover' }}>
      <div className='fight'>
        <div className='competitor'>
          <p style={{ fontSize: `${snakeSize}px` }}> {snakeSize > 80 ? '🐉' : '🐍'}</p>
          <div>
            <button disabled={!isOpen} onClick={() => setSnakeSize(snakeSize + 10)}>Grow the snek</button>
            <button disabled={!isOpen} onClick={() => setSnakeSize(snakeSize - 10)}>Shrink the snek</button>
          </div>
        </div>
        <div className='competitor'>
          <p style={{ fontSize: `${lionSize}px` }}> {lionSize > 80 ? '🦁' : '🐈'}</p>
          <div>
            <button disabled={!isOpen} onClick={() => setLionSize(lionSize + 10)}>Feed the cat</button>
            <button disabled={!isOpen} onClick={() => setLionSize(lionSize - 10)}>Shrink the cat</button>
          </div>
        </div>
      </div>
      <OpenOrClosed isOpen={isOpen} />
      <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'Close for the night' : 'Open for the day'}</button>
      <div className='stampede'>
        <Stampede animals={animals}/>
        <button disabled={!isOpen} onClick={() => handleAnimalClick('deer')}>Add a deer</button>
        <button disabled={!isOpen} onClick={() => handleAnimalClick('giraffe')}>Add a giraffe</button>
        <button disabled={!isOpen} onClick={() => handleAnimalClick('monkey')}>Add a monkey</button>
        <button disabled={!isOpen} onClick={() => handleAnimalClick('sheep')}>Add a sheep</button>
        <button disabled={!isOpen} onClick={() => handleRetireClick()}>Send the last animal home</button>
      </div>
    </div>
  );
}

export default App;
