import CreatePlaylist from './pages/CreatePlaylist'
import { useSelector, useDispatch } from "react-redux";
import { setToken } from "./token-slice";
import { useEffect } from 'react';

function Login() {
  const token = useSelector((state) => state.accesstoken.value);
  const dispatch = useDispatch();

  const handleToken = () => {
    window.location.href= `https://accounts.spotify.com/authorize?client_id=b8b796d897ba407696d6e662c07e38f9&response_type=token&redirect_uri=http://localhost:3000&scope=playlist-modify-private`
  } 

  useEffect(() => {
    dispatch(setToken(window.location.hash.split("&")[0].split("=")[1]));
  })
    
  return (
    <div>
        {token !== undefined ? <CreatePlaylist /> : <button onClick={handleToken}>Login</button>}
    </div>
  );
  
}

export default Login;