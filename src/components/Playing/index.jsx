import React, { useContext, useEffect, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Songs } from "../../context";

const Playing = () => {
  const [songUrl, setSongUrl] = useState("");
  const { songPlaying, handleSetSong } = useContext(Songs);

  const handleClickNext = () => {
    handleSetSong(songPlaying.id + 1);
  };
  const handleClickPre = () => {
    handleSetSong(songPlaying.id - 1);
  };
  const nextSong = () => {
    handleClickNext();
  };

  useEffect(() => {
    setSongUrl(songPlaying.url);
  }, [songPlaying]);
  return (
    <div>
      <AudioPlayer
        autoPlay
        src={songUrl}
        className="fixed top-[100vh] z-10 translate-y-[-100%] h-[90px] py-[16px] px-[20px] bg-[#121212] shadow-lg border-slate-800 border-[1px] rounded-lg"
        // other props here
        showSkipControls={true}
        showJumpControls={false}
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPre}
        onEnded={() => nextSong()}
      />
    </div>
  );
};

export default Playing;
