import React from "react";
import Logo from "../assests/Logo 2.png";
import Snapchat from "../assests/snapchat.png";
import insta from "../assests/Vector.png";
import instaIcon from "../assests/Group 1.png";
import tiktok from "../assests/Icon.png";
function SocialMedia() {
  return (
    <div className=" min-h-screen bg-gradient-to-b from-[#2D2727] to-[#523D32]  ">
      <img src={Logo} alt="" className=" w-36 mx-auto py-10" />
      <div className="flex flex-col items-center justify-center space-y-8 py-20 ">
        <a
          href="https://t.snapchat.com/U5leW6Of"
          class=" px-5 
           py-5 flex items-start justify-start  no-underline bg-[#FFFC00] rounded-lg "
        >
          <img src={Snapchat} alt="" className="w-8 " />
          <span className="font-bold text-lg px-4">Snapchat</span>
        </a>
        <a
          href="https://instagram.com/oryze.ksa?igshid=MzRlODBiNWFlZA=="
          class=" px-4 
           py-5 flex items-start justify-start bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500  no-underline bg-white rounded-lg "
        >
          <img src={instaIcon} alt="" className="w-8 " />
          <span className="font-bold text-lg px-4 text-white">instagram</span>
        </a>
        <a
          href="https://www.tiktok.com/@oryze.ksa?_t=8fBxFmBj81i&_r=1"
          class=" px-4 
           py-5 flex bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 items-start justify-start  no-underline bg-white rounded-lg "
        >
          <img src={tiktok} alt="" className="w-8 " />
          <span className="font-bold text-lg px-8">TikTok</span>
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
