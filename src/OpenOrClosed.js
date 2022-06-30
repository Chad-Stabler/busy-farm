export default function OpenOrClosed({ isOpen }) {
  return (<div className={`sign ${ isOpen ? 'open' : 'closed' }`}>
    {
      isOpen ? 
        <h1>Come on in! have a wonderful time at our lively zoo!</h1> :
        <h1>Sorry, zoo is closed for the night, try again in the morning</h1>
    }
  </div>);
}