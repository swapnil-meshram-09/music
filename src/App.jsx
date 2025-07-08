import React, { useState } from 'react';
import Login from './Login';
import MusicPlayer from './MusicPlayer';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn ? (
        <MusicPlayer />
      ) : (
        <Login onLogin={() => setIsLoggedIn(true)} />
      )}
    </>
  );
}
