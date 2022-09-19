import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/logo.jpg";
import { BsPlayCircleFill } from "react-icons/bs";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { Songs } from "../../context";
const Content = () => {
  const { DataSongs, handleSetSong, songPlaying } = useContext(Songs);
  const [songId, setSongId] = useState(0);
  const handlePlaySong = (id) => {
    setSongId(id);
    handleSetSong(id);
  };
  useEffect(()=>{
    setSongId(songPlaying.id)
  },[songPlaying])
  return (
    <div className="col-start-2 col-end-7">
      <div className="">
        <img src={logo} alt="" className="h-full w-full object-cover fixed" />
        <div className="absolute text-white font-semibold pt-[135px] w-5/6">
          <div className="flex pl-[35px]">
            <svg
              role="img"
              height="24"
              width="24"
              className="Svg-ytk21e-0 hFEdcY b0NcxAbHvRbqgs2S8QDg"
              viewBox="0 0 24 24"
            >
              <path d="M10.814.5a1.658 1.658 0 012.372 0l2.512 2.572 3.595-.043a1.658 1.658 0 011.678 1.678l-.043 3.595 2.572 2.512c.667.65.667 1.722 0 2.372l-2.572 2.512.043 3.595a1.658 1.658 0 01-1.678 1.678l-3.595-.043-2.512 2.572a1.658 1.658 0 01-2.372 0l-2.512-2.572-3.595.043a1.658 1.658 0 01-1.678-1.678l.043-3.595L.5 13.186a1.658 1.658 0 010-2.372l2.572-2.512-.043-3.595a1.658 1.658 0 011.678-1.678l3.595.043L10.814.5zm6.584 9.12a1 1 0 00-1.414-1.413l-6.011 6.01-1.894-1.893a1 1 0 00-1.414 1.414l3.308 3.308 7.425-7.425z"></path>
            </svg>
            <p className="ml-4">Verified Artist</p>
          </div>
          <h2 className="text-8xl pl-[35px]">Anthony Hamilton</h2>
          <p className="mt-8 pl-[35px]">1,071,612 monthly listeners</p>
          <div className="mt-8 bg-[#181818] z-10 h-full">
            <div className="pl-[35px] pt-4 flex items-center">
              <BsPlayCircleFill
                color="1ed760"
                size={"57px"}
                className="cursor-pointer"
              />
              <p className="ml-10 border px-5 py-1 border-slate-500 rounded-md cursor-pointer">
                Follow
              </p>
              <BiDotsHorizontalRounded
                size={"30px"}
                className="ml-5 hover:text-white cursor-pointer"
                color="#b3b3b3"
                onMouseOver={({ target }) => (target.style.color = "white")}
                onMouseOut={({ target }) => (target.style.color = "#b3b3b3")}
              />
            </div>
            <div className="grid grid-cols-10 mt-8 h-full gap-4">
              <div className="col-span-6 pl-[35px]">
                <p className="text-2xl mb-10"> Popular</p>
                <div className="">
                  {DataSongs.map((item, index) => {
                    return (
                      <div
                        className={`grid grid-cols-7 pl-[16px] gap-[16px] mb-10 hover:bg-[#242424] py-2 ${
                          songId == item.id ? "text-[#1db954] bg-[#242424]" : ""
                        }`}
                        key={index}
                        onClick={() => handlePlaySong(item.id)}
                      >
                        <div className="col-span-4 flex gap-[16px] items-center">
                          {songId == item.id ? (
                            <img src="https://open.spotifycdn.com/cdn/images/equaliser-green.1184ed87.svg" className="h-[14px]"></img>
                          ) : (
                            <p className="col-span-[16px] text-[#878787]">
                              {index + 1}
                            </p>
                          )}

                          <img
                            src={item.links.images[0].url}
                            alt=""
                            className="h-[40px] w-[40px]"
                          />
                          <p>{item.name}</p>
                        </div>
                        <p className="col-span-2 text-[#878787] flex items-center">
                          47,500,503
                        </p>
                        <p className="text-[#878787] flex items-center">4:06</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="col-span-4 text-2xl">
                <p className="mb-9">Artist pick</p>
                <div className="flex pr-4 gap-4">
                  <img
                    src="https://i.scdn.co/image/ab67706c0000da846a7828e22824ba90c162c4a5"
                    alt=""
                    className="h-[76px]"
                  />
                  <div className="">
                    <p className="text-sm font-thin bg-white text-black px-1 py-1 rounded-full flex gap-2 items-center">
                      <img
                        src="https://i.scdn.co/image/ab6761610000f1781e5b3ab2f2ea0676590587ab"
                        alt=""
                        className="h-[24px] rounded-full"
                      />
                      The Best of Anthony Halmiton
                    </p>
                    <p className="text-[1rem]">
                      Anthony Halmiton | Cornbread, Fish'n, Collard Greens
                    </p>
                    <p className="text-sm font-thin">Playlist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
