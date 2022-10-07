import { useState,useEffect } from "react";
import Content from "./components/Content";
import Navigation from "./components/Navigation";
import { Songs } from "./Context";
import DataSongs from "../src/data/songs.json";
import Playing from "./components/Playing";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const username = localStorage.getItem('username');
  if(!username){
    navigate("/");
  }
  const [songPlaying, setSongPlaying] = useState(DataSongs[0]);
  const handleSetSong = (idSong) => {
    const song = DataSongs.find((song) => song.id === idSong);
    if (!song) setSongPlaying(DataSongs[0]);
    else setSongPlaying(song);
  };
  useEffect(() =>{
    
    if (username === null){
      navigate('/login')
    }
  })
  return (
    <Songs.Provider value={{ DataSongs, songPlaying, handleSetSong }}>
      <div className="grid grid-cols-6 h-screen relative">
        <Navigation />
        <Content />
      </div>
      <Playing />
    </Songs.Provider>
  );
}

export default App;
