import './App.css'
import DateDisplay from './components/date.jsx';
import CountdownTimer from './components/timer.jsx';
import MusicPlayer from './components/musicplayer.jsx';
import RSVPForm from './components/rsvp.jsx';
import { PiChurchThin } from "react-icons/pi";
import { RiHotelLine } from "react-icons/ri";
function App() {

  return (
    <>
      <header class="header-container">
        <div class="welcome">
          <img src="/pics/FOTO1-4.png" className="photo1" />
          
        </div>
      </header>
      <div className='Date'>
        <h2>Tenemos el agrado de invitarte a este día tan importante en nuestras vidas</h2>
        <div className='Date-info'>
          <DateDisplay month="oct" day="3" year="26" />
        </div>
      </div>
      <section className='countdown'>
        <div className='countdown-timer'>
          <CountdownTimer targetDate="2026-10-03T23:59:59" />
        </div>
        <div className='music-player'>
          <h2>Canción que nos define</h2>
          <MusicPlayer photo="/pics/DecorationAdded.jpg" />
        </div>
      </section>
      <section className='aboutUs'>
        <h1>Nuestra Historia</h1>
        <img src="/pics/FloralDownFrame.png" className='frame1' />
        <div className='aboutUs-content'>
          <h2>Nuestra historia</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse tempore ducimus amet pariatur, consectetur minus ea accusamus tempora cum accusantium enim quod dolore facilis vero voluptatum eligendi sapiente. Minus, mollitia!</p>
        </div>
      </section>
      <section className='details'>
        <h1>Detalles del evento</h1>
        <PiChurchThin size={80} style={{color: 'black'}}></PiChurchThin>
        <div className='detail-box'>
          <div className='title-detail'>
            <h2>Ceremonia</h2>
          </div>
          <h2>Parroquia Nuestra Señora de las Gracias - Onuva</h2>
          <p>Hora: 3:30 pm</p>
          <div className='location-buttons'>
            <button>Google Maps</button>
            <button>Waze</button>
          </div>
        </div>
        <div className='detail-box'>
          <RiHotelLine size={80} style={{color: 'black'}} ></RiHotelLine>
          <div className='title-detail'>
            <h2>Recepción</h2>
          </div>
          <h2>Hotel Barceló</h2>
          <p>5:00 pm</p>
          <div className='location-buttons'>
            <button>Google Maps</button>
            <button>Waze</button>
          </div>
        </div>
      </section>
      <section className='itinerario'>
        <h1>Itinerario</h1>
        <img src="/pics/Itinerario.png" className='itinerario-img' />
      </section>
      <section className='dresscode'>
        <h1>Dress code</h1>
        <img src="/pics/DressCode.png" className='dresscode-img' />
      </section>
      <section className='gift'>
        <h1>Regalo</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga cumque, consectetur amet sit quo asperiores similique exercitationem iste, vero inventore ipsa mollitia, earum reiciendis perferendis reprehenderit provident fugiat voluptates sint!</p>
      </section>
      <section className='RSVP'>
        <RSVPForm />
      </section>
    </>
  )
}

export default App
