import React from 'react';
import './MusicPlayer.css';
import songss from './media/songs-thumbnail/Mere_Bina.jpg'; 
import icon from './play-fill.png'; 

export default function MusicPlayer() {
  return (
    <div class="main">

        <div class="side-bar">

            <div class="logo">
                <img src="media/logo.png" alt=""></img>
            </div>

            <div class="menu">
                <h1>Home</h1>
                <h1>Search</h1>
                <h1>Playlist</h1>
                <h1>Premium</h1>
            </div>

            <div class="policy">
                <span>Cookies</span>
                <span>Privacy</span>
            </div>

        </div>

        <div class="nav-bar">
            <h1>|</h1>
            <button>Sign Up</button>
        </div>  

        <div class="container">
                <div class="list">

                    <div className="playlist">
                      <h1>Top Songs</h1>
                    </div>

                    <div class="song-list">

                        <div class="indiviual">

                            <img src={songss} alt=""/>

                            <div class="play">
                              <button>
                                 <img src={icon} alt="" />                               
                              </button>

                            </div>

                            <h4>Tera Hua</h4>
                            <p>Loveyatri by Atif Aslam</p>

                        </div>

                         <div class="indiviual">
                            <img src={songss} alt=""/>

                            <div class="play">
                              <span class="fa fa-play"></span>
                            </div>

                            <h4>Tera Hua</h4>
                            <p>Loveyatri by Atif Aslam</p>

                        </div>

                         <div class="indiviual">
                            <img src={songss} alt=""/>

                            <div class="play">
                              <span class="fa fa-play"></span>
                            </div>

                            <h4>Tera Hua</h4>
                            <p>Loveyatri by Atif Aslam</p>

                        </div>

                         <div class="indiviual">
                            <img src={songss} alt=""/>

                            <div class="play">
                              <span class="fa fa-play"></span>
                            </div>

                            <h4>Tera Hua</h4>
                            <p>Loveyatri by Atif Aslam</p>

                        </div>

                         <div class="indiviual">
                            <img src={songss} alt=""/>

                            <div class="play">
                              <span class="fa fa-play"></span>
                            </div>

                            <h4>Tera Hua</h4>
                            <p>Loveyatri by Atif Aslam</p>

                        </div>

                    </div>

                </div> 

                <br /> <br />

                <div class="list">

                    <div className="playlist">
                      <h1>Latest Songs</h1>
                    </div>
            
                    <div class="song-list">

                        <div class="indiviual">
                            <img src={songss} alt=""/>

                            <div class="play">
                              <span class="fa fa-play"></span>
                            </div>

                            <h4>Tera Hua</h4>
                            <p>Loveyatri by Atif Aslam</p>
                        </div>

                        <div class="indiviual">
                            <img src={songss} alt=""/>

                            <div class="play">
                              <span class="fa fa-play"></span>
                            </div>

                            <h4>Tera Hua</h4>
                            <p>Loveyatri by Atif Aslam</p>

                        </div>

                        <div class="indiviual">
                            <img src={songss} alt=""/>

                            <div class="play">
                              <span class="fa fa-play"></span>
                            </div>

                            <h4>Tera Hua</h4>
                            <p>Loveyatri by Atif Aslam</p>

                        </div>

                        <div class="indiviual">
                            <img src={songss} alt=""/>

                            <div class="play">
                              <span class="fa fa-play"></span>
                            </div>

                            <h4>Tera Hua</h4>
                            <p>Loveyatri by Atif Aslam</p>

                        </div>
                        
                        <div class="indiviual">
                            <img src={songss} alt=""/>

                            <div class="play">
                              <span class="fa fa-play"></span>
                            </div>

                            <h4>Tera Hua</h4>
                            <p>Loveyatri by Atif Aslam</p>

                        </div>


                    </div>

                </div> 

                <br /> <br />

                <div class="list">

                    <div className="playlist">
                      <h1>Latest Songs</h1>
                    </div>
            
                    <div class="song-list">

                        <div class="indiviual">
                            <img src={songss} alt=""/>

                            <div class="play">
                              <span class="fa fa-play"></span>
                            </div>

                            <h4>Tera Hua</h4>
                            <p>Loveyatri by Atif Aslam</p>
                        </div>

                        <div class="indiviual">
                            <img src={songss} alt=""/>

                            <div class="play">
                              <span class="fa fa-play"></span>
                            </div>

                            <h4>Tera Hua</h4>
                            <p>Loveyatri by Atif Aslam</p>

                        </div>

                        <div class="indiviual">
                            <img src={songss} alt=""/>

                            <div class="play">
                              <span class="fa fa-play"></span>
                            </div>

                            <h4>Tera Hua</h4>
                            <p>Loveyatri by Atif Aslam</p>

                        </div>

                        <div class="indiviual">
                            <img src={songss} alt=""/>

                            <div class="play">
                              <span class="fa fa-play"></span>
                            </div>

                            <h4>Tera Hua</h4>
                            <p>Loveyatri by Atif Aslam</p>

                        </div>
                        
                        <div class="indiviual">
                            <img src={songss} alt=""/>

                            <div class="play">
                              <span class="fa fa-play"></span>
                            </div>

                            <h4>Tera Hua</h4>
                            <p>Loveyatri by Atif Aslam</p>

                        </div>
                        

                    </div>

                </div> 


          </div>
    </div>

  );
}


// export default function BottomPlayer({ song, onClose }) {
//   return (
//     <div className="bottom-player">
//       <div className="left">
//         <img src={song.img} alt={song.title} />
//         <div className="info">
//           <h4>{song.title}</h4>
//           <p>{song.artist}</p>
//         </div>
//       </div>

//       <div className="center">
//         <span className="fa fa-step-backward"></span>
//         <span className="fa fa-play"></span>
//         <span className="fa fa-step-forward"></span>
//       </div>

//       <div className="right">
//         <span className="fa fa-volume-up"></span>
//         <input type="range" min="0" max="100" />
//         <span className="close" onClick={onClose}>×</span>
//       </div>
//     </div>
//   );
// }

