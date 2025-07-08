import React, { useState } from 'react';
import './login.css';
import googleLogo from './google-logo.png';
import facebookLogo from './facebook-logo.png';
import twitterLogo from './twitter-logo.png';
import { auth, provider } from './firebase';

import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  EmailAuthProvider,
  linkWithCredential
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isNewUser, setIsNewUser] = useState(false);

  const handleGoogleLogin = async () => {
    provider.setCustomParameters({ prompt: 'select_account' });
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      console.log("Google login successful:", user.email);

      // Check if password is already linked
      const hasEmailProvider = user.providerData.some(
        (info) => info.providerId === 'password'
      );

      // If no password provider is linked, ask to set one
      if (!hasEmailProvider) {
        const newPassword = prompt("Set a password so you can also log in with email:");
        if (newPassword) {
          const credential = EmailAuthProvider.credential(user.email, newPassword);
          try {
            await linkWithCredential(user, credential);
            alert("Password set successfully. You can now log in using email/password.");
          } catch (linkErr) {
            console.error("Linking error:", linkErr);
            alert("Could not set password: " + linkErr.message);
          }
        }
      }

      onLogin();
    } catch (err) {
      console.error("Google Login Error:", err.message);
      alert("Google login failed: " + err.message);
    }
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    const action = isNewUser ? createUserWithEmailAndPassword : signInWithEmailAndPassword;

    try {
      const result = await action(auth, email, password);
      console.log(`${isNewUser ? "Registered" : "Logged in"}:`, result.user.email);
      onLogin();
    } catch (err) {
      if (err.code === 'auth/invalid-credential') {
        alert("This email is already registered via Google. Please log in with Google.");
      } else if (err.code === 'auth/email-already-in-use') {
        alert("Account exists with this email. Try logging in or use Google sign-in.");
      } else {
        console.error("Email Auth Error:", err.message);
        alert(err.message);
      }
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h2>{isNewUser ? 'Sign Up' : 'Login'} with Email</h2>
        <form onSubmit={handleEmailLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="submit" type="submit">
            {isNewUser ? 'Sign Up' : 'Login'}
          </button>
        </form>

        <div className="separator">
          <span>or</span>
        </div>

        <h3>Login with</h3>

        <div className="button-div">
          <button className="google-btn" onClick={handleGoogleLogin}>
          <img src={googleLogo} alt="Google" className="icon" />
          </button>
          <button className="google-btn" onClick={handleGoogleLogin}>
          <img src={facebookLogo} alt="Google" className="icon" />
          </button>
          <button className="google-btn" onClick={handleGoogleLogin}>
          <img src={twitterLogo} alt="Google" className="icon" />
          </button>
        </div>
        
        <p>
          {isNewUser ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button
            className="login-sign-up"
            onClick={() => setIsNewUser(!isNewUser)}
            style={{ color: 'blue', background: 'none', border: 'none' }}
          >
            {isNewUser ? 'Login' : 'Sign Up'}
          </button>
        </p>
      </div>
    </div>
  );
}
