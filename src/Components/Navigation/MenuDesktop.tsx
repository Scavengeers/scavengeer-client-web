import React, { type FC, type ReactElement, useState } from "react";
import Logo from "../../../public/Logo_DarkTheme.svg";
import Link from "next/link";
import PublishIcon from "./../../../Assets/Icons/publishIcon-darkTheme.svg";
import SaveIcon from "./../../../Assets/Icons/saveIcon-darkTheme.svg";
import axios from "axios";
import { useContext } from "react";
//import { saveGameInfo } from "../../pages/_app";

import { useRouter } from "next/router";
import FadeDiv from "../Helpers/FadeDiv";
import { LineAxisOutlined } from "@mui/icons-material";
import AppContext from "../../AppContext";

type menuItem = {
  title: string;
  url: string;
};

const menuItems: Array<menuItem> = [
  {
    title: "Explore",
    url: "/explore",
  },
  {
    title: "How To Play",
    url: "/how-to-play",
  },
  {
    title: "Profile",
    url: "/profile",
  },
];

// type prop = {
//   gameData: saveGameInfo;
// };

const MenuDesktop = (): ReactElement => {
  const [show] = useState<boolean>(true);
  const value = useContext(AppContext);
  let { gameData } = value.state;
  let selectedGameData = value.setGameData;

  const postGameObject = async () => {
    await axios.post("/editor", gameData);
  };

  return (
    <>
      <div className="flex h-20 max-w-52 items-center gap-14 flex-grow">
        <Link href="/" title="Homepage" className="z-50 w-12">
          <Logo alt="logo menu button" className="logo" />
        </Link>
        {useRouter().pathname === "/editor" && (
          <FadeDiv show={show}>
            <div
              className="flex py-3 px-8 rounded-full gap-10"
              style={{ backgroundColor: "rgb(20, 20, 20)" }}
            >
              <div className="w-7 cursor-pointer" title="Save as Draft">
                <SaveIcon onClick={() => console.log("hello world")}></SaveIcon>
              </div>
              <div className="w-7 cursor-pointer" title="Publish">
                <PublishIcon></PublishIcon>
              </div>
            </div>
          </FadeDiv>
        )}
      </div>
      <ul className="flex gap-12 mr-10">
        {menuItems.map((menuItem, index) => (
          <li key={index} className="menu-item text-xl">
            <Link href={menuItem.url}>{menuItem.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MenuDesktop;
