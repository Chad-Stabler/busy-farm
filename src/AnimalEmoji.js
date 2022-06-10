export default function AnimalEmoji({ animal }) {
  return (<div className="animal">
    {animal === 'deer' && '🦌'}
    {animal === 'sheep' && '🐑'}
    {animal === 'giraffe' && '🦒'}
    {animal === 'monkey' && '🐒'}
  </div>);
}