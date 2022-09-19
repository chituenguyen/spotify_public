import { useState } from "react";
import Content from "./components/Content";
import Navigation from "./components/Navigation";
import { Songs } from "./Context";
import DataSongs from "../src/data/songs.json";
import Playing from "./components/Playing";

function App() {
  const [songPlaying, setSongPlaying] = useState(DataSongs[0]);
  const handleSetSong = (idSong) => {
    const song = DataSongs.find((song) => song.id === idSong);
    if (!song) setSongPlaying(DataSongs[0]);
    else setSongPlaying(song);
  };
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
