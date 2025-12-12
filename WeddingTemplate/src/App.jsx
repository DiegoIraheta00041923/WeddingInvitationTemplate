import './App.css'
import DateDisplay from './components/date.jsx';

function App() {

  return (
    <>
    <header class="header-container">
      <div class="welcome">
        <img src="\public\pics\DecorationAdded.jpg" className="photo1" />
        <div className='Names'>
          Name 1 & Name 2
        </div>
      </div>
      <div className='Date'>
        <h2>Tenemos el agrado de invitarte a este día tan importante en nuestras vidas</h2>
        <div className='Date-info'>
          <DateDisplay month="oct" day="19" year="24" />
        </div>
      </div>
    </header>
    </>
  )
}

export default App
