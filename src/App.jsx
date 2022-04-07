import './App.css';
import LeftSection from './LeftSection';

function App() {

  const events = [{
    start: 30,
    end: 160,
  },
  {
    start: 540,
    end: 630,
  },
  {
    start: 600,
    end: 690,
  },
  ];

  const arrEvents = [];
  events.forEach(element => arrEvents.push(element));
  arrEvents.forEach(element => element.width =599);
  arrEvents.forEach(element => element.left = 0);
  events[0].left = 0;
  for (let i = 1; i < arrEvents.length; i++) {
    if (arrEvents[i].start < (arrEvents[i - 1].end)) {
    }
    arrEvents[i].width = 199;
    arrEvents[i].left += arrEvents[i-1].left+200;
  }
  console.log(arrEvents);

  return (
    <div className='container'>
    
        <LeftSection/>

    <div className='eventsContainer'>{
      arrEvents.map((event, index) => {
        return (
          <div className='event' style={{ marginTop: (event.start), height: (event.end) - (event.start), width: (event.width), backgroundColor: 'white', marginLeft: (event.left) }}>EVENT</div>

        )
      })
    }
    </div>
    </div>
  )
}

export default App;
