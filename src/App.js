import './App.css';

function App() {

  const events = [{
    start: 90,
    end: 130,
  },
  {
    start: 105,
    end: 130,
  },
  ];
  // const obj={id:(events.indexOf(element)+1)};
  const arrEvents = [];

  events.forEach(element => element.left=0);
  events.forEach(element => element.width=0);

  events.forEach(element => arrEvents.push(element));
  console.log(arrEvents);
  return (
    <div className='container'>
      hi
    </div>
  )
}
export default App;
