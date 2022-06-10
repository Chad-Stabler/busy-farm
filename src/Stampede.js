import AnimalEmoji from './AnimalEmoji';

export default function Stampede({ animals }) {
  return (<div className='species'>
    {
      animals.map((animal, i) => <AnimalEmoji animal={animal} key={animal + i}/>)
    }
  </div>);
}