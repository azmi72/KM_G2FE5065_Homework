import React, { Component }  from 'react';
import { useDispatch } from "react-redux";
import { setToken } from "./token-slice";
import { useEffect } from 'react';
import './App.css';

function Login() {
  const dispatch = useDispatch();

  const handleToken = () => {
    window.location.href= `https://accounts.spotify.com/authorize?client_id=b8b796d897ba407696d6e662c07e38f9&response_type=token&redirect_uri=http://localhost:3000&scope=playlist-modify-private`
  } 

  useEffect(() => {
    dispatch(setToken(window.location.hash.split("&")[0].split("=")[1]));
  })
    
  return (
    <div className="loginpage">
        <button onClick={handleToken}>Login with Spotify</button>
    </div>
  );
}

export default Login;