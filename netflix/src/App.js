import { useState, useEffect } from 'react';
import logo from './logo.png';
import './App.css';


function App({autoplay}) {
  const [showPlayer, setShowPlayer] = useState(true);

 


  return   (

    <div className='container' >
      <header>
        <div className='picture'>
          <img src={logo} alt="logo" />
          <nav className="navbar ">
            <div className="container1">
              <form className="d-flex gap-3" >
                <select className="form-check " defaultValue="English">
                  <option value="English">English</option>
                  <option value="1">Русский</option>
                </select>
                <button type="button" className=" button1 btn btn-danger btn-sm " > Sign in </button>
              </form>

            </div>
          </nav>

        </div>
        <h1 > Unlimited movies, TV shows, and more</h1>
        <p>Watch anywhere. Cancel anytime.</p>
        <div>
          <form className=' box row g-3 '>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

            <div className="col-auto">
              <input className='form-control' type="email"  placeholder = "Email address " />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-danger mb-3">Get Started </button>
            </div>
          </form>
        </div>
      </header>
      <hr/>
      <section className='enjoy d-flex '>
        <div className='text'>
          <h2>Enjoy on your TV</h2>
          <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
        </div>
        <div className='video'>
          <iframe src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" autoPlay muted ></iframe>

        </div>
        <div className='tv'>
          <img alt src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" />


        </div>
       
      </section>
       <hr/>
      <section className='du d-flex'>
        <div className='sonas'>
          <h2>Download your shows to watch offline</h2>
          <p>Save your favorites easily and always have something to watch.</p>
        </div>
        <div className='tel'>
          <div className='smallbox'>
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" />
            <h4>Stranger Things</h4>
            <h3>Downloading...</h3>

          </div>
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" />
        </div></section>
        <hr/>
      <section className='trys d-flex'>
        <div className='watch'>
          <h2>Watch everywhere</h2>
          <p >Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
          </div>
          <div className=' video2'>
            
          <iframe src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"  autoplay muted ></iframe>
          <img alt src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" />
          </div>
      </section>
      <hr/>
      <section>
        sdfdsfsdg
      </section>
    </div>



  );
}

export default App;
