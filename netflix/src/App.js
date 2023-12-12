import { useState } from 'react';
import logo from './logo.png';
import './App.css';


const App = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [showInfo1, setShowInfo1] = useState(false);
  const [showInfo2, setShowInfo2] = useState(false);
  const [showInfo3, setShowInfo3] = useState(false);
  const [showInfo4, setShowInfo4] = useState(false);


  const rodyti = () => {
    setShowInfo(!showInfo);
  };
  const rodyti1 = () => {
    setShowInfo1(!showInfo1);
  };
  const rodyti2 = () => {
    setShowInfo2(!showInfo2);
  };
  const rodyti3 = () => {
    setShowInfo3(!showInfo3);
  };
  const rodyti4 = () => {
    setShowInfo4(!showInfo4);
  };

  return (

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
              <input className='form-control' type="email" placeholder="Email address " />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-danger mb-3">Get Started </button>
            </div>
          </form>
        </div>
      </header>
      <hr />
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
      <hr />
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
      <hr />
      <section className='trys d-flex'>
        <div className='watch'>
          <h2>Watch everywhere</h2>
          <p >Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
        </div>
        <div className=' video2'>

          <iframe src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" ></iframe>
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" />
        </div>
      </section>
      <hr />

      <section className='keturi'>
        <div>
          <h3>Frequently Asked Questions</h3>
        </div>
        <div>
          <ul>
            <li><button onClick={rodyti} className='btn btn-lg col-9'> <span className='plus'>What is Netflix?</span> 
            
            
            </button>
            
              {showInfo && (
                <div><p className='col-9'>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
                </p>
                  <p className='col-9'>You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
                  </p>
                </div>
              )}
            </li>

            <li><button onClick={rodyti1} className='btn btn-lg col-9'>How much does Netflix cost?</button>
              {showInfo1 && (
                <div>
                  <p className='col-9'>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR 7.99 to EUR 11.99 a month. No extra costs, no contracts.
                  </p></div>
              )}
            </li>

            <li><button onClick={rodyti2} className='btn btn-lg col-9'>Where can I watch?</button>
              {showInfo2 && (
                <div>
                  <p className='col-9'>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                  </p>
                  <p>You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                  </p>
                </div>
              )}
            </li>
            <li><button onClick={rodyti3} className='btn btn-lg col-9'>Is Netflix good for kids?</button>
              {showInfo3 && (
                <div>
                  <p className='col-9'>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
          </p></div>
              )}
            </li>
            <li><button onClick={rodyti4} className='btn btn-lg col-9'>Why am I seeing this language?</button>
              {showInfo4 && (
                <div>
                  <p className='col-9'> Your browser preferences determine the language shown here.</p>
                  <p>You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                  </p></div>
                
              )}
                </li>   
          </ul>
        </div>
    
      </section>
      <hr />
      <footer>
        <div>
          <p>
            <a href="# ">Questions? Contact us. </a>
          </p>
        </div>
        <div className='li'>
          <ul >
            <li><a href="# ">FAQ</a></li>
            <li><a href="# ">Investor Relations</a></li>
            <li><a href="# ">Privacy</a></li>
            <li><a href="# ">Speed Test</a></li>
            <li><a href="# ">Ad Choices</a></li>
          </ul>
          <ul>
            <li><a href="# ">Help Center</a></li>
            <li><a href="# ">Jobs</a></li>
            <li><a href="# ">Cookie Preferences</a></li>
            <li><a href="# ">Legal Guarantee</a></li>
          </ul>
          <ul>
            <li><a href="# ">Account</a></li>
            <li><a href="# ">Ways to Watch</a></li>
            <li><a href="# ">Corporate Information</a></li>
            <li><a href="# ">Legal Notices</a></li>
          </ul>
          <ul>
            <li><a href="# ">Media Center</a></li>
            <li><a href="# "> Terms of Use</a></li>
            <li><a href="# ">Contact Us</a></li>
            <li><a href="# ">Only on Netflix</a></li>
          </ul>

        </div>
      </footer>
    </div>



  );
}

export default App;
